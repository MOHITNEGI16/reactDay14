import React from "react";
import { useContext } from "react";
import { Context } from "./Context";
import "./Budget.css";

function Budget() {
  const { budget } = useContext(Context);
  return (
    <>
      <h1>My Budget Planner</h1>
      <div className="budget_section">
        <p>Budget: Rs 2000</p>
        <p>
          Remaining: Rs.<span>{2000 - budget}</span>
        </p>
        <p>
          Spent so Far: <span>{budget}</span>
        </p>
      </div>
      <hr />
    </>
  );
}

export default Budget;
