import { useState } from "react";

export default function Nav() {
  const [name] = useState("Shulthan Daffa'ul Iman");
  const initialName1 = name.split(" ")[0][0];
  const initialName2 = name.split(" ")[1][0];
  const initialName = initialName1 + initialName2;
  return (
    <div className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="col-8">
          <div className="row">
            <div className="col-3 d-flex justify-content-start align-items-center">
              <h1>
                <img
                  src="https://pbs.twimg.com/profile_images/1295281602012954624/Rn4GyWvz.jpg"
                  alt="Bareksa"
                  width="50"
                  height="50"
                  className="align-text-top"
                />
                Bareksa
              </h1>
            </div>
            <div className="col-9">
              <div className="row">
                <div
                  className="col-1 rounded-circle d-flex justify-content-center align-items-center"
                  style={{ background: "#E5E5E5" }}
                >
                  <span className="fs-2 text-dark fw-bold ">{initialName}</span>
                </div>
                <div className="col">
                  <h1 className="text-truncate">{name}</h1>
                  <span className="text-muted">Kuningan, Jakarta</span>
                </div>
                <div className="col">
                  <button className="btn">
                    <i
                      className="bi bi-chevron-down fw-bold"
                      style={{ fontSize: "2rem" }}
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row align-items-center">
            <div
              className="col ms-3"
              style={{
                border: "2px solid #dfdfdf",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                style={{
                  border: "none",
                  width: "100%",
                  height: "100%",
                  fontSize: "2rem",
                }}
                placeholder="Search text"
              />
              <i
                className="bi bi-search text-dark"
                style={{ fontSize: "2rem" }}
              ></i>
            </div>
            <div className="col-2 ms-1">
              <button className="btn">
                <span>
                  <i className="bi bi-bell" style={{ fontSize: "2rem" }}></i>
                </span>
                <span
                  className="badge"
                  style={{
                    position: "absolute",
                    borderRadius: "50%",
                    background: "red",
                    color: "red",
                    fontSize: "0.5rem",
                    top: "10px",
                  }}
                >
                  .
                </span>
              </button>
            </div>
            <div className="col-2 ms-1">
              <button className="btn">
                <span>
                  <i className="bi bi-gear" style={{ fontSize: "2rem" }}></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
