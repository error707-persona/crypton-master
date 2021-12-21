import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar, Space } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Text, Title } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  

  return isFetching ? (
    <Loader />
  ) : !exchangesList ? (
    <>
      <Title>Couldn't load Crypto Exchanges</Title>
      Please check your internet connection
    </>
  ) : (
    <>
      <Row style={{ padding: "0.5rem 1rem", fontWeight:800 }}>
        <Col span={12}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={3}>Markets</Col>
        <Col span={3}>Change</Col>
      </Row>
      <Collapse>
        {exchangesList.map((exchange) => (
          <Panel
            key={exchange.id}
            showArrow={false}
            header={
              <Row style={{ width: "100%" }}>
                <Col span={12}>
                  <Text>
                    <strong>{exchange.rank}.</strong>
                  </Text>
                  <Avatar
                    className="exchange-image"
                    src={exchange.iconUrl}
                    maxWidth="20px"
                    maxHeight="20px"
                  />
                  <Text>
                    <strong>{exchange.name}</strong>
                  </Text>
                </Col>
                <Space />
                <Col span={6}>${millify(exchange.volume)}</Col>
                <Space />
                <Col span={3}>{millify(exchange.numberOfMarkets)}</Col>
                <Col span={3}>{millify(exchange.marketShare)}%</Col>
              </Row>
            }
          >
            {HTMLReactParser(exchange.description || "Data Not Found")}
          </Panel>
        ))}
      </Collapse>
    </>
  );
};

export default Exchanges;
