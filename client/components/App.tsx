import Pingu from './Pingu'
import '../main.css'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
// import Ball from './Ball'
function App() {
  function makeMore(){
    console.log("hoy")
  }
  return (
    <>
      <div className="winterWonderland">
        <Header />
        <div></div>

        {/* <Ball /> */}
        <Pingu />

        <button onClick={makeMore}>asdf</button>

        <Footer />

      </div>
    </>
  )
}

export default App
