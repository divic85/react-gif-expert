import { Fragment, useEffect, useState } from "react"
import {GifItem} from './GifItem'
import { useFetchGifs } from "../hooks/useFetchGifs";






export const GifGrid = ({category}) => {

   console.log('Llega a gif:'+ category)
   const {images,isLoading} = useFetchGifs(category);




     
  return (
    <Fragment > 
        <h3> {category} </h3>
         {
            isLoading && (<h2> Cargando...</h2>)
         }

        <div className="card-grid">
           {
              images.map ( (imagen) => (
                    <GifItem 
                    key={imagen.id}
                    { ...imagen}/>
              ) )
           }
         
           
        </div>

    </Fragment>
  )
}
 