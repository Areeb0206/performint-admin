import propTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { getMe } from "../../redux/me/actionCreator";
import {
  createLinkToken,
  getPlaidLinkToken,
} from "../../redux/plaidActions/services";
import { ContextProvider } from "../../ContextProvider";
import { useAtom } from "jotai";
import { plaidAtom } from "../../jotaiStore/plaid";
import axios from "axios";
const SecurityWrapper = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, []);
  return children;
};

function ProtectedRoute({ Component, path }) {
  const { isLoggedIn, currentUser } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
      mainContent: state.ChangeLayoutMode.mode,
      isLoggedIn: state.auth.login,
      currentUser: state.currentUser.data,
    };
  });
  const [linkToken, setLinkToken] = useAtom(plaidAtom);
  const [loading, setLoading] = useState(false);
  const getLinkToken = async () => {
    if (currentUser?._id) {
      const res = await getPlaidLinkToken();
      if (res?.data?.linkToken) {
        setLinkToken({
          linkToken: res?.data?.linkToken,
        });
        return;
      }
      const createToken = await createLinkToken();
      if (createToken?.data?.linkToken) {
        setLinkToken({
          linkToken: createToken?.data?.linkToken,
        });
        return;
      }
    }
  };
  useEffect(() => {
    getLinkToken();
  }, [currentUser?._id]);

  // useEffect(() => {
  //   var config = {
  //     method: "get",
  //     maxBodyLength: Infinity,
  //     url: "https://gateway.fppdashboard.com/payments",
  //     headers: {
  //       "Cache-Control": "no-cache",
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       Authorization: "Bearer DN7lG.nxUQROu3wMu3eC_g-umYvtGFFMThyUnf",
  //     },
  //     withCredentials: false,
  //     crossDomain: true,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  return isLoggedIn ? (
    <SecurityWrapper>
      <Routes>
        <Route
          element={
            <ContextProvider.Provider
              value={{ linkToken, setLoading, loading }}
            >
              <Component />
            </ContextProvider.Provider>
          }
          path={path}
        />
      </Routes>
    </SecurityWrapper>
  ) : (
    <Routes>
      {" "}
      <Route path="/" element={<Navigate to="/" />} />
    </Routes>
  );
}

ProtectedRoute.propTypes = {
  Component: propTypes.object.isRequired,
  path: propTypes.string.isRequired,
};

export default ProtectedRoute;
