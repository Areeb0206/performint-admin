import {
  UilCreateDashboard,
  UilDollarAlt,
  //   UilClipboardAlt,
  //   UilShieldCheck,
  //   UilDollarAlt,
} from '@iconscout/react-unicons';
import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';

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

  // const dispatch = useDispatch();

  const path = '/';

  const pathName = window.location.pathname;
  const pathArray = pathName || [];
  const mainPath = pathArray;
  const mainPathSplit = mainPath.split('/');

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 1 ? [mainPathSplit[1]] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  const items = [
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}`}>
        {t('dashboard')}
      </NavLink>,
      'dashboard',
      !topMenu && <UilCreateDashboard />,
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={`${path}collections`}>
        {t('Collections')}
      </NavLink>,
      'collections',
      !topMenu && <UilDollarAlt />,
    ),
    // getItem(
    //   <NavLink onClick={toggleCollapsed} to={`${path}complaint`}>
    //     {t('Complaints')}
    //   </NavLink>,
    //   'complaint',
    //   !topMenu && <UilClipboardAlt />,
    // ),
    // getItem(t('Collections'), 'collections', !topMenu && <UilDollarAlt />, [
    //   getItem(
    //     <NavLink onClick={toggleCollapsed} to={`${path}collections/complaints`}>
    //       {t('Complaints')}
    //     </NavLink>,
    //     'complaints',
    //     null,
    //   ),
    //   getItem(
    //     <NavLink onClick={toggleCollapsed} to={`${path}collections/partners`}>
    //       {t('Partners')}
    //     </NavLink>,
    //     'partners',
    //     null,
    //   ),
    // ]),
    // getItem(
    //   <NavLink onClick={toggleCollapsed} to={`${path}dispatchguard`}>
    //     {t('Dispatch Guard')}
    //   </NavLink>,
    //   'dispatchguard',
    //   !topMenu && <UilShieldCheck />,
    // ),
    // getItem(
    //   <NavLink onClick={toggleCollapsed} to={`${path}contactus`}>
    //     {t('Contact Us')}
    //   </NavLink>,
    //   'contactus',
    //   !topMenu && <UilShieldCheck />,
    // ),
  ];

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      // // eslint-disable-next-line no-nested-ternary
      defaultSelectedKeys={
        !topMenu
          ? [
              `${
                mainPathSplit.length === 1
                  ? 'dashboard'
                  : mainPathSplit.length === 2
                  ? mainPathSplit[1]
                  : mainPathSplit[2]
              }`,
            ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? [mainPathSplit[1]] : 'dashboard'}`] : []}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      items={items}
    />
  );
}

MenuItems.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
