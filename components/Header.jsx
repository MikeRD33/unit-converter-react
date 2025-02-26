

export default function Header(props){

  console.log(props.value)
  return (
    <>
    <header>
      <h1>Metric/Imperial Unit conversion</h1>
      <input 
        type="number" 
         
        placeholder='20'
        value={props.value}
        onChange={(e)=>props.setValue(e.target.value)}
        
      />
      <button onClick={props.convertMeterToFeet}>Convert</button>
    </header>
    </>
  )
}