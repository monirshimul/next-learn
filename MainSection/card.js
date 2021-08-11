import React, { Fragment } from 'react'

const card = props => {
    console.log("props",props)
    const {image, name, post} = props
    return (
        <Fragment>
            <div className="card col-sm-4 p-3">
                <div className="text-center">
                <img
                src={image}
                className="img-fluid img-thumbnail"
                width="120px"
                height="120px"
                style={{borderRadius:"60px"}}
                />
                <p>{name}, {post}</p>
                </div>
                

            </div>
        </Fragment>
    )
}

export default card
