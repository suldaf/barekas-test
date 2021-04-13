import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDataContext } from "../hooks/useDataContext";
import "./css/date.css";
import "./css/chart.css";
import { converse, sumConversion } from "../utils/conversionItem";
export default function Revenue() {
  const [date, setDate] = useState(new Date());
  const { orders } = useDataContext();
  const items = converse(orders);
  const key = Object.keys(items);
  const revenue = key.map((el) => items[el].revenue);
  const total = sumConversion(revenue).toLocaleString();

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Revenue",
        data: orders.map((el) => el.conversion_revenue),
        fill: true,
        backgroundColor: "rgba(255,75,20,0.5)",

        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <div className="card p-2">
      <div className="header d-flex justify-content-between align-items-center">
        <h1 className="title">Line Chart</h1>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="MMM/yyyy"
          showMonthYearPicker
        />
      </div>
      <Line data={data} options={{ elements: { line: { tension: 0.4 } } }} />
      <div>
        <span className="text-muted">Total Revenue</span>
        <p className="fs-2 fw-bold">{`$${total}`}</p>
        <span className="text-success fw-bold">
          <i className="bi bi-arrow-up-short"></i>
          7,00%
        </span>
      </div>
    </div>
  );
}
