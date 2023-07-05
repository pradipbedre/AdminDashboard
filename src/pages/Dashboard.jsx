import React from "react";
import DashboardStatsGrid from "../components/DashboardStatsGrid";
import TransactionChart from "../components/TransactionChart";
import BuyerProfileChart from "../components/BuyerProfilePieChart";
import RecentOrders from "../components/RecentOrders";
import PopularProducts from "../components/PopularProducts";
const Dashboard = () => {
  return (
    <div className="flex gap-4 flex-col">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
};

export default Dashboard;
