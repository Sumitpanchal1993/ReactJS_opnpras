import React from 'react'
import '../Pages/Home.css'

const sectionData = [ 
   {}, {}, {}, {} 
]


export default function Home(props) {
  function homeKnowMore(){
    
  }
  
  return (
    <>
      <div className="base">
        <div className='base2'>
          <div>
            <h1>Welcome to the ONPRAS World</h1>
            <h2>Ultimate Design and Development Lab</h2>
            <p>The Advanced World of Designing and Tooling Solution For Your Buisness</p>
            <button id='btnHome' onClick={homeKnowMore}>Know more</button>
          </div>
          <div className='imagediv'>
          <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            
          </div>
        </div>


        <div className='base2' id='2'>
          <div>
            <h1>Welcome to the ONPRAS World</h1>
            <h2>Ultimate Design and Development Lab</h2>
            <p>The Advanced World of Designing and Tooling Solution For Your Buisness</p>
            <button id='btnHome' onClick={homeKnowMore}>Know more</button>
          </div>
          <div className='imagediv'>
          <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            
          </div>
        </div>
      </div>
    </>
  )

 
}
