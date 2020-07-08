import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'

export default class CourseItems extends Component {
    render() {
        console.log(this.props.item)
        return (
            
            <div className="card px-2 mb-4 ">
                <img src={this.props.item.hinhAnh} style={{width:'100%', height:"150px"}} alt=''></img>
                <p className="lead">{this.props.item.tenKhoaHoc}</p>
            <p className="lead">{this.props.item.nguoiTao.hoTen}</p>
                <p className="lead">View: {this.props.item.luotXem}</p>
                <Link to={`/detail/${this.props.item.maKhoaHoc}`} className="btn btn-warning">Go to detail</Link>
            </div>
            
        )
    }
}
