import { useLoaderData } from 'react-router-dom'
import './App.css'
import Banner from './pages/Banner'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import Footer from './pages/Footer'
import ShowTouristsSpot from './components/ShowTouristsSpot'
function App() {

  const tourists = useLoaderData()

  return (

    <div>
      <Banner></Banner>
      <h1 className='text-4xl font-bold text-center text-purple-500 p-5'>Tourist Spot : {tourists.length}</h1>
      <div className='grid md:grid-cols-2 gap-4 mb-8 p-5'>
        {
          tourists.map(tourist => <ShowTouristsSpot key={tourist._id}
            tourist={tourist}  ></ShowTouristsSpot>)
        }
      </div>
      <Blog></Blog>
      <ContactUs />
      <Footer/>
    </div>
  )
}

export default App
