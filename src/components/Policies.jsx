import React from "react";

function Policies({ policies = [{
    id: 1,
    name: 'V26',
    created: '2020-01-01',
    lastUpdated: '2023-06-19',
    product: 'blahblah',
    duration: '1 year',
    maxMachines: '5',
}] }) {
    return (
        <React.Fragment>
            <table className="table">
                <thead>
                    <tr>
                    <th>Id</th>
                        <th>Name</th>
                        <th>Created</th>
                        <th>Last Updated</th>
                        <th>Product</th>
                        <th>Duration</th>
                        <th>Max Machines</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        policies.map((policies) => {
                            return (
                                <tr>
                                    <td>{policies.id}</td>
                                    <td>{policies.name}</td>
                                    <td>{policies.created}</td>
                                    <td>{policies.lastUpdated}</td>
                                    <td>{policies.product}</td>
                                    <td>{policies.duration}</td>
                                    <td>{policies.maxMachines}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default Policies;