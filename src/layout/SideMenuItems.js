import { UilCreateDashboard } from "@iconscout/react-unicons";
import { Menu } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UilEllipsisV from "@iconscout/react-unicons/icons/uil-ellipsis-v";
import propTypes from "prop-types";

function MenuItems({ toggleCollapsed }) {
  const { t } = useTranslation();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const { topMenu } = useSelector((state) => {
    return {
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });

  const path = "/";
  const pathName = window.location.pathname;
  const pathArray = pathName || [];
  const mainPath = pathArray;
  const mainPathSplit = mainPath.split("/");

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu
      ? [`${mainPathSplit.length > 1 ? [mainPathSplit[1]] : "dashboard"}`]
      : []
  );

  const onOpenChange = (keys) => {
    setOpenKeys(
      keys[keys.length - 1] !== "recharts"
        ? [keys.length && keys[keys.length - 1]]
        : keys
    );
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  const items = [
    getItem(
      <NavLink
        onClick={toggleCollapsed}
        to={`${path}`}
        className="text-white text-xl"
      >
        {t("Dashboard")}
      </NavLink>,
      "dashboard",
      !topMenu && (
        <img
          style={{
            maxWidth: "20px",
          }}
          className="w-full max-w-[20px] xs:max-w-[20px] object-contain"
          src={require(`../static/performmint/dashboard/dashboard.png`)}
          alt=""
        />
      )
    ),
  ];

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? "inline" : "horizontal"}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1
                  ? "dashboard"
                  : mainPathSplit.length === 2
                  ? mainPathSplit[1]
                  : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={
        !topMenu
          ? [`${mainPathSplit.length > 2 ? [mainPathSplit[1]] : "dashboard"}`]
          : []
      }
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      items={items}
      className="hover:bg-[#004DA7] hover:rounded-2xl bg-transparent text-white gap-4"
    />
  );
}

MenuItems.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
