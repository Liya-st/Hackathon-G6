// import React from "react";
// import { useState } from "react";
import { useEffect, useState } from "react";
import Connections from "../components/Connections/Connections";
import SideBar from "../components/SideBar/SideBar";
import "./Collaboration.css";

function Collaborate() {

  //http://127.0.0.1:8000/api/feeds/2/collaborators/
  return (
    <div className="container">
      <SideBar />
      <Connections />
    </div>
  );
}

export default Collaborate;
