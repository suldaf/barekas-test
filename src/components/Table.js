import { useDataContext } from "../hooks/useDataContext";
import "./css/table.css";

export default function Table() {
  const complete = "#599E50";
  const canceled = "#EA7150";
  const pending = "#CC9C48";

  const { orders } = useDataContext();

  function setId(id) {
    return id.split("-")[2];
  }

  // {
  //   0: orders
  //   .filter((o) => new Date(o.date).getDay() === 0)
  //   .reduce((result, o) => result + o.renevue, 0),
  //   1: orders
  //   .filter((o) => new Date(o.date).getDay() === 1)
  //   .reduce((result, o) => result + o.renevue, 0),
  // }
  return (
    <div
      style={{
        height: "250px",
        overflow: "auto",
        position: "relative",
        borderCollapse: "collapse",
        border: "2px solid #dfdfdf",
      }}
    >
      <table className="table table-hover ">
        <thead>
          <tr
            className="table-secondary"
            style={{ position: "sticky", top: "0" }}
          >
            <th scope="col" className="col">
              Order <br />
              Number
            </th>
            <th scope="col" className="col">
              Status
            </th>
            <th scope="col" className="col">
              Operator
            </th>
            <th scope="col" className="col">
              Location
            </th>
            <th scope="col" className="col">
              Start Date
            </th>
            <th scope="col" className="col">
              Due Date
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.length !== 0 ? (
            orders.map((el) => {
              return (
                <tr key={el.order_id} style={{ height: "50px" }}>
                  <th scope="row">#{setId(el.order_id)}</th>
                  <td
                    className="text-capitalize"
                    style={{
                      color: "white",
                      background:
                        el.status === "completed"
                          ? complete
                          : el.status === "canceled"
                          ? canceled
                          : pending,
                    }}
                  >
                    {el.status}
                  </td>
                  <td>{el.full_name}</td>
                  <td>{el.location}</td>
                  <td>{el.start_date}</td>
                  <td>{el.due_date}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th>Loading....</th>
            </tr>
          )}
        </tbody>
      </table>
      {/* {JSON.stringify(data.data.orders, null, 2)} */}
    </div>
  );
}
