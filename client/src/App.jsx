import { Outlet } from "react-router";
import './App.css'

function App() {

  return (
    <>
    <div className='flex items-center justify-center h-[100vh]'>
      <h1>Hello World!</h1>
      <Outlet />
    </div>
    </>
  )
} 

export default App
