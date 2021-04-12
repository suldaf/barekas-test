import React from "react";
import { Pie } from "react-chartjs-2";
import { useDataContext } from "../hooks/useDataContext";
import "./css/chart.css";
export default function User() {
  const { userCategory } = useDataContext();
  const category = Object.keys(userCategory);
  // console.log(userCategory, "<<<<<<<<,");
  const data = {
    labels: category,
    datasets: [
      {
        label: "# of Votes",
        data: category.map((el) => userCategory[el]),
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
        <h1 className="title">Users</h1>
        <button className="btn border border-2">
          <i className="bi bi-three-dots fw-bold"></i>
        </button>
      </div>
      <Pie
        data={data}
        legend={{ position: "bottom" }}
        options={{
          tooltips: {
            bodyFontSize: 24,
            callbacks: {
              label: (item, data) => {
                if (data.labels[item.index] === "risk_averse") {
                  return `Risk Averse: ${
                    userCategory[data.labels[item.index]]
                  }`;
                } else if (data.labels[item.index] === "conservative") {
                  return `Conservative: ${
                    userCategory[data.labels[item.index]]
                  }`;
                } else if (data.labels[item.index] === "moderate") {
                  return `Moderate: ${userCategory[data.labels[item.index]]}`;
                } else if (data.labels[item.index] === "risk_taker") {
                  return `Risk Taker: ${userCategory[data.labels[item.index]]}`;
                }
              },
            },
          },
        }}
      />
    </div>
  );
}

// risk_averse"
// 1: "conservative"
// 2: "moderate"
// 3: "risk_taker"
