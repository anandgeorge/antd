import { Button, Card, Col, Row, Statistic } from "antd";
import React from "react";

const Portfolio = () => (
  <Card
    style={{
      height: "268px",
    }}
  >
    <Row gutter={16} style={{ paddingTop: "5px" }}>
      <Col span={12}>
        <Statistic title="Total Value" value={112893} />
      </Col>
      <Col span={12}>
        <Statistic title="Total Transactions" value={8125} precision={2} />
      </Col>
    </Row>
    <Row gutter={16} style={{ paddingTop: "5px" }}>
      <Col span={12}>
        <Statistic title="Today's Value" value={1128} />
      </Col>
      <Col span={12}>
        <Statistic title="Today's Transactions" value={93} precision={2} />
      </Col>
    </Row>
    <Row gutter={16} style={{ paddingTop: "5px" }}>
      <Col span={12}>
        <Statistic title="Total P&L" value={22893} />
      </Col>
      <Col span={12}>
        <Statistic title="Today's P&L" value={-265} precision={2} />
      </Col>
    </Row>
  </Card>
);

export default Portfolio;
