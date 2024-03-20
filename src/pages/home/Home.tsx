'use client'

import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox/Checkbox'

export const HomePage = () => {
	const [check, setChecked] = useState<string[]>([])
	const [active, setActive] = useState<boolean>(false)

	const handleChange = (event: {
		target: { value: string; checked: boolean }
	}) => {
		const { value, checked } = event.target

		if (checked) {
			setChecked(prev => [...prev, value])
			setActive(true)
		} else {
			setChecked(prev => prev.filter(item => item !== value))
			setActive(check.length === 0)
		}
	}

	console.log('фильтры:', check)

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
