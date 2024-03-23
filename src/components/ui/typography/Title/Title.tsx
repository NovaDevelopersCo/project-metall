import type { ReactNode } from 'react'

import { classNames } from '@/utils/classNames'

import styles from './index.module.scss'

const colorMap = {
	black: styles.root__black,
	white: styles.root__white,
	yellow: styles.root__yellow
}
const variantMap = {
	h1: styles.root__h1,
	h2: styles.root__h2,
	h3: styles.root__h3,
	title: styles.root__title
}
export const Title = ({
	className = '',
	variant = 'h2',
	color = 'black',
	children
}: {
	className?: string
	variant: 'h1' | 'h2' | 'h3' | 'title'
	color: 'black' | 'white' | 'yellow'
	children: ReactNode
}) => {
	{
		switch (variant) {
			case 'h1':
				return (
					<h1
						className={classNames(
							colorMap[color],
							variantMap[variant],
							className ?? ''
						)}>
						{children}
					</h1>
				)
			case 'h2':
				return (
					<h2
						className={classNames(
							colorMap[color],
							variantMap[variant],
							className ?? ''
						)}>
						{children}
					</h2>
				)
			case 'h3':
				return (
					<h3
						className={classNames(
							colorMap[color],
							variantMap[variant],
							className ?? ''
						)}>
						{children}
					</h3>
				)
			case 'title':
				return (
					<h4
						className={classNames(
							colorMap[color],
							variantMap[variant],
							className ?? ''
						)}>
						{children}
					</h4>
				)
		}
	}
}
