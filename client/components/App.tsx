import Pingu from './Pingu'
import '../main.css'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
// import Ball from './Ball'
function App() {
  return (
    <>
      <Header />
      <div className="winterWonderland">
        <div>
          <h1>App</h1>
          <p>React development has begun!</p>
        </div>

        {/* <Ball /> */}
        <Pingu />
      </div>
      <Footer />
    </>
  )
}

export default App
