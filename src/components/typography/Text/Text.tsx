import type { ReactNode } from 'react'

import { classNames } from '@/utils/classNames'

import styles from './index.module.scss'

const variantMap = {
	small_text: styles.root__small_text,
	p20: styles.root_p20,
	p30: styles.root__p30,
	p24: styles.root__p24
}
const colorMap = {
	white: styles.root__white,
	black: styles.root__black,
	yellow: styles.root__yellow
}
export const Text = ({
	className,
	children,
	color = 'black',
	variant = 'p20'
}: {
	className?: string
	children: ReactNode
	color: 'white' | 'black' | 'yellow'
	variant: 'p20' | 'p30' | 'p24' | 'small_text'
}) => {
	return (
		<p
			className={classNames(
				variantMap[variant],
				colorMap[color],
				className ?? ''
			)}>
			{children}
		</p>
	)
}
