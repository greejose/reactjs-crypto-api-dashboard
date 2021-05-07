import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import Table from 'react-bootstrap/Table';
import ethereum from './ethereum.png';
import crypto from './crypto.jpeg';

function Dashboard({ price, data }) {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: true,
  };
  if (price === "0.00") {
    return <h2>Click the box above</h2>;
  }
  const investment = 209.86;
  const quantity = (price * 0.063564).toFixed(2);
  const openPl = (((quantity/investment) - 1) * 100).toFixed(2);
  document.title = 'ETH - $'.concat((price * 1).toFixed(2));
  return (
    <div className="dashboard">
      <img src={crypto} className="crypto-logo" alt="logo" />
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Current Price</th>
            <th>Open P/L %</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={ethereum} id='ethereum-icon' className='ethereum-icon' alt='ethereum icon'/>Ethereum</td>
            <td>${(price * 1).toFixed(2)}</td>
            <td className={Math.sign(openPl) === -1 ? 'red-text' : 'green-text'}>{openPl}%</td>
            <td>${quantity}</td>
          </tr>
        </tbody>
      </Table>
      <Line data={data} options={opts} />
    </div>
  );
}

export default Dashboard;