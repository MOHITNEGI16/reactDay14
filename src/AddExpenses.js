import React from "react";
import { Context } from "./Context";
import { useContext, useState } from "react";
import "./AddExpenses.css";

function AddExpenses() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [uniId, setUniId] = useState(0);

  const { budget, setBudget, budgetList, setBudgetList } = useContext(Context);

  const onSave = () => {
    if (!name || !cost) {
      alert("forget to put item name or the cost of it");
      return;
    }
    setBudget(cost);
    setBudget(budget + parseInt(cost));
    setBudgetList((prev) => [...prev, { uniId, name, cost }]);

    setUniId(uniId + 1);
    setName("");
    setCost("");
  };

  return (
    <div className="addExpenses_Section">
      <h1>Add Expenses</h1>

      <div>
        <label htmlFor="name">Name</label> <br />
        <input
          value={name}
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <br />
        <label htmlFor="cost">Cost</label> <br />
        <input
          value={cost}
          type="number"
          id="cost"
          onChange={(e) => setCost(e.target.value)}
        />
      </div>
      <br />
      <button onClick={onSave}>Save</button>
    </div>
  );
}

export default AddExpenses;
