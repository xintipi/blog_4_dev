import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface StateProps {
  token: string
}

const initialState: StateProps = {
  token: '',
}

export const authStore = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload
    },
  },
})

export const { setToken } = authStore.actions
