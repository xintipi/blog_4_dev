import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IStateProps {
  theme: string
}

const initialState: IStateProps = {
  theme: '',
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setThemeState(state, action: PayloadAction<string>) {
      state.theme = action.payload
    },
  },
})

export const { setThemeState } = commonSlice.actions
