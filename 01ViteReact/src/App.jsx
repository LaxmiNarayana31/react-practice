
// function App() {
  

//   return (
//    <h1> Hello I am Laxmi Narayana </h1>
//   )
// }

// export default App




import Demo from "./Demo"

function App() {
  const username = "chai aur code"

  return (   // in jsx you can return only one element (<> </>)
    // in React  you can return <> </> This is called fragment
    <>      
    <Demo/>
    <h1>This is for demo with react {username}</h1>
    <p>test para</p>
   </>
  )
}

export default App
