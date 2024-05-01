import React, { Fragment } from 'react'

export const GifItem = ({ title,url,id}) => {
  return (
    <div className="card">
         {/* <li key={id}>{title}  <GifItem url={url}></GifItem>  </li> */}
         <img src={url} alt={title} />
         <p> {title} </p>
    </div>
  )
}
