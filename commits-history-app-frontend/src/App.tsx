import { useState, useEffect } from 'react'
import getUserServices from './services/getUserServices'
import './App.css'
import { userInterface } from './types/userResponse'

function App() {
  const [value, setValue] = useState<string>('')

  useEffect(() => {

    const getUser = async () => {
      const user : userInterface = await getUserServices()
      setValue(user.test)
    }

    getUser()

  }, [])



  

  return (
    <>
      <div>this is the test {value}</div>
    </>
  )
}

export default App
