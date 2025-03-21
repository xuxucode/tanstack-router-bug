import { createFileRoute } from '@tanstack/react-router'
import '../App.css'

export const Route = createFileRoute('/')({
  component: App,
})

function throwError() {
  throw new Error('this is an error')
}

function handleClick() {
  // Using the object destructure.
  let { something } = throwError() // this `throw` is ignored
  console.log('this message should not be printed')
}

handleClick()

function App() {
  return (
    <button onClick={handleClick}>Click</button>
  )
}
