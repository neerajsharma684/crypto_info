import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { Chart, TimeScale, TimeSeriesScale, LinearScale, PointElement, LineElement } from 'chart.js';
import 'chartjs-adapter-date-fns';

const { Title } = Typography;

Chart.register(TimeScale, TimeSeriesScale, LinearScale, PointElement, LineElement);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000)); // Keep it as Date object
    }
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinPrice.push(Number(coinHistory?.data?.history[i].price));
    }
    coinPrice.push(currentPrice);
    coinTimestamp.push(new Date()); // Current date and time
  
    const data = {
      labels: coinTimestamp,
      datasets: [
        {
          label: 'Price In USD',
          data: coinPrice,
          fill: false,
          backgroundColor: '#0071bd',
          borderColor: '#0071bd',
        },
      ],
    };
  
    const options = {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              day: 'MMM d, yyyy'
            }
          },
          title: {
            display: true,
            text: 'Time'
          }
        },
        y: {
          type: 'linear',
          title: {
            display: true,
            text: 'Price in USD'
          }
        }
      }
    };
  
    return (
      <div>
        <Row justify="center">
          <Col span={24}>
            <Title level={2} className="heading">
              {coinName} Price Chart 
            </Title>
            <Line data={data} options={options} />
          </Col>
        </Row>
      </div>
    );
  };
  
  export default LineChart;