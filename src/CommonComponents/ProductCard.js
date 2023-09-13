import React from 'react'
import './ProductCard.css'
import productData from '../Data/ProductData'


function ProductCard(props) {
  // console.log(props.data.title)
  return (
    <><div style={{display:'flex', justifyContent:'center'}}>
      {productData.map((item) => (
        <div className="card">
          <img src={item.imagesrc} alt="Imgage" />
          <div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
            <button>Know More</button>
          </div>
        </div>
      ))}
      </div>
    </>
  )
}

export default ProductCard
