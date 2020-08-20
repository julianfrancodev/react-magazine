import React from 'react'
import Layout from "../components/Layout";
import Main from "../components/Main";
import BlogMain from "../components/BlogMain";
import Recents from "../components/Recents";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Layout>
        <Main />
        <Recents />
        <BlogMain />
        <Footer />
      </Layout>
    </>

  )
}
