import React from 'react'
const style = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  padding: '5px'
}

function Copyright() {
  return (
    <>
      <div className='copyright' style={style}>
        <span >Copyright@onpras.com  |  </span>
        <span>Site Desinged By: Sumit Panchal</span>
      </div>
    </>
  )
}

export default Copyright
