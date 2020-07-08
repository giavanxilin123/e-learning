import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../sass/main.scss'

import logo from '../../Assets/img/logo-dark.png'
import {FETCH_CREDENTIALS} from '../../Redux/Actions/type'
import {createAction} from '../../Redux/Actions/index'
import { connect } from 'react-redux'
class Header extends Component {
    onClick = ()=>{
        localStorage.clear();
         this.props.dispatch(createAction(FETCH_CREDENTIALS,null))
    }

    render() {
        return (
            <header className="massiveHeader" id="home">
                <nav className="navbar navbar-expand-lg navbar-light pt-0 pb-0 " id="navbar-hihi">
                    <a className="navbar-brand" >
                        <img src="https://cdn.freebiesupply.com/logos/large/2x/smartforce-e-learning-logo-png-transparent.png"  alt="" id="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse pr-3" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link  " to="/">HOME</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link " to="/detail">DETAIL</Link>
                            </li> */}
                            
                            {this.props.credentials ? 
                            <>
                             <li className="nav-item">
                                <span className="nav-link  text-uppercase"  >{this.props.credentials.hoTen} </span>
                            </li>
                            <li className="nav-item">
                            <a  onClick={this.onClick} className="logout nav-link">LOG OUT</a>
                            </li>
                            
                            </>
                           
                             : <>
                            <li className="nav-item">
                                <Link className="nav-link  " to="/signup">SIGN UP</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link   " to="/signIn">LOGIN</Link>
                            </li>
                            </>}
                            
                        </ul>
                    </div>
                </nav>
            </header>

        )
    }
   
}

const mapStateToProps = state => {
    return { credentials: state.user.credentials }
}


export default connect(mapStateToProps)(Header)
