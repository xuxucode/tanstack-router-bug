import { createFileRoute } from '@tanstack/react-router'
import '../App.css'

export const Route = createFileRoute('/')({
  component: App,
})

function throwError() {
  throw new Error('this is an error')
}

function handleClick() {
  console.log('button clicked')
  // Using the object destructure.
  let { something } = throwError()
  console.log('this message should not be printed')
}

function App() {
  return (
    <button onClick={handleClick}>Click</button>
  )
}
