'use client'

import debounce from 'lodash.debounce'

import Image from 'next/image'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'

import Loading from '@/assets/loading.svg'
import svg from '@/assets/search.svg'

import cl from './Search.module.scss'

export const Search = () => {
	const [value, setValue] = useState<string>('')
	const [debouncedValue, setDebouncedValue] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false)

	// eslint-disable-next-line
	const updateSearchValue = useCallback(
		debounce((value: string) => {
			setDebouncedValue(value)
		}, 150),
		[]
	)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
		updateSearchValue(event.target.value)
	}

	useEffect(() => {
		let req: NodeJS.Timeout

		if (debouncedValue) {
			setIsLoading(true)

			req = setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		}
		return () => {
			clearTimeout(req)
		}
	}, [debouncedValue])

	return (
		<div className={cl.root}>
			<input
				value={value}
				className={cl.root__input}
				type="search"
				placeholder="Поиск в каталоге..."
				onChange={handleChange}
			/>
			{!isLoading && (
				<Image
					className={cl.root__searchIcon}
					src={svg}
					alt={'Search'}
				/>
			)}
			{isLoading && (
				<Image
					className={`${cl.root__searchIcon} ${cl.root__loadingAnimation}`}
					src={Loading}
					alt={'Loading'}
				/>
			)}
		</div>
	)
}
