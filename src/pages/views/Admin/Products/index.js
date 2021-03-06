import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ProductsManager = ({ products, onRemove }) => {
    const removeHandle = (id) => {
        onRemove(id)
    }
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6><br></br>
                    <div style={{ float: 'right' }}>
                        <Link className="btn btn-primary" to="/admin/add">
                            <span>Add Products</span></Link>
                    </div>
                    <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Categories</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Sale Price</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, name, cate, image, salePrice, price }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td>{name}</td>
                                        <td>{cate}</td>
                                        <td><img src={image} alt="" width="100" /></td>
                                        <td>{salePrice}</td>
                                        <td>{price}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => removeHandle(id)}>Xóa</button>
                                            <Link to={"/admin/edit/" + id}><button className="btn btn-info mr-2" >Edit</button></Link>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
