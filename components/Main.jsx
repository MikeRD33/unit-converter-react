
import Header from '/components/Header.jsx'
import React from 'react'

export default function Main(){
  
  const [value, setValue] =React.useState('')
  const [result, setResult] = React.useState({
    meterToFeet:'',
    gallonToLiter:'',
    kiloToPounds:''
  })



  function convertMeterToFeet(){

      if(!isNaN(value)){
        console.log('its a number')
      }
      else{
        console.log('try again')
      }
      setResult({
        meterToFeet: `${value} meters = ${(value * 3.281).toFixed(2)} feet | ${value} feet = ${(value / 3.281).toFixed(2)} meters`,
        gallonToLiter: `${value} liters = ${(value * 0.264).toFixed(2)} gallons | ${value} gallons = ${(value / 0.264).toFixed(2)} liters`,
        kiloToPounds: `${value} kilos = ${(value * 2.205).toFixed(2)} pounds | ${value} pounds = ${(value / 2.205).toFixed(2)} kilos`
      })

    
  }

  return (
    <>
      <main>
        <Header value={value} setValue={setValue} convertMeterToFeet={convertMeterToFeet}  />
        <section>
          <div className='box'>
            <h1>Length (Meter/Feet)</h1>
            <p>{result.meterToFeet || '20 meters = 65.616feet | 20 feet = 6.096'}</p>
          </div>
          <div className='box'>
            <h1>Volume (Liters/Gallons)</h1>
            <p>{result.gallonToLiter || '20 liters = 5.284 gallons | 20 gallons = 75.708 liters'}</p>
          </div>
          <div className='box'>
            <h1>Mass (Kilograms/Pounds)</h1>
            <p>{result.kiloToPounds || '20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos'}</p>
          </div>
          

        </section>
      </main>
    </>
  )
}