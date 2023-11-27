import { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { global } from '../../types/globalState'
import { useDispatch } from 'react-redux'
import { updateItemsPerPage, updatePage } from '../../redux/globalSlice'

export default function Pagination() {
  const dispatch = useDispatch()

  const globalStateValues: global = useSelector((state: any) => (state.global))

  const [page, setPage] = useState<number>(1)
  const [perPage, setPerPage] = useState<number>(5)
  const [next, setNext] = useState<boolean>(false)
  const [prev, setPrev] = useState<boolean>(false)

  useEffect(() => {
    setPage(parseInt(globalStateValues.page))
    setPerPage(parseInt(globalStateValues.perPage))
    setNext(globalStateValues.nextPage)
    setPrev(globalStateValues.prevPage)
  }, [globalStateValues.nextPage, globalStateValues.prevPage])

  const perPageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    if (newValue === '') {
      setPerPage(1)
      return
    }
    setPerPage(parseInt(newValue))
    dispatch(updateItemsPerPage(newValue))
  }

  const handlerPrevPage = () => {
    const newPage = page - 1
    setPage(newPage)
    dispatch(updatePage(newPage))
  }

  const handlerNextPage = () => {
    const newPage = page + 1
    setPage(newPage)
    dispatch(updatePage(newPage))
  }

  return (
    <div className='flex'>
        <div className="mx-4">
            <label className='mr-2'>Items per page</label>
            <input type='number' min={1} max={30} onChange={perPageHandler} value={perPage} className='inline-flex justify-center w-24 px-4 py-2 text-sm font-medium text-gray-700 bg-slate-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500' />
        </div>

      <div className="flex justify-center items-center space-x-4">
        <button onClick={handlerPrevPage} disabled={!prev}
          className="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-green-600 transition hover:bg-green-300 hover:text-slate-500 cursor-pointer shadow-sm">&lt;
        </button>
        <div className="text-slate-500">{page}</div>
        <button onClick={handlerNextPage} disabled={!next} 
          className="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-green-600 transition hover:bg-green-300 hover:text-slate-500 cursor-pointer shadow-sm">&gt;
        </button>
      </div>
    </div>
  )
}
