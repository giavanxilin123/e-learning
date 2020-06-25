import axios from 'axios'

export default class CourseService{
    
 fetchCourse(data){
     return  axios({
        method: 'GET', 
        url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`,
        data
    })
 }

 fetchCourseDetail(id){
     return axios({
        method:'GET',
        url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
        data: id
    })
 }
 render(){
    console.log(this.props)
}
    
}

