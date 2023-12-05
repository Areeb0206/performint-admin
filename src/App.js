import React, { useEffect, useState, lazy, useCallback } from "react";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { ConfigProvider, notification } from "antd";
import store from "./redux/store";
import Admin from "./routes/admin";
import Auth from "./routes/auth";
import "./static/css/style.css";
import config from "./config/config";
import ProtectedRoute from "./components/utilities/protectedRoute";
import "antd/dist/antd.less";
import IBOSelection from "./container/iboSelection";
import { iboAtom, iboListAtom } from "./jotaiStore/ibo";
import { useAtom } from "jotai";
import { getIBODetails } from "./redux/ibo/service";

const NotFound = lazy(() => import("./container/pages/404"));

const { theme } = config;

function ProviderConfig() {
  const { rtl, isLoggedIn, topMenu, mainContent } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
      mainContent: state.ChangeLayoutMode.mode,
      isLoggedIn: state.auth.login,
      currentUser: state.currentUser.data,
    };
  });
  const [path, setPath] = useState(window.location.pathname);
  const [iboDetails, setIboDetails] = useAtom(iboAtom);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setPath(window.location.pathname);
    }
    return () => (unmounted = true);
  }, [setPath]);
  const iboData = JSON.parse(localStorage.getItem("iboDetails"));
  const [, setIboList] = useAtom(iboListAtom);

  useEffect(() => {
    if (iboData) {
      setIboDetails(iboData);
    }
  }, []);
  const IboListFunc = useCallback(async () => {
    return getIBODetails()
      .then((res) => {
        setIboList(res?.data?.data);
      })
      .catch((err) => {
        notification.error({
          message: err?.message,
        });
      });
  }, []);
  useEffect(() => {
    IboListFunc();
  }, [IboListFunc]);
  return (
    <ConfigProvider direction={rtl ? "rtl" : "ltr"}>
      <ThemeProvider theme={{ ...theme, rtl, topMenu, mainContent }}>
        <Router basename={process.env.PUBLIC_URL}>
          {!isLoggedIn ? (
            <Routes>
              <Route path="/*" element={<Auth />} />{" "}
            </Routes>
          ) : (
            <Routes>
              {!!iboData?._id === false ? (
                <Route
                  path="/*"
                  element={
                    <ProtectedRoute path="/*" Component={IBOSelection} />
                  }
                />
              ) : (
                <></>
              )}

              <Route
                path={`/ibo/${iboDetails?._id}/*`}
                element={<ProtectedRoute path="/*" Component={Admin} />}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
          {isLoggedIn &&
            (path === process.env.PUBLIC_URL ||
              path === `${process.env.PUBLIC_URL}/`) && (
              <Routes>
                <Route path="/" element={<Navigate to="/" />} />
              </Routes>
            )}
        </Router>
      </ThemeProvider>
    </ConfigProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ProviderConfig />
    </Provider>
  );
}

export default App;
