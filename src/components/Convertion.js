import React from "react";
import { Pie } from "react-chartjs-2";
import { useDataContext } from "../hooks/useDataContext";
import { converse } from "../utils/conversionItem";
import "./css/chart.css";

export default function Convertion() {
  const { orders } = useDataContext();
  const items = converse(orders);
  const labels = Object.keys(items);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Conversion Item",
        data: labels.map((el) => items[el].count),
        backgroundColor: ["#5a8c91", "#725e9c", "#e4eaeb", "#eba45e"],
        borderColor: [
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="card p-4">
      <div className="header d-flex justify-content-between align-items-center">
        <h1 className="title">Conversion</h1>
        <button className="btn border border-2">
          <i className="bi bi-three-dots fw-bold"></i>
        </button>
      </div>
      <Pie
        // data={data}
        data={data}
        legend={{ position: "bottom" }}
        options={{
          tooltips: {
            callbacks: {
              label: (item, data) => {
                let revenue = items[data.labels[item.index]].revenue;
                revenue = revenue.toLocaleString();
                return `$${revenue} (${items[data.labels[item.index]].count})`;
              },
            },
            bodyFontSize: 24,
          },
        }}
      />
    </div>
  );
}
