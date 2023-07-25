import React from "react";

function Products({products = [{
    id: 1,
    name: 'V26',
    created: '2020-01-01',
    lastUpdated: '2023-06-19'
}]}) {
    return ( 
        <React.Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Created</th>
                        <th>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => {
                            return (
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.created}</td>
                                    <td>{product.lastUpdated}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
     );
}

export default Products;