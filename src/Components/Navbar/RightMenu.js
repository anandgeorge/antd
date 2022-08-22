import React from "react";
import { Menu, Grid } from "antd";
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

// see this to migrate to a later version
// https://ant.design/components/menu/

const RightMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="ali">
        <a href="/">Reports</a>
      </Menu.Item>
      <Menu.Item key="mail">
        <a href="/">Login</a>
      </Menu.Item>
      {/* <Menu.Item key="app">
        <a href="/">Signup</a>
      </Menu.Item> */}
    </Menu>
  );
};

export default RightMenu;
