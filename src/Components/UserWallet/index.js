import React from "react";
import { Row, Col, Card, Image, Space, Pagination, Input } from "antd";
import LiquidPlot from "../LiquidPlot";
import GaugePlot from "../GaugePlot";
import TreemapChart from "../TreeMap";

import {
  HomeFilled,
  LoadingOutlined,
  AppstoreAddOutlined,
  CloudUploadOutlined,
  PlusCircleOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  CheckSquareOutlined,
  CloseSquareOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const { Search } = Input;
const wallets = [
  {
    id: 2,
    name: "Coinbase",
    tag: "coinbase",
    uploaded: true,
    sync: true,
    finalised: true,
    src: "https://i.pravatar.cc/120?img=70",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/002/original.jpg?1639666891",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/002/medium.jpg?1639666891",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/002/thumb.jpg?1639666891",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: [],
    api_oauth_url:
      "https://www.coinbase.com/oauth/authorize?account=all\u0026client_id=d0ea174c4541f406e74348b41853306789dbc21b62387d7c321e8b1a9d6f5405\u0026redirect_uri=https%3A%2F%2Fapp.koinly.io%2Fcallbacks%2Fcoinbase_wallet\u0026response_type=code\u0026scope=wallet%3Aaccounts%3Aread%2Cwallet%3Abuys%3Aread%2Cwallet%3Adeposits%3Aread%2Cwallet%3Asells%3Aread%2Cwallet%3Atransactions%3Aread%2Cwallet%3Awithdrawals%3Aread\u0026state=11",
    api_optional_fields: [],
    api_notes: [
      "good:Trades \u0026 fees",
      "good:Deposits",
      "good:Withdrawals",
      "good:Vault",
      "good:Spot prices",
    ],
    instructions_url: "https://koinly.io/integrations/coinbase",
  },
  {
    id: 1,
    name: "Coinbase Pro",
    tag: "gdax",
    src: "https://i.pravatar.cc/120?img=69",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/002/original.jpg?1639666891",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/002/medium.jpg?1639666891",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/002/thumb.jpg?1639666891",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret", "api_pass"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Trades \u0026 fees",
      "good:Margin trades",
      "good:Deposits",
      "good:Withdrawals",
      "good:Fee rebates",
      "bad:Multiple portfolios",
    ],
    instructions_url: "https://koinly.io/integrations/coinbase-pro/",
  },
  {
    id: 3,
    name: "Binance",
    tag: "binance",
    finalised: true,
    src: "https://i.pravatar.cc/120?img=68",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/003/original.jpg?1644242832",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/003/medium.jpg?1644242832",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/003/thumb.jpg?1644242832",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Trades \u0026 fees",
      "good:Margin trades",
      "good:Futures",
      "good:Airdrops/Forks",
      "good:Deposits \u0026 Withdrawals",
      "bad:BSwaps",
      "Binance API import normally takes ~50 minutes to complete",
      "limit:Dust conversions older than 1 year are not provided",
      "limit:Only Futures from the last 3 months are imported",
      "limit:Convert trades before 2021-01-01 are not provided by API",
    ],
    instructions_url: "https://koinly.io/integrations/binance",
  },
  {
    id: 70,
    name: "Binance US",
    tag: "binance_us",
    src: "https://i.pravatar.cc/120?img=65",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/003/original.jpg?1644242832",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/003/medium.jpg?1644242832",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/003/thumb.jpg?1644242832",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Trades \u0026 fees",
      "good:Deposits",
      "good:Withdrawals",
      "bad:Fiat purchases",
      "bad:Convert trades",
      "bad:C2C trades",
      "bad:Margin purchases",
      "limit:Fiat purchases are not returned by the Binance US API",
    ],
    instructions_url: "https://koinly.io/integrations/binance-us",
  },
];

// const wallets = [
//   {
//     name: "Coinbase",
//     src: "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/002/medium.jpg?1639666891",
//   },
//   {
//     name: "Coinbase Pro",
//     src: "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/001/medium.png?1639666899",
//   },
//   {
//     name: "Binance",
//     src: "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/003/medium.jpg?1644242832",
//   },
// ];
const UserWallet = () => {
  return (
    <Row
      style={{
        paddingTop: "20px",
        paddingRight: "40px",
        margin: "20px 20px",
      }}
    >
      {/* <Search
        placeholder="search by wallet, exchange, blockchain and service"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      /> */}
      {/* <Search
        placeholder="search by wallet, exchange, blockchain and service"
        enterButton="Search"
        size="large"
        loading
      /> */}
      {wallets.map((wallet) => (
        <Col span={3} key={wallet.id}>
          <Card style={{ border: "1px solid #ffffff" }}>
            {/* <Image width={120} src={wallet.icon.medium} /> */}
            <Image
              width={120}
              src={wallet.src}
              style={{ borderRadius: "50%" }}
              fallback="data:image/png;base64,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"
            />
            <Space style={{ padding: "5px 5px" }}>
              <Image width={20} src={wallet.icon.small} />
              {/* <HomeFilled
                style={{
                  fontSize: "20px",
                  color: "green",
                }}
              /> */}
              {/* <PlusCircleOutlined
                style={{
                  fontSize: "20px",
                }}
              /> */}
              {/* <SmileOutlined /> */}
              <SyncOutlined
                spin={wallet.sync}
                style={{
                  fontSize: "20px",
                }}
              />
              {/* <SmileOutlined
              rotate={180}
              style={{
                fontSize: "16px",
              }}
            /> */}
              {wallet.uploaded ? (
                <CloudUploadOutlined
                  style={{
                    fontSize: "16px",
                  }}
                />
              ) : (
                <LoadingOutlined
                  style={{
                    fontSize: "16px",
                  }}
                />
              )}
              {wallet.finalised ? (
                <CheckSquareOutlined
                  style={{
                    fontSize: "20px",
                    color: "green",
                  }}
                />
              ) : (
                <CloseSquareOutlined
                  style={{
                    fontSize: "20px",
                    color: "red",
                  }}
                />
              )}
            </Space>
          </Card>
        </Col>
      ))}
      {/* <Pagination
        style={{ margin: "20px 20px" }}
        defaultCurrent={1}
        total={50}
      /> */}
    </Row>
  );
};
export default UserWallet;
