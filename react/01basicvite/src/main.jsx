import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Vdo from './Vdo.jsx'

const reactElement = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    childen : "click me"
}


function myApp(){
    return(
        <div>
            <h1>custom react app</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="http://google.com" target='_blank'>visit google</a>
)

const areactElement = React.createElement(
    "a",
    {href:"https://google.com", target:"_blank"},
    "click me to visit google"
)


createRoot(document.getElementById('root')).render(

    
    areactElement

)
