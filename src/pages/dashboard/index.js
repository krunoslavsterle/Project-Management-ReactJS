import React from "react";

import classes from "./style.module.css";
import AdminLayout from "../../components/AdminLayout";
import ProfileWidget from "../../components/ProfileWidget";

const Dashboard = () => (
  <AdminLayout>
    <ProfileWidget />
  </AdminLayout>
);

export default Dashboard;
