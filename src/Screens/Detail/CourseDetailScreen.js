import React, { Component } from 'react'

import {connect} from  'react-redux'

import {fetchCourseDetail} from '../../Redux/Actions/course'

 class CourseDetailScreen extends Component {
    render() {
      
        return (
            <div className="mt-2">
               <img src={this.props.courseDetail.hinhAnh} alt={this.props.courseDetail.tenKhoaHoc}></img>
               <h3>{this.props.courseDetail.tenKhoaHoc}</h3> 
            </div>
        )
    }
    componentDidMount(){
    //     courseService.fetchCourseDetail(this.props.match.params.courseId )
    //    .then(res=>{
    //         this.props.dispatch(createAction(FETCH_COURSE_DETAIL,res.data))
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    this.props.dispatch(fetchCourseDetail(this.props.match.params.id))
    
    }
}

const mapStateToProps = state =>{
    return {
        courseDetail: state.course.courseDetail 
    }
}


export default connect (mapStateToProps)(CourseDetailScreen)
