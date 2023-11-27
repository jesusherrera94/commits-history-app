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
import { useDispatch } from 'react-redux'
import { updateNextPrevPage } from './redux/globalSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch()
  
  const globalStateValues: global = useSelector((state: any) => (state.global))


  const [userData, setUserData] = useState<userInterface>({
    profileUrl: '',
    name: '',
    location: '',
    creationDate: '',
    profileAvatar: '',
  })
  const [commitsObject, setCommitsObject] = useState<commitsArray>()

  useEffect(() => {

    const fetchUserAndRepoData = async () => {
      try {
        const user : userInterface = await getUserServices(
          globalStateValues.user,
          globalStateValues.token
        )
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
        setUserData(user)
        dispatch(updateNextPrevPage({
          nextPage: commitsResponse[0].nextPage,
          prevPage: commitsResponse[0].prevPage
        }))
        toast.success('User and repo data loaded successfully')
      } catch (error: any) {
        const code = error.response.status
        if (code === 401 || code === 403) toast.error('Unabled to access to the repo, It is possible that you reach the github quota or the repo is private. Try adding a token', { autoClose: 20000 })
        else toast.error('Something went wrong loading user and repo data from GitHub, try again later')
      }
    }

    fetchUserAndRepoData()

  }, [
    globalStateValues.perPage,
    globalStateValues.page,
    globalStateValues.user,
    globalStateValues.repo,
    globalStateValues.token
  ])

  return (
    <>
      <ToastContainer />
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

