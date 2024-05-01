import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
 
const [images, setImages] = useState ([]);
const [isLoading, setIsLoading] = useState(true);
console.log('llega helper: '+category)

const getImages = async() => {
    const newImages = await getGifs( category);
    setImages (newImages);
    setIsLoading(false);
}


useEffect( () => {
   // getGifs(category);
   getImages();
},[] );

    return {
        images,
        isLoading
    }
}
