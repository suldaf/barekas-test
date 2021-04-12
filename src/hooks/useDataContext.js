import { createContext, useContext } from "react";
// import { DataContext } from "../App";

const DataContext = createContext({
  userCategory: {
    risk_averse: 0,
    moderate: 0,
    risk_taker: 0,
    conservative: 0,
  },
  orders: [],
});

export function useDataContext() {
  const { orders, userCategory } = useContext(DataContext);

  return { orders, userCategory };
}

export const DataProvider = DataContext.Provider;
