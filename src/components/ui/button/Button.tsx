import Image from 'next/image'

import document from '@/assets/icons/document.svg'
import { classNames } from '@/utils/classNames'

import cl from './Button.module.scss'
import { Text } from '@/components/typography/Text'

type ButtonProps = {
	text: string
	icon?: boolean
	width?: number
	height?: number
	variant?: 'primary' | 'outline'
}

export const Button = ({
	text,
	icon,
	variant = 'primary',
	width = 221,
	height = 55
}: ButtonProps) => {
	return (
		<button
			style={{ width: `${width}px`, height: `${height}px` }}
			className={classNames(cl.root, variant && cl[variant])}>
			{icon && (
				<Image
					alt={text}
					width={24}
					height={24}
					className={cl.root__icon}
					src={document}
				/>
			)}
			<Text className={cl.root__text}>{text}</Text>
		</button>
	)
}
