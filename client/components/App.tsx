import Pingu from './Pingu'
import '../main.css'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
// import Ball from './Ball'
function App() {
  return (
    <>
      <div className="winterWonderland">
        <Header />
        <div></div>

        {/* <Ball /> */}
        <Pingu />
        <Footer />
      </div>
    </>
  )
}

export default App
