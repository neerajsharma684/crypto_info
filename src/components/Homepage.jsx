import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Spin } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import { Cryptocurrencies, News } from "../components";

const { Title } = Typography;
const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
    // console.log(data);
    if(isFetching) return <Spin size="large"/>;
    return (
        <>
        <Title level={2} className="heading">Global Crypto Stats </Title>
        <Row>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
            <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
        </Row>
        <div className="home-heading-container">
            <Title level={2} className="home-title">Top Cryptocurrencies</Title>
            <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
        </div>
        <Cryptocurrencies simplified={true} />
        <div className="home-heading-container">
            <Title level={2} className="home-title">Latest News</Title>
            <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
        </div>
        <News />
        </>
    )
}

export default Homepage;