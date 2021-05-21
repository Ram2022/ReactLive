import React, { Component } from "react";

import { AddEmployee } from './addEmployee';
export default class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = { emps: [], showAddModal: false };
    }
    refreshList() {
        fetch('http://localhost:93/api/v1/emp/').then
            (response => response.json()).then
            (data => {
                this.setState({ emps: data })
                //console.log(data);
            });
    }
    componentDidMount() {
        this.refreshList();
    }
    componentDidUpdate() {
        this.refreshList();
    }
    render() {
        const { emps } = this.state;
        let addModelClosed = () => this.setState({ showAddModal: false });
        let showModel = () =>
        this.setState({ showAddModal: true });
        return <div>

            <div className="text-right">
                <button type="button" className="btn my-3 btn-success" onClick={showModel}>Add Employee</button>
            </div>
            <h2 className="text-white"> Employee Data</h2>
            <table className="table table-responsive table-hover text-white">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {emps.map(emp =>
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phone}</td>
                            <td>{emp.city}</td>
                        </tr>
                    )}

                </tbody>

            </table>
            <AddEmployee show={this.state.showAddModal} onHide={addModelClosed} />
        </div>
    }
}
