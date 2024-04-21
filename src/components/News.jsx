import React, { useState, useEffect } from "react";
// import { Select, Typography, Row, Col, Avatar, Card, Spin } from "antd";
// import moment from "moment";
// import { useGetCryptoNewsQuery } from "../services/cryptoNewsAPI";

// const { Text, Title } = Typography;
// const { Option } = Select;

const News = (/*{ simplified }*/) => {
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    // const count = simplified ? (isMobile ? 10 : 30) : 150;
    // const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: count });
    // console.log(cryptoNews);
    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsMobile(window.innerWidth <= 768);
    //     };
        
    //     window.addEventListener('resize', handleResize);
        
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);
    // if(!cryptoNews?.value) return <Spin size="large"/>;
    
    return (
        <div>
            Coming Soon...
        </div>
        /*<Row gutter={[24, 24]}>
             {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.title}</Title>
                                <img style={{ maxWidth: "200px", maxHeight: "100px" }} src={news?.image?.thumbnail?.contentUrl || 'https://www.cryptocompare.com'} alt="news" />
                            </div>
                            <p>
                                {news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || 'https://www.cryptocompare.com'} alt="" />
                                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))} 
        </Row>*/
    )
}

export default News;