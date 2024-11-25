import React from "react";

const EmployeeList = ({ employees, toggleStatus, resetAll }) => {
  return (
    <div>
      <h1>Employee Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Last Time</th>
            <th>Total Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.name}>
              <td>{employee.name}</td>
              <td>{employee.status}</td>
              <td>{employee.lastTime || "N/A"}</td>
              <td>{employee.totalHours.toFixed(2)}</td>
              <td>
                <button onClick={() => toggleStatus(employee.name)}>
                  {employee.status === "Clocked In" ? "Clock Out" : "Clock In"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={resetAll}>Reset All</button>
    </div>
  );
};

export default EmployeeList;