import UilAngleDown from "@iconscout/react-unicons/icons/uil-angle-down";
import UilBell from "@iconscout/react-unicons/icons/uil-bell";
import UilDollarSign from "@iconscout/react-unicons/icons/uil-dollar-sign";
import UilSetting from "@iconscout/react-unicons/icons/uil-setting";
import UilSignout from "@iconscout/react-unicons/icons/uil-signout";
import UilUser from "@iconscout/react-unicons/icons/uil-user";
import UilUsersAlt from "@iconscout/react-unicons/icons/uil-users-alt";
import { Avatar } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import Message from "./Message";
import Notification from "./Notification";
import Settings from "./settings";
import { Popover } from "../../popup/popup";
import Heading from "../../heading/heading";
import { logOut } from "../../../redux/authentication/actionCreator";

const AuthInfo = React.memo(() => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.data);
  const navigate = useNavigate();
  const [, setLinkToken] = useState({});

  const SignOut = (e) => {
    e.preventDefault();
    setLinkToken({});
    dispatch(logOut(() => navigate("/")));
  };

  const userContent = (
    <div>
      <div className="min-w-[280px] sm:min-w-full pt-4">
        <figure className="flex items-center text-sm rounded-[8px] bg-section dark:bg-white10 py-[20px] px-[25px] mb-[12px]">
          <img
            className="ltr:mr-4 rtl:ml-4"
            src={require("../../../static/img/avatar/chat-auth.png")}
            alt=""
          />
          <figcaption>
            <Heading as="h5">{currentUser.name}</Heading>
            <p>
              {currentUser.driver_count === "1" &&
              currentUser.power_units_count === "1"
                ? "Owner operator"
                : "Fleet owner"}
            </p>
          </figcaption>
        </figure>
        <ul className="mb-0">
          <li>
            <Link
              to="#"
              className="inline-flex items-center hover:bg-shadow-transparent text-light dark:text-white60 dark:hover:text-white hover:text-primary dark:hover:bg-white10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
            >
              <UilUser className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Profile
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="inline-flex items-center hover:bg-shadow-transparent text-light dark:text-white60 dark:hover:text-white hover:text-primary dark:hover:bg-white10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
            >
              <UilSetting className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Settings
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="inline-flex items-center hover:bg-shadow-transparent text-light dark:text-white60 dark:hover:text-white hover:text-primary dark:hover:bg-white10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
            >
              <UilDollarSign className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Billing
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="inline-flex items-center hover:bg-shadow-transparent text-light dark:text-white60 dark:hover:text-white hover:text-primary dark:hover:bg-white10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
            >
              <UilUsersAlt className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Activity
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="inline-flex items-center hover:bg-shadow-transparent text-light dark:text-white60 dark:hover:text-white hover:text-primary dark:hover:bg-white10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-150"
            >
              <UilBell className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Help
            </Link>
          </li>
        </ul>
        <Link
          to="#"
          onClick={SignOut}
          className="flex items-center justify-center text-sm font-medium bg-[#f4f5f7] dark:bg-[#32333f] h-[50px] text-light hover:text-primary dark:hover:text-white60 dark:text-white87 mx-[-15px] mb-[-15px] rounded-b-6"
        >
          <UilSignout className="w-4 h-4 ltr:mr-3 rtl:ml-3" /> Sign Out
        </Link>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-end flex-auto">
      <div className="md:hidden">
        <Search />
      </div>
      <Message />
      <Notification />
      <Settings />
      <div className="flex ltr:ml-3 rtl:mr-3 ltr:mr-4 rtl:ml-4 ssm:mr-0 ssm:rtl:ml-0">
        <Popover placement="bottomRight" content={userContent} action="click">
          <Link
            to="#"
            className="flex items-center text-light whitespace-nowrap"
          >
            <Avatar src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png" />
            <span className="ltr:mr-1.5 rtl:ml-1.5 ltr:ml-2.5 rtl:mr-2.5 text-body dark:text-white60 text-sm font-medium md:hidden">
              {currentUser.name}
            </span>
            <UilAngleDown className="w-4 h-4 ltr:md:ml-[5px] rtl:md:mr-[5px]" />
          </Link>
        </Popover>
      </div>
    </div>
  );
});

export default AuthInfo;
