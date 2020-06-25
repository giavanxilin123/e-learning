import axios from 'axios'
import * as yup from 'yup'

export const signUpUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('Tài khoản không hợp lệ!'),
    matKhau: yup.string().required('Mật khẩu không hợp lệ!'),
    hoTen: yup.string().required('Họ tên không được để trống'),
    email: yup.string().required('Email không hợp lệ').email("*Email is not valid"),
    soDT:yup.string().matches(/^[0-9]+$/),
    maNhom: yup.string().required('*Field is required!')
})


 class UserService {
     signUp(data){
       return axios({
            method:"GET",
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
            data
        });
     }

     signIn(user){
       return axios({
            method:"POST",
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
            data: user
        });
     }
 }
 export default UserService;