import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  PrimaryHeading from './components/heading.jsx'
import { recipeData } from './data/data.js'
import CustomImage from './components/image.jsx'
import { SecHeading } from './components/heading.jsx'
import {ListComponent} from './components/list.jsx'

function App() {
  

  return (
    <>
    {
      recipeData.map(eachData=>{
        return(
          <div key={eachData.id}>
            <PrimaryHeading heading={eachData.id}/>
            <CustomImage source={eachData.image}/>
            <SecHeading sec={"step of ingredients"}/>
            <ListComponent lists={eachData.ingredients}/>
          </div>
        )
      })
    }
    </>
  )
}

export default App
