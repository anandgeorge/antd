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
    id: 258,
    name: "FTX",
    tag: "ftx",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/258/original.png?1644243203",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/258/medium.png?1644243203",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/258/thumb.png?1644243203",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: ["subaccount", { skip_subaccounts: "boolean" }],
    api_notes: [
      "good:Deposits",
      "good:Withdrawals",
      "good:Trades",
      "good:Conversions",
      "good:Airdrops",
      "good:Staking rewards",
      "good:Lending",
      "bad:Margin trades",
      "limit:Margin trades on FTX are imported as Pnl so you will not see any actual trades, only the profit/loss from the trades",
    ],
    instructions_url: "https://koinly.io/integrations/ftx",
  },
  {
    id: 35,
    name: "Gemini",
    tag: "gemini",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/035/original.jpg?1640012575",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/035/medium.jpg?1640012575",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/035/thumb.jpg?1640012575",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: ["good:Trades \u0026 fees", "good:Deposits", "good:Withdrawals"],
    instructions_url: "https://koinly.io/integrations/gemini",
  },
  {
    id: 3,
    name: "Binance",
    tag: "binance",
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
    id: 32,
    name: "Kraken",
    tag: "kraken",
    sync: true,
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/032/original.jpg?1639666934",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/032/medium.jpg?1639666934",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/032/thumb.jpg?1639666934",
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
      "good:Staking",
      "good:Deposits",
      "good:Withdrawals",
      "bad:Rollover margin fees",
      "limit:\u003cb\u003eMargin trades\u003c/b\u003e If you have an old account with lots of margin trades, you should disable the historical-data option on API and import your ledgers.csv file",
      "limit:Purchases made via Krakens buy/sell page are not imported via API - use ledgers.csv file instead",
      "Need to grant all \u003cb\u003equery\u003c/b\u003e permissions",
    ],
    instructions_url: "https://koinly.io/integrations/kraken",
  },
  {
    id: 1,
    name: "Coinbase Pro",
    tag: "gdax",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/001/original.png?1639666899",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/001/medium.png?1639666899",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/001/thumb.png?1639666899",
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
    id: 70,
    name: "Binance US",
    tag: "binance_us",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/070/original.jpg?1644242864",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/070/medium.jpg?1644242864",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/070/thumb.jpg?1644242864",
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
  {
    id: 47,
    name: "KuCoin",
    tag: "kucoin",
    uploaded: true,
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/047/original.png?1557435454",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/047/medium.png?1557435454",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/047/thumb.png?1557435454",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret", "passphrase"],
    api_oauth_url: null,
    api_optional_fields: [{ ignore_gas_distributions: "boolean" }],
    api_notes: [
      "good:Trades \u0026 fees",
      "good:Deposits",
      "good:Withdrawals",
      "good:Bonuses",
      "Lending interest can only be fetched if Trade permission is given",
      "limit:Data prior to the Kucoin upgrade on 2019-02-18 may be missing",
      "limit:Transfers to/from Futures account should be added manually",
      "limit:Settled lend trades are limited to last 5000 txns",
    ],
    instructions_url: "https://koinly.io/integrations/kucoin",
  },
  {
    id: 640,
    name: "Crypto.com",
    tag: "crypto_com",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/640/original.jpg?1593525397",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/640/medium.jpg?1593525397",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/640/thumb.jpg?1593525397",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Deposits",
      "good:Withdrawals",
      "good:Trades \u0026 fees",
      "limit:Only trades in the last 6 months will be imported",
    ],
    instructions_url: "https://koinly.io/integrations/crypto-com",
  },
  {
    id: 36,
    name: "CoinSpot",
    tag: "coinspot",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/036/original.jpg?1656323195",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/036/medium.jpg?1656323195",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/036/thumb.jpg?1656323195",
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
      "good:Referral payments",
      "good:Affiliate payments",
      "bad:Migrations",
      "limit:Migrations are not provided by this API so you need to add those manually.",
    ],
    instructions_url: "https://koinly.io/integrations/coinspot",
  },
  {
    id: 584,
    name: "Swyftx",
    tag: "swyftx",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/584/original.jpg?1585844924",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/584/medium.jpg?1585844924",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/584/thumb.jpg?1585844924",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Trades \u0026 fees",
      "good:Deposits",
      "good:Withdrawals",
      "good:Staking rewards",
    ],
    instructions_url: "https://koinly.io/integrations/swyftx",
  },
  {
    id: 582,
    name: "Cointree",
    tag: "cointree",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/582/original.jpg?1657610019",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/582/medium.jpg?1657610019",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/582/thumb.jpg?1657610019",
    },
    type: "exchange",
    shutdown: false,
    api_active: null,
    api_beta: false,
    api_required_fields: [],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [],
    instructions_url: "https://koinly.io/integrations/cointree",
  },
  {
    id: 52,
    name: "BTC Markets",
    tag: "btc_markets",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/052/original.png?1640887336",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/052/medium.png?1640887336",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/052/thumb.png?1640887336",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: ["good:Trades \u0026 fees", "good:Deposits", "good:Withdrawals"],
    instructions_url: "https://koinly.io/integrations/btc-markets",
  },
  {
    id: 90,
    name: "CoinJar",
    tag: "coinjar",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/090/original.png?1654778359",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/090/medium.png?1654778359",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/090/thumb.png?1654778359",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: [],
    api_oauth_url:
      "https://secure.coinjar.com/oauth/authorize?client_id=7pfWz8sSMZmEpGsovbAzbTHqdFm17cA6562a6JzCAhg\u0026redirect_uri=https%3A%2F%2Fapp.koinly.io%2Fcallbacks%2Fcoinjar\u0026response_type=code\u0026scope=reports",
    api_optional_fields: [],
    api_notes: ["good:Trades \u0026 fees", "good:Deposits", "good:Withdrawals"],
    instructions_url: "https://koinly.io/integrations/coinjar",
  },
  {
    id: 587,
    name: "Bitbuy",
    tag: "bitbuy",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/587/original.jpg?1640012647",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/587/medium.jpg?1640012647",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/587/thumb.jpg?1640012647",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: ["good:Trades \u0026 fees", "good:Deposits", "good:Withdrawals"],
    instructions_url: "https://koinly.io/integrations/bitbuy",
  },
  {
    id: 55,
    name: "Coinsquare",
    tag: "coinsquare",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/055/original.jpg?1560088652",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/055/medium.jpg?1560088652",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/055/thumb.jpg?1560088652",
    },
    type: "exchange",
    shutdown: false,
    api_active: null,
    api_beta: false,
    api_required_fields: [],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [],
    instructions_url: "https://koinly.io/integrations/coinsquare",
  },
  {
    id: 671,
    name: "Newton",
    tag: "newton",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/671/original.png?1644243594",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/671/medium.png?1644243594",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/671/thumb.png?1644243594",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: true,
    api_required_fields: ["client_id", "client_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [],
    instructions_url: "https://koinly.io/integrations/newton",
  },
  {
    id: 63,
    name: "ShakePay",
    tag: "shakepay",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/063/original.jpg?1560088663",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/063/medium.jpg?1560088663",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/063/thumb.jpg?1560088663",
    },
    type: "exchange",
    shutdown: false,
    api_active: null,
    api_beta: false,
    api_required_fields: ["api_key"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: ["good:Deposits", "good:Withdrawals", "good:Trades"],
    instructions_url: "https://koinly.io/integrations/shakepay",
  },
  {
    id: 31,
    name: "Bittrex",
    tag: "bittrex",
    uploaded: true,
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/031/original.jpg?1639666991",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/031/medium.jpg?1639666991",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/031/thumb.jpg?1639666991",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Deposits",
      "good:Withdrawals",
      "good:Trades \u0026 fees",
      "limit:Many trades and deposits before 27/2/2019 are not returned by the Bittrex API. If your account is old you may want to upload your transaction history using CSV files instead.",
      "limit:Trades for delisted pairs are not returned by the API",
    ],
    instructions_url: "https://koinly.io/integrations/bittrex",
  },
  {
    id: 57,
    name: "Gate.io",
    tag: "gate_io",
    sync: true,
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/057/original.jpg?1560088654",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/057/medium.jpg?1560088654",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/057/thumb.jpg?1560088654",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Trades",
      "good:Deposits",
      "good:Withdrawals",
      "good:Futures",
      "bad:Margins",
      "Use APIv4 keys",
    ],
    instructions_url: "https://koinly.io/integrations/gate-io",
  },
  {
    id: 71,
    name: "ByBit",
    tag: "bybit",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/071/original.jpg?1644243849",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/071/medium.jpg?1644243849",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/071/thumb.jpg?1644243849",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Profit \u0026 loss",
      "good:Deposits",
      "good:Withdrawals",
      "limit:Transfers between internal accounts may be imported incorrectly",
      "limit:Deposits or withdrawals which occurred after 2021-07-15 will not be imported due to current API limitations.",
    ],
    instructions_url: "https://koinly.io/integrations/bybit",
  },
  {
    id: 383,
    name: "Crypto.com App",
    tag: "crypto_wallet",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/383/original.jpg?1573144171",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/383/medium.jpg?1573144171",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/383/thumb.jpg?1573144171",
    },
    type: "exchange",
    shutdown: false,
    api_active: null,
    api_beta: false,
    api_required_fields: [],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [],
    instructions_url: "https://koinly.io/integrations/crypto-com",
  },
  {
    id: 37,
    name: "Bitfinex",
    tag: "bitfinex",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/037/original.png?1640012540",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/037/medium.png?1640012540",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/037/thumb.png?1640012540",
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
      "limit:\u003cb\u003eMargin trades\u003c/b\u003e are only supported via CSV atm - we are working on API support.",
    ],
    instructions_url: "https://koinly.io/integrations/bitfinex",
  },
  {
    id: 445,
    name: "eToro",
    tag: "etoro",
    uploaded: true,
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/445/original.png?1576260357",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/445/medium.png?1576260357",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/445/thumb.png?1576260357",
    },
    type: "exchange",
    shutdown: false,
    api_active: null,
    api_beta: false,
    api_required_fields: [],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [],
    instructions_url: "https://koinly.io/integrations/etoro",
  },
  {
    id: 33,
    name: "Poloniex",
    tag: "poloniex",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/033/original.png?1639666818",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/033/medium.png?1639666818",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/033/thumb.png?1639666818",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Deposits",
      "good:Withdrawals",
      "good:Adjustments",
      "good:Airdrops",
      "good:Staking",
      "bad:New Trading System trades",
      "limit:Trades older than 1 year are not provided",
    ],
    instructions_url: "https://koinly.io/integrations/poloniex",
  },
  {
    id: 94,
    name: "Bitpanda",
    tag: "bitpanda",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/094/original.jpg?1644244074",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/094/medium.jpg?1644244074",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/094/thumb.jpg?1644244074",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: ["good:Trades \u0026 fees", "good:Deposits", "good:Withdrawals"],
    instructions_url: "https://koinly.io/integrations/bitpanda",
  },
  {
    id: 34,
    name: "Bitstamp",
    tag: "bitstamp",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/034/original.png?1554304833",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/034/medium.png?1554304833",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/034/thumb.png?1554304833",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["customer_id", "api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Trades \u0026 fees",
      "good:Deposits",
      "good:Withdrawals",
      "limit:Bitstamp may not return some of your trades between Feb 2018 and March 2018 which can cause balances to not match up. Add those trades manually if you notice any missing transactions.",
    ],
    instructions_url: "https://koinly.io/integrations/bitstamp",
  },
  {
    id: 40,
    name: "Huobi",
    tag: "huobi",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/040/original.png?1554304841",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/040/medium.png?1554304841",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/040/thumb.png?1554304841",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Deposits",
      "good:Withdrawals",
      "good:Trades \u0026 fees",
      "good:Isolated Margin loans interest payments",
      "bad:Cross Margin loans interest payments",
      "bad:Staking income, bonuses, airdrops, Huobi Earn",
      "bad:Crypto Loans",
      "bad:Futures",
      "limit:Only last 4 months of trade history can be retrieved",
    ],
    instructions_url: "https://koinly.io/integrations/huobi",
  },
  {
    id: 644,
    name: "Voyager",
    tag: "voyager",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/644/original.png?1594672269",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/644/medium.png?1594672269",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/644/thumb.png?1594672269",
    },
    type: "exchange",
    shutdown: false,
    api_active: null,
    api_beta: false,
    api_required_fields: [],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [],
    instructions_url: "https://koinly.io/integrations/voyager",
  },
  {
    id: 588,
    name: "Robinhood",
    tag: "robinhood",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/588/original.jpg?1588487640",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/588/medium.jpg?1588487640",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/588/thumb.jpg?1588487640",
    },
    type: "exchange",
    shutdown: false,
    api_active: null,
    api_beta: false,
    api_required_fields: [],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [],
    instructions_url: "https://koinly.io/integrations/robinhood",
  },
  {
    id: 149,
    name: "AscendEx (BitMax)",
    tag: "bitmax",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/149/original.png?1634802063",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/149/medium.png?1634802063",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/149/thumb.png?1634802063",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Deposits",
      "good:Withdrawals",
      "good:Trades",
      "bad:Margin trades",
      "limit:Only last 30 days of trade history can be retrieved",
      "limit:Margin trades are not supported",
    ],
    instructions_url: "https://koinly.io/integrations/bitmax",
  },
  {
    id: 153,
    name: "Bitrue",
    tag: "bitrue",
    uploaded: true,
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/153/original.jpg?1644244299",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/153/medium.jpg?1644244299",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/153/thumb.jpg?1644244299",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Deposits",
      "good:Withdrawals",
      "good:Trades",
      "Both \u003cb\u003eRead Info\u003c/b\u003e and \u003cb\u003eTrading Available\u003c/b\u003e permissions are needed",
    ],
    instructions_url: "https://koinly.io/integrations/bitrue",
  },
  {
    id: 39,
    name: "HitBTC",
    tag: "hitbtc",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/039/original.png?1554304840",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/039/medium.png?1554304840",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/039/thumb.png?1554304840",
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
      "limit:HitBTC does not return trades for delisted coins such as VERI. This can result in balances not matching up if you had lots of trades on those pairs.",
      "Need to grant \u003cb\u003ePayment information\u003c/b\u003e access after API key creation",
    ],
    instructions_url: "https://koinly.io/integrations/hitbtc",
  },
  {
    id: 59,
    name: "Independent Reserve",
    tag: "ind_reserve",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/059/original.jpg?1644244390",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/059/medium.jpg?1644244390",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/059/thumb.jpg?1644244390",
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
      "good:Referral commissions",
    ],
    instructions_url: "https://koinly.io/integrations/ind-reserve",
  },
  {
    id: 38,
    name: "BitMEX",
    tag: "bitmex",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/038/original.jpg?1639667110",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/038/medium.jpg?1639667110",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/038/thumb.jpg?1639667110",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Deposits",
      "good:Withdrawals",
      "good:Margin trades",
      "good:Affiliate payouts",
    ],
    instructions_url: "https://koinly.io/integrations/bitmex",
  },
  {
    id: 148,
    name: "BitMart",
    tag: "bitmart",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/148/original.png?1572633512",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/148/medium.png?1572633512",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/148/thumb.png?1572633512",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Deposits",
      "good:Withdrawals",
      "good:Trades",
      "limit:If your account has more than 200 trades then you will need to import those using CSV files instead",
    ],
    instructions_url: "https://koinly.io/integrations/bitmart",
  },
  {
    id: 464,
    name: "Revolut",
    tag: "revolut",
    sync: true,
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/464/original.jpg?1644244459",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/464/medium.jpg?1644244459",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/464/thumb.jpg?1644244459",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["access_token", "user_id", "device_id"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: ["good:Deposits", "good:Withdrawals", "good:Trades"],
    instructions_url: "https://koinly.io/integrations/revolut",
  },
  {
    id: 673,
    name: "SwissBorg",
    tag: "swissborg",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/673/original.png?1607886676",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/673/medium.png?1607886676",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/673/thumb.png?1607886676",
    },
    type: "exchange",
    shutdown: false,
    api_active: null,
    api_beta: false,
    api_required_fields: [],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [],
    instructions_url: "https://koinly.io/integrations/swissborg",
  },
  {
    id: 64,
    name: "Square Cash App",
    tag: "square_cash_app",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/064/original.png?1560088664",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/064/medium.png?1560088664",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/064/thumb.png?1560088664",
    },
    type: "exchange",
    shutdown: false,
    api_active: null,
    api_beta: false,
    api_required_fields: [],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [],
    instructions_url: "https://koinly.io/integrations/square-cash-app",
  },
  {
    id: 270,
    name: "Hotbit",
    tag: "hotbit",
    sync: true,
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/270/original.png?1644244548",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/270/medium.png?1644244548",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/270/thumb.png?1644244548",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: true,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [],
    instructions_url: "https://koinly.io/integrations/hotbit",
  },
  {
    id: 97,
    name: "OKX (OKEx)",
    tag: "okex",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/097/original.png?1644244623",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/097/medium.png?1644244623",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/097/thumb.png?1644244623",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret", "passphrase"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Deposits",
      "good:Withdrawals",
      "good:Spot and Margin Trades",
      "good:Swap, Futures and Options PNL",
      "good:Savings Income",
      "limit:This API requires a v5 api key",
      "limit:Trading history is limited to last 3 months",
      "limit:Other transactions history is limited to last 1 month",
    ],
    instructions_url: "https://koinly.io/integrations/okex",
  },
  {
    id: 443,
    name: "CoinMotion",
    tag: "coinmotion",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/443/original.png?1576158249",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/443/medium.png?1576158249",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/443/thumb.png?1576158249",
    },
    type: "exchange",
    shutdown: false,
    api_active: null,
    api_beta: false,
    api_required_fields: [],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [],
    instructions_url: "https://koinly.io/integrations/coinmotion",
  },
  {
    id: 142,
    name: "BitForex",
    tag: "bitforex",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/142/original.png?1572633507",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/142/medium.png?1572633507",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/142/thumb.png?1572633507",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: true,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [],
    instructions_url: "https://koinly.io/integrations/bitforex",
  },
  {
    id: 44,
    name: "CoinEx",
    tag: "coinex",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/044/original.png?1554304844",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/044/medium.png?1554304844",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/044/thumb.png?1554304844",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Deposits",
      "good:Withdrawals",
      "good:Trades",
      "good:Spot account activity",
    ],
    instructions_url: "https://koinly.io/integrations/coinex",
  },
  {
    id: 72,
    name: "Changelly",
    tag: "changelly",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/072/original.jpg?1572023057",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/072/medium.jpg?1572023057",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/072/thumb.jpg?1572023057",
    },
    type: "exchange",
    shutdown: false,
    api_active: null,
    api_beta: false,
    api_required_fields: [],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [],
    instructions_url: "https://koinly.io/integrations/changelly",
  },
  {
    id: 81,
    name: "NiceHash",
    tag: "nicehash",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/081/original.jpg?1640014052",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/081/medium.jpg?1640014052",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/081/thumb.jpg?1640014052",
    },
    type: "other",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret", "organization_id"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Deposits",
      "good:Withdrawals",
      "good:Trades",
      "note:Mining fees before 2021-03-01 are not provided by Nicehash API",
      "Need to grant all \u003cb\u003eview\u003c/b\u003e permissions when creating API key",
    ],
    instructions_url: "https://koinly.io/integrations/nicehash",
  },
  {
    id: 53,
    name: "CEX.io",
    tag: "cex_io",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/053/original.png?1560088649",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/053/medium.png?1560088649",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/053/thumb.png?1560088649",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["user_id", "api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "bad:Deposits",
      "bad:Withdrawals",
      "good:Trades",
      "Deposits and withdrawals have to be imported manually",
    ],
    instructions_url: "https://koinly.io/integrations/cex-io",
  },
  {
    id: 68,
    name: "LocalBitcoins",
    tag: "local_bitcoins",
    icon: {
      original:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/068/original.png?1566825245",
      medium:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/068/medium.png?1566825245",
      small:
        "https://koinly.s3.amazonaws.com/images/wallet_services/icons/000/000/068/thumb.png?1566825245",
    },
    type: "exchange",
    shutdown: false,
    api_active: true,
    api_beta: false,
    api_required_fields: ["api_key", "api_secret"],
    api_oauth_url: null,
    api_optional_fields: [],
    api_notes: [
      "good:Deposits",
      "good:Withdrawals",
      "good:Trades",
      "limit:Only deposits/withdrawals in the last 30 days are returned",
    ],
    instructions_url: "https://koinly.io/integrations/local-bitcoins",
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
const Wallet = () => {
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
      {wallets.splice(0, 5).map((wallet) => (
        <Col span={3} key={wallet.id}>
          <Card style={{ border: "1px solid #ffffff" }}>
            <Image
              width={120}
              src={wallet.icon.medium}
              style={{ borderRadius: "10px" }}
              fallback="data:image/png;base64,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"
            />
            <Space style={{ padding: "5px 5px" }}>
              <HomeFilled
                style={{
                  fontSize: "20px",
                  color: "green",
                }}
              />
              <PlusCircleOutlined
                style={{
                  fontSize: "20px",
                }}
              />
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
export default Wallet;
