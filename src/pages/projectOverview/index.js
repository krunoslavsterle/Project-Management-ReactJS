import React from "react";

import classes from "./style.module.css";
import AdminLayout from "../../components/AdminLayout";
import ProjectStatus from "../../components/ProjectStatus";

const ProjectOverview = () => (
  <AdminLayout>
    <ProjectStatus />
  </AdminLayout>
);

export default ProjectOverview;
