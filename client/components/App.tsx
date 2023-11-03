import Pingu from './Pingu'
import '../main.css'
import Header from './Header.tsx'
import Footer from './Footer.tsx'

import { useState } from 'react'



// import Ball from './Ball'
function App() {
  const [pinguArr, setPinguArr] = useState([<Pingu />])
  function makeMore() {
    setPinguArr([...pinguArr, <Pingu />])
  }
  return (
    <>
      <div className="winterWonderland">
        <Header />

        {/* <Ball /> */}
        {[pinguArr]}

        <button onClick={makeMore}>Make more characters</button>


        <Footer />
      </div>
    </>
  )
}

export default App
