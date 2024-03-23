import type { ReactNode } from 'react'

import { classNames } from '@/utils/classNames'

import styles from './index.module.scss'

const variantMap = {
	small_text: styles.root__small_text,
	p20: styles.root_p20,
	p30: styles.root__p30,
	p24: styles.root__p24,
	p28: styles.root__p28,
	p18: styles.root__p18
}
const colorMap = {
	white: styles.root__white,
	black: styles.root__black,
	yellow: styles.root__yellow
}
const lineHeightMap = {
	l26: styles.root__l26
}

const fontWeightMap = {
	extra_bold: styles.root__extrabold,
	bold: styles.root__bold
}

export const Text = ({
	className,
	children,
	color = 'black',
	variant = 'p20',
	lineHeight,
	fontWeight
}: {
	className?: string
	children: ReactNode
	color: 'white' | 'black' | 'yellow'
	variant: 'p20' | 'p30' | 'p24' | 'p28' | 'p18' | 'small_text'
	lineHeight?: 'l26'
	fontWeight?: 'extra_bold' | 'bold'
}) => {
	return (
		<p
			className={classNames(
				variantMap[variant],
				colorMap[color],
				lineHeight ? lineHeightMap[lineHeight] : '',
				fontWeight ? fontWeightMap[fontWeight] : '',
				className ?? ''
			)}>
			{children}
		</p>
	)
}
