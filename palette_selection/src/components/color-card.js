import React from 'react'


export default function Colorcard1(props) {
  console.log(props)
  const {hex,hsv,rgb} = props.color
    return(
      <h1>
        <div>
          The hex  
          {hex}
          {/* HSV
          {hsv}
          RGB
          {rgb} */}
        </div>
      </h1>
    )
}
