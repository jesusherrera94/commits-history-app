import { useState, useEffect } from 'react'
import getUserServices from './services/getUserServices'
import './App.css'
import { userInterface } from './types/userResponse'
import Profile from './components/profile/Profile'
import RepoForm from './components/repoForm/RepoForm'
import Card from './components/card/Card'
import Pagination from './components/pagination/Pagination'

function App() {
  const [userData, setUserData] = useState<string>('')

  useEffect(() => {

    const fetchUserAndRepoData = async () => {
      const user : userInterface = await getUserServices()
      console.log('')
      setUserData(user.test)
    }

    fetchUserAndRepoData()

  })

  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <Profile />
        <RepoForm />
      </div>
      <Pagination />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  )
}

export default App
