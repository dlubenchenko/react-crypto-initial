import { Flex, Typography } from 'antd'
import React from 'react'

function CoinInfo({ coin }) {
  return (
    <Flex align="center">
        <img
          src={coin.icon}
          alt={coin.name}
          style={{ width: "40px", marginRight: "10px" }}
        />
        <Typography.Title level={2} style={{ margin: "0" }}>
          ({coin.symbol}) {coin.name}
        </Typography.Title>
      </Flex>
  )
}

export default CoinInfo