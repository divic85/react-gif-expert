
import React, { Fragment } from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory'; 
import {GifGrid} from './components/GifGrid'

export const  GifExpertApp = () =>{

    const [categories, setCategories] = useState( [ 'One Punch' ]);

    const onAddCategory =(newCategory) => {
       
       // setCategories( categories.concat('Valor3') )
       if( categories.includes(newCategory)) return;
      setCategories ( [ newCategory , ...categories]);
    
    }

  return (
    <Fragment>
        {/**titulo */}
        <h1>GifExpertApp</h1>

        <AddCategory 
            //setCategories = {setCategories} 
            onNewCategory = { (event) => onAddCategory(event)}
        />
        
      

            {
              categories.map ( (category)=> 
                ( 
                  <GifGrid key={category} category={category} />
                    
                )
              )
            }
           
   

    </Fragment>
    
  )
}


