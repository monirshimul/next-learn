import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import styles from '../styles/Home.module.css';
import Card from '../MainSection/card';
import Landing from '../Layout/Landing/landing.layout'
import AccForm from '../MainSection/accordionForm'

export default function Home() {

const [user, setUser] = useState([{
  id:1,
  name:"Md. Monirul Islam",
  image:"/monir.png",
  post:"ASE"
},
{
  id:2,
  name:"Nahid Chowdhury",
  image:"/nahid.png",
  post:"JSE"
},
{
  id:3,
  name:"Mehedi Hasan",
  image:"/mehedi.jfif",
  post:"ASE"
}
])

const dataPass=(data)=>{
  console.log("Data", data)
  const any = []
  const template = {
    id:"",
    name: data.name,
    image:"/eraLogo.png",
    post:data.post
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
            user.map(value=>(
              <Card key={value.id} name={value.name} image={value.image} post={value.post}/>
            ))
          }
        </div>
        <AccForm dataPass={dataPass} />

      </div>

    </Fragment>
    </Landing>
  )
}
