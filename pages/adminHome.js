import React, { Fragment, useState } from 'react'
import Card from '../MainSection/card';
import Landing from '../Layout/Landing/landing.layout'
import AccForm from '../MainSection/accordionForm'
const AdminHome = () => {

    const [user, setUser] = useState([{
        id: 1,
        name: "Md. Monirul Islam",
        image: "/monir.png",
        post: "ASE"
    },
    {
        id: 2,
        name: "Nahid Chowdhury",
        image: "/nahid.png",
        post: "JSE"
    },
    {
        id: 3,
        name: "Mehedi Hasan",
        image: "/mehedi.jfif",
        post: "ASE"
    }
    ])

    const dataPass = (data) => {
        const any = []
        const template = {
            id: user[user.length - 1]["id"] + 1,
            name: data.name,
            image: "/eraLogo.png",
            post: data.post
        }
        any.push(template)
        setUser([...user, template])
    }

    console.log(user)

    return (
        <Landing>
            <Fragment>
                <div className="container mt-5">
                    <div className="row d-flex justify-content-center jumbotron">
                        {
                            user.map(value => (
                                <Card key={value.id} name={value.name} image={value.image} post={value.post} />
                            ))
                        }
                    </div>
                    <AccForm dataPass={dataPass} />

                </div>

            </Fragment>
        </Landing>
    )
}

export default AdminHome
