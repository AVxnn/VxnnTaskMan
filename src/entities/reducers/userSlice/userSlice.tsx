import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userState {
  name: string,
  uid: string
  worked: boolean,
  timeWorkToday: any,
  limitDay: number,
  workedTime: object,
  data: any
}

const initialState: userState = {
  name: '',
  uid: '',
  worked: false,
  workedTime: null,
  timeWorkToday: {},
  limitDay: 0,
  data: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setUid: (state, action: PayloadAction<string>) => {
      state.uid = action.payload
    },
    setLimitDay: (state, action: PayloadAction<number>) => {
      state.limitDay = action.payload
    },
    setWorkedTime: (state, action: PayloadAction<any>) => {
      state.workedTime = action.payload
    },
    setWorked: (state, action: PayloadAction<boolean>) => {
      state.worked = action.payload
    },
    setData: (state, action: PayloadAction<object>) => {
      state.data = action.payload
    },
    unsetWorked: (state) => {
      state.worked = false
    },
    // unsetWorked: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { setName, setWorked, unsetWorked, setUid, setData, setLimitDay, setWorkedTime} = userSlice.actions

export default userSlice.reducer