import './App.css'
import Banner from './pages/Banner'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import Footer from './pages/Footer'
function App() {

  return (
    <>
      <h1 className='text-4xl text-purple-500'>Tourism Management</h1>
      <Banner></Banner>
      <Blog></Blog>
      <ContactUs/>
      <Footer></Footer>
    </>
  )
}

export default App
