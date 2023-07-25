import React from "react";

function Machines({machines =[{
    id: 1,
    fingerprint: 'blahblah',
    license: '3442dffs3',
    product: 'a number',
    created: '2020-01-01',
    lastUpdated: '2023-06-19',
}]}) {
    return ( 
        <React.Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fingerprint</th>
                        <th>License</th>
                        <th>Product</th>
                        <th>Created</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        machines.map((machines) => {
                            return (
                                <tr>
                                    <td>{machines.id}</td>
                                    <td>{machines.fingerprint}</td>
                                    <td>{machines.license}</td>
                                    <td>{machines.product}</td>
                                    <td>{machines.created}</td>
                                    <td>{machines.lastUpdated}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
     );
}

export default Machines;