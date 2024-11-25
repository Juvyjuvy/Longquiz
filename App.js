import React, { useState } from "react";
import EmployeeList from "./EmployeeList";

const App = () => {
  const [employees, setEmployees] = useState([
    { name: "Juvy Aballe", status: "Clocked Out", lastTime: null, totalHours: 0 },
    { name: "Nathan Salvedia", status: "Clocked Out", lastTime: null, totalHours: 0 },
    { name: "Casan Macaan", status: "Clocked Out", lastTime: null, totalHours: 0 },
  ]);

  const toggleStatus = (name) => {
    const now = new Date();
    setEmployees((prev) =>
      prev.map((employee) => {
        if (employee.name === name) {
          if (employee.status === "Clocked Out") {
            return {
              ...employee,
              status: "Clocked In",
              lastTime: now.toLocaleTimeString(),
            };
          } else {
            const hoursWorked = Math.random(); // Simulating hours calculation
            return {
              ...employee,
              status: "Clocked Out",
              lastTime: now.toLocaleTimeString(),
              totalHours: employee.totalHours + hoursWorked,
            };
          }
        }
        return employee;
      })
    );
  };

  const resetAll = () => {
    setEmployees((prev) =>
      prev.map((employee) => ({
        ...employee,
        status: "Clocked Out",
        lastTime: null,
        totalHours: 0,
      }))
    );
  };

  return (
    <div>
      <EmployeeList employees={employees} toggleStatus={toggleStatus} resetAll={resetAll} />
    </div>
  );
};

export default App;