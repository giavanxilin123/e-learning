import React, { Component } from 'react'
import CourseItem from '../../Components/CourseItem/CourseItems'
import {connect} from'react-redux'
import {fetchCourses} from '../../Redux/Actions/course'

 class HomeScreen extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4">Danh Sách Khóa Học</h1>
                <div className="container">
                    <div className="row">
                      {this.props.courseList.map((item,index)=>{
                          return   <div className="col-3" key={index}>
                          <CourseItem item={item} key={index} ></CourseItem>
                      </div>
                      })}
                      
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
    //     courseService.fetchCourse()
    //    .then(res=>{
    //        this.props.dispatch(createAction(FETCH_COURSES, res.data))
    //     }).catch(err=>{
    //         console.log(err)
    //     })

    this.props.dispatch(fetchCourses())
    }
}



const mapStateToProps = state =>{
    return {
        courseList: state.course.courses
    }
};

export default connect(mapStateToProps)(HomeScreen);
