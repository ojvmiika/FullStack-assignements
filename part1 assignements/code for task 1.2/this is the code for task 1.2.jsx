const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14},
  ]

  const Part = (props) => {
    return (
      <p>{props.part} {props.exercises}</p>
    )
  }

  const Header =(props)=> {
    return (
      <div>
        <h1>{props.course}</h1>
        </div>
    )
  }

  const Content =(props)=> {
    return (
      <div>
        <Part part ={props[0].part} exercises ={props[0].exercises} />
        <Part part ={props[1].part} exercises = {props[1].exercises} />
        <Part part = {props[2].part} exercises = {props[2].exercises} />
        </div>
    )
  }

  const Total = (props) => {
    return(
      <div>
        <p>Number of exercises {props[0].exercises + props[1].exercises + props[2].exercises}</p>
        </div>
    )
  }
  
  return(
    <div>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}

export default App
