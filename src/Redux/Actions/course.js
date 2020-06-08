import {courseService} from '../../Services/index'
import {FETCH_COURSES} from './type'
import {createAction} from './index'
import {FETCH_COURSE_DETAIL} from '../../Redux/Actions/type'

export const fetchCourses = () =>{
    return dispatch =>{
        courseService.fetchCourse()
        .then(res=>{
            dispatch(createAction(FETCH_COURSES, res.data))
         }).catch(err=>{
             console.log(err)
         })
    }
}

export const fetchCourseDetail= (id) =>{
    return dispatch =>{
        courseService.fetchCourseDetail(id)
       .then(res=>{
            dispatch(createAction(FETCH_COURSE_DETAIL,res.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}