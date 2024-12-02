import React from 'react'
import { Container, Row, Col, Card, ProgressBar, ListGroup, Table } from "react-bootstrap"
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import { Chart, registerables } from 'chart.js';
 
ChartJS.register(CategoryScale, LinearScale, ArcElement, Tooltip, Legend);
Chart.register(...registerables);
// ChartJS.register(ArcElement, Tooltip, Legend);//+
 
function Dashboard() {
    const orderRateData = {
        labels: ["April 2024", "May 2024", "June 2024", "July 2024", "Aug 2024", "Sept 2024"],
        datasets: [
            {
                label: 'This Month',
                data: [20, 40, 30, 60, 80, 100],
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1,
            },
            {
                label: 'Last Month',
                data: [10, 60, 50, 20, 40, 80],
                fill: false,
                borderColor: 'rgb(54, 162, 235)',
                tension: 0.1,
            },
        ],
    };
    const doughnutData = {
        labels: ['Bakery', 'Fast Food', 'Drinks', 'Desserts'],
        datasets: [
            {
                data: [30, 25, 20, 25],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <Container fluid className="p-4">
            {/* Top Row: Income, Expense, Order, Visitors */}
            <Row className="mb-4">
                {[
                    { label: "This week's Income", value: "₹ 2000" },
                    { label: "This week's Expense", value: "₹ 800" },
                    { label: "This week's Order", value: "10" },
                    { label: "This week's Visitors", value: "500" }
                ].map((item, index) => (
                    <Col key={index} md={3}>
                        <Card className="text-center shadow" style={{ backgroundColor: '#f7f1e5', borderRadius: '10px', backgroundColor: '#f7f1e5' }}>
                            <Card.Body>
                                <Card.Title style={{ fontSize: '16px', color: '#b08b60', fontWeight: '600' }}>
                                    {item.label}
                                </Card.Title>
                                <h4 style={{ color: '#9b602f', fontWeight: 'bold' }}>{item.value}</h4>
                                {/* Days of the Week */}
                                {/* <ListGroup horizontal style={{ justifyContent: 'center', fontSize: '12px' }}>
                                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                                            <ListGroup.Item
                                                key={day}
                                                style={{
                                                    border: 'none',
                                                    backgroundColor: '#f7f1e5',
                                                    padding: '0 6px',
                                                    color: '#b08b60',
                                                }}
                                            >
                                                {day}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup> */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
 
 
            {/* Order Rate and Stats */}
            <Row className="mb-4">
                <Col md={8}>
                    <Card>
                        <Card.Header style={{ backgroundColor: '#f7f1e5', color: '#9B602F', fontWeight: 'bold' }}>Order Rate</Card.Header>
                        <Card.Body>
                            <Line data={orderRateData} height={'80px'} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Header style={{ backgroundColor: '#f7f1e5', color: '#9B602F', fontWeight: 'bold' }}>Order Statistics</Card.Header>
                        <Card.Body>
                            <ListGroup>
                                <ListGroup.Item className='text-start'><i class="fa-solid fa-store"></i> Total Order Complete: <span style={{ fontWeight: 'bold', float: 'right' }}>3000</span></ListGroup.Item>
                                <ListGroup.Item className='text-start'><i class="fa-solid fa-box"></i> Total Order Delivered: <span style={{ fontWeight: 'bold', float: 'right' }}>2100</span></ListGroup.Item>
                                <ListGroup.Item className='text-start'><i class="fa-solid fa-rectangle-xmark"></i> Total Order Cancelled: <span style={{ fontWeight: 'bold', float: 'right' }}>500</span></ListGroup.Item>
                                <ListGroup.Item className='text-start'><i class="fa-solid fa-business-time"></i> Order Pending:<span style={{ fontWeight: 'bold', float: 'right' }}>100</span></ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
 
            {/* Daily Sales and Food Category Profit */}
            <Row className="mb-4">
                <Col md={6}>
                    <Card>
                        <Card.Header style={{ backgroundColor: '#f7f1e5', color: '#9B602F', fontWeight: 'bold' }}>Daily Product Sales (Per Piece)</Card.Header>
                        <Card.Body>
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Sales</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {["Donut", "Croissants", "Cake", "Non Veg Puff"].map((product, index) => (
                                        <tr key={index}>
                                            <td>{product}</td>
                                            <td>{index === 0 ? "400" : index === 1 ? "300" : index === 2 ? "800" : "200"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header style={{ backgroundColor: '#f7f1e5', color: '#9B602F', fontWeight: 'bold' }}>Food Category Profit</Card.Header>
                        <Card.Body>
                            <Doughnut data={doughnutData} options={{ maintainAspectRatio: false }} height={220} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
 
export default Dashboard