import { Button, Timeline } from "antd";
import React, { useState } from "react";
import { ClockCircleOutlined } from "@ant-design/icons";

const SystemActivity = () => {
  const [reverse, setReverse] = useState(false);

  const handleClick = () => {
    setReverse(!reverse);
  };

  return (
    <div>
      <Timeline pending="Recording..." reverse={reverse}>
        <Timeline.Item>Sync for Binance API 2015-09-01</Timeline.Item>
        <Timeline.Item
          dot={
            <ClockCircleOutlined
              style={{
                fontSize: "16px",
              }}
            />
          }
          color="red"
        >
          Issues with WazirX xlxs upload 2015-09-03
        </Timeline.Item>
        <Timeline.Item>
          Zebpay csv uploaded successfully 2015-09-04
        </Timeline.Item>
      </Timeline>
      <Button
        type="primary"
        style={{
          marginTop: 16,
        }}
        onClick={handleClick}
      >
        Toggle Reverse
      </Button>
    </div>
  );
};

export default SystemActivity;
