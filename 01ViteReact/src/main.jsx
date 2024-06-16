/* eslint-disable react-refresh/only-export-components */
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



// Whatever you written in the MyApp(), end of the day it formatted to object like below 
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }





// This is for App() function
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  //  </React.StrictMode>,
)


// This is also a object it works but ReactElement object does not work because RootElement object synstax is not right. The key value properties is not right 
const anotherElement = (
  <a href= "https://google.com" target = '_blank'>Visit Google</a>
)



const reactElement = React.createElement(
  'a',
  { href: "https://google.com", target: '_blank' },
  '[Click to Google]'
)
  
  
  
  
ReactDOM.createRoot(document.getElementById('root')).
  render(
    <MyApp />    // It is more optimized way of writing 
    // MyApp()  // at the end of the day you can simply call the function like JavaScript 
)
  

// // it does not run because ReactElement writing style is not parsed 
// ReactDOM.createRoot(document.getElementById('root')).
//   render(
//     ReactElement
     
// )


ReactDOM.createRoot(document.getElementById('root')).
  render(
    // <ReactElement />
    reactElement
)


// It works fine 
ReactDOM.createRoot(document.getElementById('root')).
  render(
    anotherElement
)
