'use client'

import { useState } from 'react'

import { classNames } from '@/utils/classNames'

import cl from './Input.module.scss'

export const Input = ({
	className,
	variant,
	placeholderText
}: {
	className?: string
	variant: string
	placeholderText?: string
}) => {
	const inputStyle = classNames(
		cl.root,
		variant === 'area' ? cl.root__textarea : '',

		className ?? ''
	)

	const [phoneNumber, setPhoneNumber] = useState('+7')

	// const handleInputChange = (e: { target: { value: string } }) => {
	// 	const inputValue = e.target.value.split('')

	// 	if (inputValue[0] === '+' && inputValue[1] === '7') {
	// 		setPhoneNumber(inputValue.join(''))
	// 	} else if (inputValue[0] === '+' && inputValue.length === 1) {
	// 		setPhoneNumber('+7')
	// 	} else if (inputValue.length >= 3) {
	// 	}
	// }

	const handleInputChange = (e: { target: { value: string } }) => {
		const inputValue = e.target.value

		if (inputValue.startsWith('+7')) {
			setPhoneNumber(inputValue)
		} else if (inputValue.startsWith('+') && inputValue.length === 1) {
			setPhoneNumber('+7')
		}

		const cleanedPhoneNumber = inputValue.replace(/\D/g, '')
		let formattedPhoneNumber = ''

		if (cleanedPhoneNumber.length <= 3) {
			formattedPhoneNumber = `(${cleanedPhoneNumber})`
		} else if (cleanedPhoneNumber.length <= 6) {
			formattedPhoneNumber = `(${cleanedPhoneNumber.slice(0, 3)}) ${cleanedPhoneNumber.slice(3)}`
		} else {
			formattedPhoneNumber = `(${cleanedPhoneNumber.slice(0, 3)}) ${cleanedPhoneNumber.slice(3, 6)}-${cleanedPhoneNumber.slice(6, 10)}`
		}

		setPhoneNumber(formattedPhoneNumber)
	}

	switch (variant) {
		case 'text':
			return (
				<input
					draggable={false}
					placeholder={placeholderText}
					type="text"
					className={inputStyle}
				/>
			)
		case 'tel':
			return (
				<input
					draggable={false}
					className={inputStyle}
					placeholder={placeholderText}
					type="tel"
					value={phoneNumber}
					onChange={handleInputChange}
					maxLength={12}
				/>
			)
		case 'area':
			return (
				<textarea
					draggable={false}
					className={inputStyle}
					placeholder={placeholderText}></textarea>
			)
		default:
			return (
				<input
					draggable={false}
					placeholder={placeholderText}
					className={inputStyle}
					type="text"
				/>
			)
	}
}
