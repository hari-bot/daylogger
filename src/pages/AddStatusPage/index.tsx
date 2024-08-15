import React from "react";
import StatusForm from "../../components/shared/StatusForm";
import Sidebar from "../../components/shared/SideBar";

function AddStatusPage() {
  return (
    <div className="flex">
      <Sidebar />
      <StatusForm onAddTask={() => {}} />
    </div>
  );
}

export default AddStatusPage;
