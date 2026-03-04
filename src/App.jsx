import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

import leftImg from './assets/vector1.png'
import rightImg from './assets/vector2.png'

function App() {


  return (
    <>
      <Navbar></Navbar>

      <Banner leftImage={leftImg}
        rightImage={rightImg}
        title="Customer Support Zone"
        description="Track, manage and resolve customer tickets efficiently."></Banner>

      <Footer></Footer>
    </>
  )
}

export default App
