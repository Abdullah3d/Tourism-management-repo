import { useLoaderData } from 'react-router-dom'
import './App.css'
import Banner from './pages/Banner'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import Footer from './pages/Footer'
import ShowTouristsSpot from './components/ShowTouristsSpot'
import BounceEffect from './components/BounceEffect'
function App() {

  const tourists = useLoaderData()

  return (

    <div >
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
      <BounceEffect></BounceEffect>
      <Footer/>
      
    </div>
  )
}

export default App


// import { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import './App.css';
// import Banner from './pages/Banner';
// import Blog from './pages/Blog';
// import ContactUs from './pages/ContactUs';
// import Footer from './pages/Footer';
// import ShowTouristsSpot from './components/ShowTouristsSpot';
// import BounceEffect from './components/BounceEffect';

// function App() {
//   const tourists = useLoaderData();

//   // State to track the current theme
//   const [theme, setTheme] = useState('light');

//   // Function to toggle between dark and light themes
//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <div className={`App ${theme === 'dark' ? 'dark' : ''}`}>
//       <Banner />
//       <h1 className='text-4xl font-bold text-center text-purple-500 p-5'>
//         Tourist Spot: {tourists.length}
//       </h1>
//       <div className='grid md:grid-cols-2 gap-4 mb-8 p-5'>
//         {tourists.map((tourist) => (
//           <ShowTouristsSpot key={tourist._id} tourist={tourist} />
//         ))}
//       </div>
//       <Blog />
//       <ContactUs />
//       <BounceEffect />
//       <Footer />
//       {/* Toggle Button */}
//       <button
//         className='fixed bottom-4 right-4 p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white'
//         onClick={toggleTheme}
//       >
//         {theme === 'light' ? '🌞' : '🌙'}
//       </button>
//     </div>
//   );
// }

// export default App;
