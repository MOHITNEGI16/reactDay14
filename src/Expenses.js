import React from "react";
import { Context } from "./Context";
import { useContext } from "react";
import './Expenses.css'





function Expenses() {
  const { budgetList, setBudgetList, setBudget, budget } = useContext(Context);
  const deleteItem = (index) => {
    const filterData = budgetList.filter((ele, ind) => {
      if (ind === index) {
        setBudget(budget - ele.cost);
        return false;
      } else {
        return true;
      }
    });

    setBudgetList(filterData);
    console.log(filterData);
  };

  console.log("budgetList", budgetList);
  return (
    <div className="expenses_section">
      <h1>Expenses</h1>
      {budgetList.length === 0 ? (
        <h1>Add Data To List . . . . .</h1>
      ) : (
        <>
          <ul
          
            style={{
              textDecoration: "none",
              width: "60vw",
              margin: "auto",
            }}
          >
            {budgetList.map((ele, index) => {
              return (
                <>
                  <li
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      marginTop:'1rem'
                    }}
                    key={index}
                  >
                    <p>{`${ele.name} `}</p>
                    <p>{`Rs:-${ele.cost}`}</p>
                    <button
                      onClick={() => {
                        deleteItem(index);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default Expenses;
