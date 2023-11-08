import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ShowFailedAlert,
  ShowSuccessAlert,
  ShowWarningAlert,
} from "../../utilities/toastify";

export default function AddBranch(props) {
  const URL = props.url;
  const [employees, setEmployees] = useState();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [employee_id, setEmployee_id] = useState("");
  const [opening_hours, setOpening_hours] = useState("");

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const res = await axios.get(`${URL}/users/get_users/employees`);
        setEmployees(res.data);
      } catch (error) {
        ShowFailedAlert(error);
      }
    };

    fetchBranches();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      ShowWarningAlert("Please enter the branch name");
      return;
    }
    try {
      const res = await axios.post(`${URL}/branches/add`, {
        name,
        address,
        phone,
        employee_id: employee_id ? employee_id : null,
      });
      if (!res.data.id) ShowWarningAlert(res.data[Object.keys(res.data)[0]][0]);
      else {
        ShowSuccessAlert("Branch added successfully");
        props.setReload(!props.reload);
      }
    } catch (error) {
      ShowFailedAlert(error);
    }
  }

  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 col-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name <span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3 col-4">
              <label htmlFor="exampleFormControlInput2" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput2"
                value={address}
                onChange={(e) => setAddress(e.target.value.trim())}
              />
            </div>
            <div className="mb-3 col-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                pattern="[0-9]*"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(e) => {
                  if (/^\d*$/.test(e.target.value.trim())) {
                    setPhone(e.target.value.trim());
                  }
                }}
              />
            </div>
            <div className="mb-3 col-3">
              <label htmlFor="select">Employee</label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setEmployee_id(e.target.value.trim())}
              >
                <option value={""}>None</option>
                {employees
                  ? employees.map((employee) => (
                      <option value={employee.id} key={employee.id}>
                        {employee.first_name + " " + employee.last_name}
                      </option>
                    ))
                  : null}
                ;
              </select>
            </div>
            <div className="mb-3">
              <div className="col-4 d-flex justify-content-between">
                <button type="submit" className="btn btn-success">
                  Add
                </button>
                <button type="reset" className="btn btn-secondary">
                  cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}