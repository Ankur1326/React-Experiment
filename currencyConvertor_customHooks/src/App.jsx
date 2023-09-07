import { useState } from 'react';
import './App.css'

// import useCurrencyInfo from './hooks/useCurrencyinfo';
import { InputBox } from "./components/InputBox";
import useCurrencyInfo from './hooks/useCurrencyinfo';

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from) 

  const options = Object.keys(currencyInfo)
  
  const swap = () => 
  
  return (
    <>
      <h1 className='text-3xl bg-yellow-300'>Hello world</h1>
      {/* <useCurrencyInfo /> */}
      <InputBox />
    </>
  )
}

export default App;
