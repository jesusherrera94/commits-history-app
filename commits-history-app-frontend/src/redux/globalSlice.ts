import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: 'devHDRA',
    repo: 'commits-history-app',
    token: '',
    page: '1',
    perPage: '5',
    nextPage: true,
    prevPage: false
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        updateRepoForm: (state, action) => {
            const { user, repo, token } = action.payload
            state.user = user
            state.repo = repo
            state.token = token
        },
        updatePage: (state, action) => {
            console.log(action.payload)
            state.page = action.payload
        },
        updateItemsPerPage: (state, action) => {
            state.perPage = action.payload
        },
        updateNextPrevPage: (state, action) => {
            const { nextPage, prevPage} = action.payload
            state.nextPage = nextPage
            state.prevPage = prevPage
        },
    }
})

export const { updateRepoForm, updatePage, updateItemsPerPage, updateNextPrevPage } = globalSlice.actions
export default globalSlice.reducer