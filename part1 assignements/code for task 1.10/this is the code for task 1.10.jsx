import { useState } from 'react'

const Statistics = (props) => {
  if (props.all ===0){
    return( 
    <p>No feedback given</p>  
    )
  }
  else
  return (
    <div>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="average" value= {props.average} />
      <StatisticLine text="positives" value = {props.positive} />
      
    </div>
    )
}

const StatisticLine = (props) => {
if(props.text === "positives"){
  return(
    <p>{props.text} {props.value} % </p>
  )
}
else
  return(
    <p>{props.text} {props.value}</p>
  )
}


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [total, setAverage] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(total +1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(total -1)
  }

  const average = (total / all)
  const positive = (good / all)*100
  

  return (
    <div>
    <h1>give feedback</h1>
    <Button handleClick = {handleGoodClick} text ='Good'/>
    <Button handleClick = {handleNeutralClick} text='Neutral'/>
    <Button handleClick = {handleBadClick} text='Bad'/>
    <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all} average = {average} positive ={positive}
    />
    </div>
  )
}

export default App
