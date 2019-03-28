import React from "react";

import classes from "./style.module.css";
import { Pie } from "react-chartjs-2";

const ProjectStatus = () => {
  const data = {
    labels: ["Completed", "ToDo", "Late"],
    datasets: [
      {
        label: "# of Votes",
        data: [14, 18, 3],
        backgroundColor: ["#36c6d3", "#bac3d0", "#ed6b75"]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  };

  return (
    <div className={classes.ProjectStatus}>
      <div className={classes.Title}>Project 1</div>
      <div className={classes.Chart}>
        <Pie data={data} options={options} />
      </div>
      <div>Project Status</div>
    </div>
  );
};

export default ProjectStatus;
