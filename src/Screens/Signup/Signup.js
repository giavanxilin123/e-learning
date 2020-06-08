import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { signUpUserSchema } from '../../Services/user'
import { userService } from '../../Services/index.js'





export default class Signup extends Component {

    _handleSubmit = values => {
            userService
            .signUp(values)
            .then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="w-50 mx-auto">
                <h1 className="display-4 text-center">Sign Up</h1>

                <Formik
                    initialValues={{
                        taiKhoan: '',
                        matKhau: '',
                        hoTen: '',
                        email: '',
                        soDT: '',
                        maNhom: 'GP01',
                    }}
                    validationSchema={signUpUserSchema}
                    onSubmit={this._handleSubmit}
                    render={(formikProps) => (
                        <Form>
                            <div className="form-group">
                                <label>Tài Khoản</label>
                                <Field type="text" className="form-control" name="taiKhoan" onChange={formikProps.handleChange}></Field>
                                <ErrorMessage name="taiKhoan">
                                    {
                                        (msg) => <div className="alert alert-danger">{msg}</div>
                                    }
                                </ErrorMessage>
                            </div>

                            <div className="form-group">
                                <label>Mật Khẩu</label>
                                <Field type="password" className="form-control" name="matKhau" onChange={formikProps.handleChange}></Field>
                                <ErrorMessage name="matKhau" />
                            </div>

                            <div className="form-group">
                                <label>Họ tên</label>
                                <Field type="text" className="form-control" name="hoTen" onChange={formikProps.handleChange}></Field>
                                <ErrorMessage name="hoTen" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <Field type="email" className="form-control" name="email" onChange={formikProps.handleChange}></Field>
                                <ErrorMessage name="email" />
                            </div>

                            <div className="form-group">
                                <label>Số điện thoại</label>
                                <Field type="text" className="form-control" name="soDT" onChange={formikProps.handleChange}></Field>
                                <ErrorMessage name="soDT" />
                            </div>

                            <div className="form-group">
                                <label>Mã nhóm</label>
                                <Field component="select" className="form-control" name="maNhom" onChange={formikProps.handleChange}>
                                    <option>GP01</option>
                                    <option>GP02</option>
                                    <option>GP03</option>
                                    <option>GP04</option>
                                    <option>GP05</option>
                                    <option>GP06</option>
                                    <option>GP07</option>
                                    <option>GP08</option>
                                    <option>GP09</option>
                                    <option>GP10</option>
                                </Field>
                                <ErrorMessage name="maNhom" />
                            </div>

                            <div className="text-center">
                                <button className="btn btn-success" >Submit</button>
                            </div>
                        </Form>)}></Formik>

            </div>
        )
    }
}
