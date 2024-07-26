import { useState } from 'react'

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
    <button onClick = {handleGoodClick}>Good</button>
    <button onClick = {handleNeutralClick}>Neutral</button>
    <button onClick = {handleBadClick}>Bad</button>
    <h2>statics</h2>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {all}</p>
    <p>average {average}</p>
    <p>positive {positive} %</p>
    </div>
  )
}

export default App
