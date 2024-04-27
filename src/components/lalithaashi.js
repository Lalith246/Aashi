import React from 'react'

const LalithAashi = (props) => {
  const imageSrc = require(`../assets/${props.imageName}`)

  return (
    <>
      <img src={imageSrc} alt='no img' srcset='' width={1200} height={1100} />
      {/* <h1>Hello {props.name}</h1> */}
    </>
  )
}

export default LalithAashi
