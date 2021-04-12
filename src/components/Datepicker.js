import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setMonth } from "../utils/setDate";
import "./css/date.css";
export default function Datepicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className="card row">
      <DatePicker
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          decreaseYear,
          increaseYear,
        }) => (
          <div
            style={{
              margin: 10,
            }}
            className="row justify-content-between align-items-center"
          >
            <div className="col">
              <button className="btn" onClick={decreaseMonth}>
                <i className="bi bi-chevron-left fw-bold"></i>
              </button>
              <span className="fw-bold">{setMonth(date.getMonth() + 1)}</span>
              <button className="btn" onClick={increaseMonth}>
                <i className="bi bi-chevron-right fw-bold"></i>
              </button>
            </div>
            <div className="col">
              <button className="btn" onClick={decreaseYear}>
                <i className="bi bi-chevron-left fw-bold"></i>
              </button>
              <span className="fw-bold">{date.getFullYear()}</span>
              <button className="btn" onClick={increaseYear}>
                <i className="bi bi-chevron-right fw-bold"></i>
              </button>
            </div>
          </div>
        )}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
      />

      <div className="col">
        <div className="col d-flex justify-content-center">
          <button className="btn fw-bold text-dark m-2 border border-1">
            Cancel
          </button>
          <button className="btn btn-success text-dark fw-bold m-2">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
