// import { Button } from "bootstrap";
import React, { Component } from "react";


export default class Department extends Component {


    constructor(props) {
        super(props);
        this.state = { deps: [], ShowAddModal:false }
    }


   
    refreshList() {
        this.setState({
            deps: [
                { "DepartmentId": 1, "DepartmentName": "HR" },
                { "DepartmentId": 2, "DepartmentName": "IT" },
                { "DepartmentId": 3, "DepartmentName": "Support" },
                { "DepartmentId": 4, "DepartmentName": "Admin" }
            ]
        })
    }
    componentDidMount() {
        this.refreshList();
    }
    render() {
        const {deps} = this.state;
        
        return <div className="container my-3">
           
            <h2 className="text-white">Department Table</h2>
            <table className="my-3 table-sm table table-bordered table-hover text-light">
                <thead>
                    <tr>
                        <td>Department Id</td>
                        <td>Department Name</td>
                    </tr>
                </thead>
                <tbody>
                    {deps.map(dep =>
                        <tr key={dep.DepartmentId}>
                            <td>{dep.DepartmentId}</td>
                            <td>{dep.DepartmentName}</td>
                        </tr>
                    )}

                </tbody>
            </table>
            
        </div>
    }
}
