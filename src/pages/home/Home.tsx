'use client'

import { useDispatch, useSelector } from 'react-redux'

import { Checkbox } from '@/components/ui/checkbox/Checkbox'
import { setChecked } from '@/store/slices/filterSlice'

// Поправил название файла

export const HomePage = () => {
	const dispatch = useDispatch()
	const active = useSelector(state => state.filter.active)

	const handleChange = (value, checked) => {
		dispatch(setChecked({ value, checked }))
	}

	return (
		<>
			<Checkbox
				value="js"
				filter={handleChange}
				active={active}
			/>
			<Checkbox
				value="php"
				filter={handleChange}
				active={active}
			/>
		</>
	)
}
