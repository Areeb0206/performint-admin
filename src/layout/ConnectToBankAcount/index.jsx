import React from "react";
import { usePlaidLink } from "react-plaid-link";
import { plaidAtom } from "../../jotaiStore/plaid";
import { useAtom } from "jotai";
import { creatAccessToken } from "../../redux/plaidActions/services";
import { useDispatch, useSelector } from "react-redux";
import { iboAtom, iboListAtom } from "../../jotaiStore/ibo";
import { getMe } from "../../redux/me/actionCreator";

export default function ConnectToBankAccount({ setLoading }) {
  const [linkToken] = useAtom(plaidAtom);
  const dispatch = useDispatch();
  const [iboDetails, setIboDetails] = useAtom(iboAtom);
  const [IboList, setIboList] = useAtom(iboListAtom);

  const { open, ready } = usePlaidLink({
    token: linkToken?.linkToken?.link_token,
    onSuccess: async (public_token, metadata) => {
      // setLoading(true);
      await creatAccessToken(iboDetails?._id, metadata);
      await dispatch(getMe());
      setIboDetails({
        ...iboDetails,
        hasBankAccountLinked: true,
      });

      const updatedIboList = IboList?.map((i) => {
        if (i._id === iboDetails?._id) {
          return {
            ...i,
            hasBankAccountLinked: true,
          };
        }
        return i;
      });
      setIboList(updatedIboList);
      // setLoading(false);
    },
    onExit: () => {},
    onLoad: () => {},
  });

  return (
    <div>
      <button
        onClick={() => {
          open();
          // setLoading(true);
        }}
        disabled={!ready}
        className="bg-primary shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] text-white  hover:text-black shadow-sm font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <span className="text-xl"> Connect a bank account</span>
      </button>
    </div>
  );
}
