import React from "react";
import { usePlaidLink } from "react-plaid-link";
import { plaidAtom } from "../../jotaiStore/plaid";
import { useAtom } from "jotai";
import { creatAccessToken } from "../../redux/plaidActions/services";
import { useDispatch } from "react-redux";
import { getMe } from "../../redux/me/actionCreator";
export default function ConnectToBankAccount({ setLoading }) {
  const [linkToken] = useAtom(plaidAtom);
  const dispatch = useDispatch();

  const { open, ready } = usePlaidLink({
    token: linkToken?.linkToken?.link_token,
    onSuccess: async (public_token, metadata) => {
      // setLoading(true);
      await creatAccessToken(metadata);
      await dispatch(getMe());
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
