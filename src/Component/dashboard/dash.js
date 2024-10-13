import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import "./dash.css";

const Dashboard = () => {
  const barChartData = [
    { name: "January", sales: 65 },
    { name: "February", sales: 59 },
    { name: "March", sales: 80 },
    { name: "April", sales: 81 },
    { name: "May", sales: 56 },
    { name: "June", sales: 55 },
  ];

  const lineChartData = [
    { name: "January", visitors: 65 },
    { name: "February", visitors: 59 },
    { name: "March", visitors: 80 },
    { name: "April", visitors: 81 },
    { name: "May", visitors: 56 },
    { name: "June", visitors: 55 },
  ];

  const pieChartData = [
    { name: "Red", value: 300 },
    { name: "Blue", value: 50 },
    { name: "Yellow", value: 100 },
  ];

  const polarAreaChartData = [
    { name: "Red", value: 11 },
    { name: "Green", value: 16 },
    { name: "Yellow", value: 7 },
    { name: "Grey", value: 3 },
    { name: "Blue", value: 14 },
  ];

  const radarChartData = [
    { subject: "Eating", value: 65 },
    { subject: "Drinking", value: 59 },
    { subject: "Sleeping", value: 90 },
    { subject: "Designing", value: 81 },
    { subject: "Coding", value: 56 },
    { subject: "Cycling", value: 55 },
    { subject: "Running", value: 40 },
  ];
  const [revenue, setRevenue] = useState("");
  const [totalorders, setTotalorders] = useState("");
  const [totalreturns, setTotalreturns] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000/revenue")
      .then((res) => res.json())
      .then((data) => setRevenue(data.revenue));
  }, []);
  useEffect(() => {
    fetch("http://localhost:8000/totalorders")
      .then((res) => res.json())
      .then((data) => setTotalorders(data.totalorders));
  }, []);
  useEffect(() => {
    fetch("http://localhost:8000/totalreturns")
      .then((res) => res.json())
      .then((data) => setTotalreturns(data.totalreturns));
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:8000/sales")
  //     .then((res) => res.json())
  //     .then((data) => setSales(data.sales));
  // }, []);
  // useEffect(() => {
  //   fetch("http://localhost:8000/sales")
  //     .then((res) => res.json())
  //     .then((data) => setCancellations(data.cancellations));
  // }, []);
  // useEffect(() => {
  //   fetch("http://localhost:8000/sales")
  //     .then((res) => res.json())
  //     .then((data) => setReturns(data.returns));
  // }, []);

  const [sales, setSales] = useState(0);
  const [returns, setReturns] = useState(0);
  const [cancellations, setCancellations] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/sales")
      .then((response) => response.json())
      .then((data) => {
        setSales(data.sales);
        setReturns(data.returns);
        setCancellations(data.cancellations);
      })
      .catch((error) => {
        console.error("Error fetching sales data:", error);
      });
  }, []);

  return (
    <div className="Dashboard">
      <h1>Ecom360 Seller Dashboard</h1>
      <div className="MetricsContainer">
        <div className="MetricBox">
          <h3>Revenue</h3>
          <p className="p">Rs {revenue}</p>
        </div>
        <div className="MetricBox">
          <h3>Total Orders</h3>
          <p className="p">{totalorders}</p>
        </div>
        <div className="MetricBox">
          <h3>Total returns</h3>
          <p className="p">{totalreturns}</p>
        </div>
        <div className="MetricBox">
          <h3>Conversion Rate</h3>
          <p>{sales}</p>
        </div>
        <div className="MetricBox">
          <h3>Average Order Value</h3>
          <p>$20</p>
        </div>
      </div>
      <div className="ChartRow">
        <div className="ChartContainer">
          <h2>Bar Chart 1</h2>
          <BarChart width={400} height={300} data={barChartData}>
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="ChartContainer">
          <h2>Bar Chart 2</h2>
          <BarChart width={400} height={300} data={barChartData}>
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="ChartContainer">
          <h2>Bar Chart 3</h2>
          <BarChart width={400} height={300} data={barChartData}>
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
      <div className="ChartRow">
        <div className="ChartContainer">
          <h2>Line Chart</h2>
          <LineChart width={400} height={300} data={lineChartData}>
            <Line type="monotone" dataKey="visitors" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="ChartContainer">
          <h2>Pie Chart</h2>
          <PieChart width={400} height={300}>
            <Pie dataKey="value" data={pieChartData} fill="#8884d8" label />
          </PieChart>
        </div>
        <div className="ChartContainer">
          <h2>Radar Chart</h2>
          <RadarChart
            outerRadius={150}
            width={400}
            height={300}
            data={radarChartData}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, "dataMax"]} />
            <Radar
              name="My dataset"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
