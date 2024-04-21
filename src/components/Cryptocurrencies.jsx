import React, {useState, useEffect} from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Spin } from "antd";

import { useGetCryptosQuery } from "../services/cryptoAPI";

const Cryptocurrencies = ({ simplified }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const count = simplified ? (isMobile ? 10 : 30) : 150;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins);
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCryptos(filteredData);
    }, [cryptosList, searchTerm]);

    if (isFetching) return <Spin size="large"/>;

    // console.log(cryptos);
    return (
        <>
        <div className="search-crypto">
            <Input placeholder="Search here..." onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
        <Row gutter={[32, 32]} className="crypto-card-container">
            {cryptos?.slice(0, count).map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card key={currency.id}
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl} alt={currency.name} />}
                                hoverable>
                                <p>Price: ${millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}%</p>
                            </Card>
                        </Link>
                    </Col>
            ))}
        </Row>
        </>
    )
}

export default Cryptocurrencies;