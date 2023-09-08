import { UserButton } from "@clerk/nextjs";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>dashboard page (Protected)</h1>
      <UserButton />
    </div>
  );
};

export default Dashboard;
