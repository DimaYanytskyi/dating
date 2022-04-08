/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, {memo} from 'react';
import {get, upperFirst} from 'lodash';

import useFetchUserCount from './hooksUserCount';
import useFetchReportCount from './hooksReportCount';
import useFetchIncomeCount from './hooksIncomeCount';
import useFetchApproveCount from './hooksApproveCount';

import useFetchUserCountGraphData from './hooksUserCountGraphData';
import useFetchReportCountGraphData from './hooksReportCountGraphData';
import useFetchIncomeCountGraphData from './hooksIncomeCountGraphData';
import useFetchApproveCountGraphData from './hooksApproveCountGraphData';

import {Container,} from './components';

import {Line} from 'react-chartjs-2';
import {Card, CardBody, CardTitle, Col, Row} from 'reactstrap';
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities';

const bgSmallChart = '#f2f2f2';

const HomePage = () => {

  const { userCount } = useFetchUserCount();
  const { incomeCount } = useFetchIncomeCount();
  const { approveCount } = useFetchApproveCount();
  const { reportCount } = useFetchReportCount();

  const { userCountGraphData } = useFetchUserCountGraphData();
  const { incomeCountGraphData } = useFetchIncomeCountGraphData();
  const { approveCountGraphData } = useFetchApproveCountGraphData();
  const { reportCountGraphData } = useFetchReportCountGraphData();

  const userCountGraphDataChart = {
    labels: ['1', '2', '3', '4'],
    datasets: [
      {
        label: 'User Count',
        backgroundColor: bgSmallChart,
        borderColor: 'rgba(255,255,255,.55)',
        data: userCountGraphData,
      },
    ],
  };

  const incomeCountGraphDataChart = {
    labels: ['1', '2', '3', '4'],
    datasets: [
      {
        label: 'Income Count',
        backgroundColor: bgSmallChart,
        borderColor: 'rgba(255,255,255,.55)',
        data: incomeCountGraphData,
      },
    ],
  };

  const approveCountGraphDataChart = {
    labels: ['1', '2', '3', '4'],
    datasets: [
      {
        label: 'Approve Count',
        backgroundColor: bgSmallChart,
        borderColor: 'rgba(255,255,255,.55)',
        data: approveCountGraphData,
      },
    ],
  };

  const reportCountGraphDataChart = {
    labels: ['1', '2', '3', '4'],
    datasets: [
      {
        label: 'Report Count',
        backgroundColor: bgSmallChart,
        borderColor: 'rgba(255,255,255,.55)',
        data: reportCountGraphData,
      },
    ],
  };

  const userCountGraphDataChartOpts = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent',
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent',
          },

        }],
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
            min: Math.min.apply(Math, userCountGraphDataChart.datasets[0].data) - 5,
            max: Math.max.apply(Math, userCountGraphDataChart.datasets[0].data) + 5,
          },
        }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  };

  const incomeCountGraphDataChartOpts = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent',
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent',
          },

        }],
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
            min: Math.min.apply(Math, incomeCountGraphDataChart.datasets[0].data) - 5,
            max: Math.max.apply(Math, incomeCountGraphDataChart.datasets[0].data) + 5,
          },
        }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  };

  const approveCountGraphDataChartOpts = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent',
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent',
          },

        }],
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
            min: Math.min.apply(Math, approveCountGraphDataChart.datasets[0].data) - 5,
            max: Math.max.apply(Math, approveCountGraphDataChart.datasets[0].data) + 5,
          },
        }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  };

  const reportCountGraphDataChartOpts = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent',
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent',
          },

        }],
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
            min: Math.min.apply(Math, reportCountGraphDataChart.datasets[0].data) - 5,
            max: Math.max.apply(Math, reportCountGraphDataChart.datasets[0].data) + 5,
          },
        }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  };

  const mainChart = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Weekly Income: ',
        backgroundColor: hexToRgba('#63c2de', 10),
        borderColor: bgSmallChart,
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: incomeCountGraphData,
      }
    ],
  };

  const mainChartOpts = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
        }],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
            stepSize: Math.ceil(1000 / 5),
            max: 1000,
          },
        }],
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
  };

  return (
    <>
      <Container className="container-fluid">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">{userCount}</div>
                <div>Users</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={userCountGraphDataChart} options={userCountGraphDataChartOpts} height={70} />
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <div className="text-value">{incomeCount}</div>
                <div>Incomes</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={incomeCountGraphDataChart} options={incomeCountGraphDataChartOpts} height={70} />
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-success">
              <CardBody className="pb-0">
                <div className="text-value">{approveCount}</div>
                <div>Approves</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={approveCountGraphDataChart} options={approveCountGraphDataChartOpts} height={70} />
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <div className="text-value">{reportCount}</div>
                <div>Reports</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={reportCountGraphDataChart} options={reportCountGraphDataChartOpts} height={70} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row  style={{ marginTop: 40 + 'px' }}>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <Col sm="5">
                      <CardTitle className="mb-0">Income Traffic</CardTitle>
                    </Col>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default memo(HomePage);
