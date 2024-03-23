import Image from 'next/image'

import document from '@/assets/icons/document.svg'
import { Text } from '@/components/ui/typography/Text'
import { classNames } from '@/utils/classNames'

import cl from './Button.module.scss'

type ButtonProps = {
	text: string
	icon?: boolean
	width?: number
	height?: number
	variant?: 'primary' | 'outline'
	textColor: 'white' | 'black' | 'yellow'
	textVariant: 'p20' | 'p30' | 'p24' | 'small_text'
}

export const Button = ({
	text,
	icon,
	variant = 'primary',
	width = 221,
	height = 55,
	textColor,
	textVariant
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
			<Text
				color={textColor}
				className={cl.root__text}
				variant={textVariant}>
				{text}
			</Text>
		</button>
	)
}
