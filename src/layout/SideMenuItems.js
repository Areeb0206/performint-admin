import { Uil12Plus } from "@iconscout/react-unicons";
import { UilPlus } from "@iconscout/react-unicons";
import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UilEllipsisV from "@iconscout/react-unicons/icons/uil-ellipsis-v";
import propTypes from "prop-types";
import { useAtom } from "jotai";
import { iboAtom } from "../jotaiStore/ibo";
const { SubMenu, Item } = Menu;

function MenuItems({ toggleCollapsed, collapsed }) {
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

  const [iboDetails] = useAtom(iboAtom);

  const [path, setPath] = useState(`ibo/${iboDetails?._id}/dashboard`);
  const pathName = window.location.pathname;
  const pathArray = pathName || [];
  const mainPath = pathArray;
  const mainPathSplit = mainPath.split("/");
  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [mainPathSplit?.[mainPathSplit?.length - 1]] : []
  );
  const onOpenChange = (keys) => {
    setOpenKeys(
      keys[keys.length - 1] !== "recharts"
        ? [keys.length && keys[keys.length - 1]]
        : keys
    );
  };

  const onClick = (item) => {
    setPath(item.key);
    if (item.keyPath.length === 1) setOpenKeys([]);
  };
  const items = [
    getItem(
      <NavLink
        onClick={toggleCollapsed}
        to={`dashboard`}
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
    getItem(
      <NavLink onClick={toggleCollapsed} className="text-white text-xl">
        {t("Merchant")}
      </NavLink>,
      "merchant",
      !topMenu && (
        <img
          style={{
            maxWidth: "20px",
          }}
          className="w-full max-w-[20px] xs:max-w-[20px] object-contain"
          src={require(`../static/performmint/dashboard/dashboard.png`)}
          alt=""
        />
      ),
      [
        getItem(
          <NavLink onClick={toggleCollapsed} to={`merchant`}>
            {t("Merchant1")}
          </NavLink>,
          "merchant",
          null
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`merchant`}>
            {t("Merchant2")}
          </NavLink>,
          "Merchant2",
          null
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={`merchant`}>
            {t("Merchant3")}
          </NavLink>,
          "Merchant3",
          null
        ),
      ]
    ),
  ];

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? "inline" : "horizontal"}
      selectedKeys={
        !topMenu
          ? `${
              mainPathSplit?.includes("dashboard")
                ? "dashboard"
                : mainPathSplit?.includes("merchant")
                ? "merchant"
                : []
            }`
          : []
      }
      defaultOpenKeys={
        !topMenu ? [mainPathSplit?.[mainPathSplit?.length - 1]] : []
      }
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      style={{
        backgroundColor: "#000000",
      }}
    >
      {items.map((item) => {
        if (item.children) {
          return (
            <SubMenu
              key={item.key}
              icon={item.icon}
              expandIcon={
                !collapsed
                  ? item.children?.length > 0 && <UilPlus className="text-xl" />
                  : false
              }
              title={
                <span className="ant-menu-title-content  ">
                  <span>{item.label}</span>
                </span>
              }
            >
              {item.children.map((child) => {
                return (
                  <Item style={{}} key={child.key} icon={child.icon}>
                    <NavLink
                      className="text-white"
                      onClick={toggleCollapsed}
                      to={`${path}${child.key}`}
                    >
                      {child.label}
                    </NavLink>
                  </Item>
                );
              })}
            </SubMenu>
          );
        }
        return (
          <Item className="" key={item.key} icon={item.icon}>
            <NavLink onClick={toggleCollapsed} to={`${path}${item.key}`}>
              {item.label}
            </NavLink>
          </Item>
        );
      })}
    </Menu>
  );
}

MenuItems.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
