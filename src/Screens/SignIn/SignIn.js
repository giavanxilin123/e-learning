import React, { Component } from 'react'
import { Form, Formik, Field } from 'formik'
import { connect } from 'react-redux'
import { login } from '../../Redux/Actions/user'
import '../../sass/main.scss'
class SignIn extends Component {



    render() {
        return (
            <Formik
                initialValues={{
                    taiKhoan: "",
                    matKhau: ""
                }}
                onSubmit={values => { this.props.dispatch(login(values)) 
                                        this.props.history.push("/")}}
                render={({ handleChange }) => (
                    <div className="login">
                        <Form className="w-50 mx-auto ">
                            <h1 className="text-center mt-3">Login</h1>
                            <div className="form-group">
                                <label>Account</label>
                                <Field type="text" name="taiKhoan"  onChange={handleChange} className="form-control" ></Field>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <Field type="password" name="matKhau" onChange={handleChange} className="form-control"></Field>
                            </div>
                            <button className="btn btn-warning" >Đăng Nhập</button>
                        </Form>
                    </div>

                )}
            ></Formik>
        //     <div class="main-content-agile">
		// 	<div class="w3ls-pro">
		// 		<h2>Login Now</h2>
		// 	</div>
		// 	<div class="sub-main-w3ls">	
		// 		<form action="#" method="post">
		// 			<input placeholder="Enter your E-mail" name="enter mail" type="email" required="">
		// 			<span class="icon1"><i class="fa fa-envelope" aria-hidden="true"></i></span>
		// 			<input placeholder="Enter Password" name="Password" type="password" required="">
		// 			<span class="icon2"><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
		// 			<div class="checkbox-w3">
		// 				<span class="check-w3"><input type="checkbox">Remember Me</span>
		// 				<a href="#">Forgot Password?</a>
		// 				<div class="clear"></div>
		// 			</div>
		// 			<div class="social-icons"> 
		// 					<ul>
		// 						<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
		// 						<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
		// 						<li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li> 
		// 					</ul>  
		// 				</div>
		// 			<input type="submit" value="">
		// 		</form>
		// 	</div>
		// </div>

        )
    }
}


export default connect()(SignIn)
