import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: 'devHDRA',
    repo: 'commits-history-app',
    token: '',
    page: '1',
    perPage: '5'
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
            const { page } = action.payload
            state.page = page
        },
        updateItemsPerPage: (state, action) => {
            state.perPage = action.payload
        },
    }
})

export const { updateRepoForm, updatePage, updateItemsPerPage } = globalSlice.actions
export default globalSlice.reducer