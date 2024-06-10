// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
      <div>
          <h1>Custom App | React</h1>
      </div>
  )
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}





// This is for App() function
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
   </React.StrictMode>,
)


const anotherElement = (
  <a href= "https://google.com" target = '_blank'>Visit Google</a>
)


ReactDOM.createRoot(document.getElementById('root')).
  render(
    MyApp()  // at the end of the day you can simply call the function like JavaScript 
)
  

// it does not run because ReactElement writing style is not parsed 
ReactDOM.createRoot(document.getElementById('root')).
  render(
    ReactElement
)


ReactDOM.createRoot(document.getElementById('root')).
  render(
    anotherElement
)


// 2:10