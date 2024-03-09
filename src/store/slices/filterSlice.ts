import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		check: [],
		active: false
	},
	reducers: {
		setChecked: (state, action) => {
			const { value, checked } = action.payload

			if (checked) {
				state.check.push(value)
				state.active = true
			} else {
				state.check = state.check.filter(item => item !== value)
				state.active = state.check.length === 0
			}
		}
	}
})

export const { setChecked } = filterSlice.actions
export default filterSlice.reducer
