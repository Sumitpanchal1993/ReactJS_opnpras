import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios'
import ProductCard from "../CommonComponents/ProductCard"
import ProductData from '../Data/ProductData'

export default function Products() {
  const [post, setPost] = useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        console.log(resp)
        setPost(resp.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(post)
  return (
    <>
      <ProductCard data={ProductData}/>
      <ProductCard/>
    </>
  )
}
