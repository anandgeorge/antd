import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import React from "react";

const UserActivity = () => (
  <Timeline mode="right">
    <Timeline.Item>Binance API keys added 2015-09-01</Timeline.Item>
    <Timeline.Item>WarirX xlxs uploaded 2015-09-03</Timeline.Item>
    <Timeline.Item>Zebpay csv uploaded 2015-09-04</Timeline.Item>
    <Timeline.Item>Bitbns csv uploaded 2015-09-06</Timeline.Item>
  </Timeline>
);

export default UserActivity;
