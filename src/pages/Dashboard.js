import React from "react";
import { withRouter } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h4>If you see this it means you are authenticated!</h4>
    </div>
  );
};

export default withRouter(Dashboard);
