import axios from "axios";
import { useEffect, useState } from "react";

export function useData() {
  const [userCategory, setUserCategory] = useState({
    risk_averse: 0,
    moderate: 0,
    risk_taker: 0,
    conservative: 0,
  });
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getData(params) {
      try {
        const { data: result } = await axios({
          method: "get",
          url:
            "https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard",
        });
        setUserCategory(result.data.user_category);
        setOrders(result.data.orders);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  return {
    userCategory,
    orders,
  };
}
