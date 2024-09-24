import './App.css'
import Navbar from './components/navbar'
import Investment from './components/Investment'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <section id='home'>
        <Navbar></Navbar>
        <Investment></Investment>
      </section>
      <section id='about'>
        <About></About>
      </section>
      <section id='contact'>
        <Footer></Footer>
      </section>
    </>
  )
}
export default App
