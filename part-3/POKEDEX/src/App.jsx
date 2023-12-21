import { Link } from 'react-browser-router'
import './App.css'
import CustomRoutes from './components/routes/CustomRoutes'

function App() {
  return (
    <>
      <h1 className='text-center text-5xl mb-10 mt-4'>
        Pokedex 
        {/* <Link to="/">Pokedex</Link> */}
      </h1>
      <CustomRoutes />
    </>
  )
}

export default App;