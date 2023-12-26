import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  newsList: [],
  newsDetail: null,
}

const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {
    setNewsList: (state, action) => {
      state.newsList = action.payload
    },
    setNewsDetail: (state, action) => {
      state.newsDetail = action.payload
    },
  },
})

export const { setNewsList, setNewsDetail } = newsSlice.actions
export default newsSlice.reducer
