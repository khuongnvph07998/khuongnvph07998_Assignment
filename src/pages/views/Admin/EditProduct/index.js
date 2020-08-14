import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Edit = ({ products, onEdit }) => {


    let { id } = useParams();
    let history = useHistory();
    const product = products.find(product => product.id === id);
    const { register, handleSubmit, errors } = useForm();

    const [currentProduct, setCurrentProduct] = useState(product);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onEdit(currentProduct);
        history.push('/admin/products');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value
        })
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Edit Product Form</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="col-6">
                        <form onSubmit={handleSubmit(onHandleSubmit)}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    name="name"
                                    className="form-control"
                                    onChange={onHandleChange}
                                    ref={register({ required: true, minLength: 8 })}
                                    aria-describedby="errorName"
                                    defaultValue={product.name}
                                    aria-describedby="errorName" />
                                <small id="errorName" className="form-text text-danger">
                                    {errors.name && errors.name.type === "required" && <span>Nhập tên đi. Lười</span>}
                                    {errors.name && errors.name.type === "minLength" && <span>Tên ít nhất 8 kí tự nhé LewLew</span>}
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Categories</label>
                                <input
                                    name="cate"
                                    className="form-control"
                                    onChange={onHandleChange}
                                    ref={register({ required: true })}
                                    aria-describedby="errorCate"
                                    defaultValue={product.cate} />
                                <small id="errorCate" className="form-text text-danger">
                                    {errors.cate && errors.cate.type === "required" && <span>Chưa có tên danh mục kìa</span>}
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Image</label><br></br>
                                <input
                                    type="file"
                                    name="image"
                                    className="form-n"
                                    onChange={onHandleChange} /><br></br>
                                <img width="400" src={product.image} />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    style={{ height: '100px' }}
                                    type="text"
                                    name="desc"
                                    className="form-control"
                                    onChange={onHandleChange}
                                    defaultValue={product.description}
                                    aria-describedby="errorDesc">
                                </textarea>
                                <small id="errorDesc" className="form-text text-danger">
                                    {errors.desc && errors.desc.type === "required" && <span>Nói gì đi Pro</span>}
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    className="form-control"
                                    onChange={onHandleChange}
                                    defaultValue={product.price}
                                    aria-describedby="errorPrice" />
                            </div>
                            <small id="errorPrice" className="form-text text-danger">
                                {errors.price && errors.price.type === "required" && <span>Giá chế ơi</span>}
                            </small>
                            <div className="form-group">
                                <label>Status</label>
                                <select
                                    type="text"
                                    name="status"
                                    className="form-control"
                                    onChange={onHandleChange}
                                    defaultValue={product.status}
                                    aria-describedby="errorStatus" >
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

Edit.propTypes = {

}

export default Edit
