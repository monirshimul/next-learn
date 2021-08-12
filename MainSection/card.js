import React, { Fragment } from 'react'
import styles from './card.module.css'

const card = props => {
    console.log("props",props)
    const {image, name, post} = props
    return (
        <Fragment>
            <div className={`card col-sm-4 ${styles.cardStyle}`}>
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
