import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import DashBoard from "./components/DashBoard/DashBoard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "./Actions/DataAction";
import Loader from "./components/Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector((state) => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return allTickets ? (
    <div style={{ paddingTop: "10px" }}>
      <Navbar />
      <hr style={{ marginTop: "10px" }} />
      <DashBoard />
    </div>
  ) : (
    <Loader />
  );
};

export default App;
