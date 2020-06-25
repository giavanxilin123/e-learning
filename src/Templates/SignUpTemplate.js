import React,{Fragment} from 'react';
import {Route} from 'react-router-dom';
import Header from '../Layouts/Header/Header'


const SignUp = (props) => {
    return (
        <Fragment>
            <Header />
            {props.children}
        </Fragment>
    )
};

export const SignUpTemplate = ({Component,...rest}) =>{ 
    return (
        <Route {...rest} render={(props) => {
            return (
                <SignUp>
                    <Component  {...props}/>
                </SignUp>
            )
        }} />
    )
}
