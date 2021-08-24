import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import styles from '../styles/Home.module.css';
import Card from '../MainSection/card';
import Landing from '../Layout/Landing/landing.layout'
import AccForm from '../MainSection/accordionForm'
import Login from '../MainSection/login'

export default function Home() {

  return (
    <Fragment>
      <Login/>
    </Fragment>
  )
}
