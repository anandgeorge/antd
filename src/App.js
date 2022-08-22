import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import LineChart from "./Components/Line";
import AreaChart from "./Components/Area";
import StackedChart from "./Components/Stacked";
import ColumnChart from "./Components/Column";
import TreemapChart from "./Components/TreeMap";
import DualMultiLineChart from "./Components/DualMultiLine";
import GaugePlot from "./Components/GaugePlot";
import LiquidPlot from "./Components/LiquidPlot";
import Transactions from "./Components/Transactions";
import Wallet from "./Components/Wallet";
import UserWallet from "./Components/UserWallet";
import Portfolio from "./Components/Portfolio";
import UserActivity from "./Components/UserActivity";
import SystemActivity from "./Components/SystemActivity";

import {
  Row,
  Col,
  Card,
  Avatar,
  Skeleton,
  Switch,
  Form,
  Input,
  Button,
} from "antd";
import "./App.css";
import LoginForm from "./Components/LoginForm";

const { Meta } = Card;

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Row
          style={{
            paddingTop: "50px",
            paddingRight: "40px",
            margin: "20px 20px",
          }}
        >
          {/* <Col span={8}>
            <Card style={{ marginBottom: "5px" }}>
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Market"
                description="Month-wise P&L"
              />
              <GaugePlot />
            </Card>
          </Col> */}
          <Col span={8}>
            <Card style={{ marginBottom: "5px", height: "270px" }}>
              <Meta
                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Assets"
                // description="Month-wise P&L"
                style={{ paddingBottom: "10px", paddingTop: "-5px" }}
              />
              <TreemapChart style={{ marginTop: "10px" }} />
            </Card>
          </Col>
          <Col span={8}>
            <Portfolio />
          </Col>
          <Col span={8}>
            <Card style={{ marginBottom: "5px" }}>
              <Meta
                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Plan Utilisation"
                // description="Month-wise P&L"
                // style={{ paddingBottom: "5px", paddingTop: "-5px" }}
              />
              <LiquidPlot />
            </Card>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "20px",
            paddingRight: "40px",
            margin: "20px 20px",
          }}
        >
          <Col span={12} style={{ paddingRight: "40px" }}>
            <Card style={{ marginBottom: "5px" }}>
              <Meta
                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Cost basis"
                // description="Input costs for trades"
                style={{ paddingBottom: "10px", paddingTop: "-5px" }}
              />
              <DualMultiLineChart />
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{ marginBottom: "5px" }}>
              <Meta
                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Buy vs Sell"
                // description="Month-wise P&L"
                style={{ paddingBottom: "10px", paddingTop: "-5px" }}
              />
              <StackedChart style={{ margin: "10px 10px" }} />
            </Card>
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: "20px",
            paddingRight: "40px",
            margin: "20px 20px",
          }}
        >
          <Col span={12} style={{ paddingRight: "40px" }}>
            <UserActivity />
          </Col>
          <Col span={12}>
            <SystemActivity />
          </Col>
        </Row>
        <UserWallet />
        <Wallet />
        {/* <Transactions /> */}
      </div>
      // MagicLink Page Start
      // <LoginForm />
      // MagicLink Page End
    );
  }
}

export default App;
