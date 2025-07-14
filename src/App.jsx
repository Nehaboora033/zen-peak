import './App.css'
import Assetsallocation from './components/Assetsallocation'
import Footer from './components/common/Footer'
import Companies from './components/Companies'
import Cryptoworld from './components/Cryptoworld'
import Herosection from './components/Herosection'
import Ourteam from './components/Ourteam'
import Portfolio from './components/Portfolio'
import Primary from './components/Primary'



function App() {
  return (
    <>
      <div id='home'>
        <Herosection />
      </div>
      <div id='about' >
        <Primary />
      </div>
        <Companies />
      <div id='team' >
        <Ourteam />
      </div>
      {/* <div id='portfolio'>
        <Portfolio />
      </div> */}
      {/* <div id='allocation'>
        <Assetsallocation />
      </div> */}
      {/* <div id='contact'>
        <Cryptoworld />
      </div> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
