import Nav from "./components/Nav.js";
import Table from "./components/Table.js";
import Datepicker from "./components/Datepicker";
import { setFullYear } from "./utils/setDate";
import Convertion from "./components/Convertion.js";
import User from "./components/User.js";
import { useData } from "./hooks/useData.js";
import { DataProvider } from "./hooks/useDataContext.js";
import Revenue from "./components/Revenue.js";

function App() {
  const { userCategory, orders } = useData();
  return (
    <DataProvider value={{ userCategory, orders }}>
      <div>
        <div className="row mb-4">
          <Nav />
        </div>
        <div
          className="row justify-content-end align-items-center mb-4"
          style={{ background: "#E5E5E5" }}
        >
          <div className="col-4">
            <p className="fs-4 fw-bold text-end m-0">
              {setFullYear(new Date())}
            </p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-3">
            <Convertion />
          </div>
          <div className="col-3">
            <User />
          </div>
          <div className="col-6">
            <Revenue />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <Datepicker />
          </div>
          <div className="col">
            <Table />
          </div>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
