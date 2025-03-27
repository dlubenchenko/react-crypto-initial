import { Layout, Typography } from "antd";
import React from "react";
import { useCrypto } from "../../context/crypto-context";
import PortfolioChart from "../PortfolioChart";
import AssetsTable from "../AssetsTable";

const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 60px)",
  color: "#fff",
  backgroundColor: "#001529",
  padding: "1rem",
};

function AppContent() {
  const { assets, crypto } = useCrypto();

  const cryptoPiceMap = crypto.reduce((acc, coin) => {
    acc[coin.id] = coin.price;
    return acc;
  }, {});

  const totalAssetsProfit = assets
    .map((asset) => asset.amount * cryptoPiceMap[asset.id])
    .reduce((acc, v) => (acc += v), 0)
    .toFixed(2);

  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{ textAlign: "left", color: "#fff" }}>
        Portfolio: {totalAssetsProfit}$
      </Typography.Title>
      <PortfolioChart />
      <AssetsTable />
    </Layout.Content>
  );
}

export default AppContent;
