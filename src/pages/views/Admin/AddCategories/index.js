import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
// import { Editor } from '@tinymce/tinymce-react';
import firebase from '../../../../firebase'

const AddProduct = ({ onAddCate }) => {

    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();

    const [desc, setDesc] = useState("");

    const onHandleSubmit = (data) => {
        console.log(data.image[0]);
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    // id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    desc,
                    image: url
                }
                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAddCate(newData);
                alert("Thêm thành công")
            })
                history.push("/admin/cate")
        });
    }
    const handleEditorChange = (content, editor) => {
        setDesc(content);
    }

    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Add Product Form</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="col-6">
                        <form onSubmit={handleSubmit(onHandleSubmit)}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    // onChange={onHandleChange}
                                    ref={register}
                                    aria-describedby="errorName" />
                                {/* <small id="errorName" className="form-text text-danger">
                                    {errors.name && errors.name.type === "required" && <span>Nhập tên đi. Lười</span>}
                                    {errors.name && errors.name.type === "minLength" && <span>Tên ít nhất 8 kí tự nhé LewLew</span>}
                                </small> */}
                            </div>
                            <div className="form-group">
                                <label>Image</label>
                                <input
                                    type="file"
                                    name="image"
                                    className="form-n"
                                    ref={register({ required: true })}
                                    aria-describedby="errorImage" />
                                {/* <small id="errorImage" className="form-text text-danger">
                                    {errors.image && errors.image.type === "required" && <span>Chưa có ảnh kìa má</span>}
                                </small> */}
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    ref={register}
                                    aria-describedby="errorDes" />
                                    
                                {/* <Editor
                                    init={{
                                        height: 500,
                                        images_upload_url: 'postAcceptor.php',
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar:
                                            'undo redo | formatselect | bold italic backcolor |  image link\
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help',

                                    }}
                                    onEditorChange={handleEditorChange}
                                /> */}
                            </div>
                            <button type="submit" className="btn btn-primary" alert>Upload</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct