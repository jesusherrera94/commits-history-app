import { useState, useEffect } from 'react'
import getUserServices from './services/getUserServices'
import getCommitsService from './services/getCommitsService'
import './App.css'
import { userInterface } from './types/userResponse'
import { commitsArray, commitsInterface } from './types/commitsResponse'
import Profile from './components/profile/Profile'
import RepoForm from './components/repoForm/RepoForm'
import Card from './components/card/Card'
import Pagination from './components/pagination/Pagination'
import { global } from './types/globalState'
import { useSelector } from 'react-redux'

function App() {

  const globalStateValues: global = useSelector((state: any) => (state.global))


  const [userData, setUserData] = useState<userInterface>({
    profileUrl: '',
    name: '',
    location: '',
    creationDate: '',
    profileAvatar: '',
  })
  const [commitsObject, setCommitsObject] = useState<commitsArray>()
  const [refresh, setRefresh] = useState<boolean>(true)

  useEffect(() => {

    const fetchUserAndRepoData = async () => {
      console.log('ehectuo')
      // const user : userInterface = await getUserServices(
      //   globalStateValues.user,
      //   globalStateValues.token
      // )
      const commitsResponse : Array<commitsInterface> =  await getCommitsService(
        globalStateValues.user,
        globalStateValues.repo,
        globalStateValues.token,
        globalStateValues.perPage,
        globalStateValues.page,
      )

      setCommitsObject({
        commits: commitsResponse
      })
      // setUserData(user)
    }

    fetchUserAndRepoData()

  }, [globalStateValues.perPage])

  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <Profile user={userData} />
        <RepoForm />
      </div>
      <Pagination />
      {commitsObject?.commits.map((commit: commitsInterface) => {
        return (<Card commit={commit} />)
      })}
    </>
  )
}

export default App
