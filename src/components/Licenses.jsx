import React from "react";

function Licenses({licences =[{
    id: 1,
    key: 'V26',
    status: 'active',
    expires: '1 year',
    policy: '1235e423',
    product: 'blah',
    created: '2020-01-01',
    lastUpdated: '2023-06-19',
    activations: '10',
}]}) {
    return ( 
        <React.Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Key</th>
                        <th>Status</th>
                        <th>Expires</th>
                        <th>Policy</th>
                        <th>Product</th>
                        <th>Created</th>
                        <th>Last Updated</th>
                        <th>Activations</th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        licences.map((licences) => {
                            return (
                                <tr>
                                    <td>{licences.id}</td>
                                    <td>{licences.key}</td>
                                    <td>{licences.status}</td>
                                    <td>{licences.expires}</td>
                                    <td>{licences.policy}</td>
                                    <td>{licences.product}</td>
                                    <td>{licences.created}</td>
                                    <td>{licences.lastUpdated}</td>
                                    <td>{licences.activations}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
     );
}

export default Licenses;