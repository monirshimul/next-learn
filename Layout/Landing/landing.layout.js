import React, { Fragment } from 'react';
import Nav from '../Shared/navBar';
import Footer from '../Shared/footer'

const landingLayout = props => {
    return (
        <Fragment>
            <Nav/>
            {props.children}
            <Footer/>
        </Fragment>
    )
}

export default landingLayout
