import React,{Fragment} from 'react';
import {Route} from 'react-router-dom';
import Header from '../Layouts/Header/Header'
import Banner from '../Layouts/Banner/Banner'
import Design from '../Layouts/Design/Design'

const HomeLayout = (props) => {
    return (
        <Fragment>
            <Header />
            <Banner></Banner>
            {props.children}
            <Design></Design>
        </Fragment>
    )
};

export const HomeTemplate = ({Component,...rest}) =>{ 
    return (
        <Route {...rest} render={(props) => {
            return (
                <HomeLayout>
                    <Component  {...props}/>
                </HomeLayout>
            )
        }} />
    )
}
