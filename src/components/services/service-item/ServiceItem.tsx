import Image from 'next/image'

import { Typography } from '@/components/ui/typography'
import { classNames } from '@/utils/classNames'

import type { TServiceItem } from '../types'
import { getFormattedCount } from '../utils'
import cl from './index.module.scss'

const { Title, Text } = Typography

export const ServiceItem = ({
	index,
	image,
	title,
	firstParagraph,
	secondParagraph
}: TServiceItem & { index: number }) => {
	const formattedIndex = getFormattedCount(index + 1)

	return (
		<article
			className={classNames(
				cl.root,
				+formattedIndex % 2 == 0 ? cl.root_right : cl.root_left
			)}
			data-count={formattedIndex}>
			<div></div>
			<div className={cl.root__top}>
				<div className={cl.root__top__body}>
					<Title
						variant="h3"
						color="black"
						className={cl.root__top__body__title}>
						{title}
					</Title>
					<Text
						color="black"
						variant="p24"
						lineHeight="l26">
						{firstParagraph}
					</Text>
				</div>

				<div className={cl.root__top__body__image}>
					<Image
						src={image}
						alt={title}
					/>
				</div>
			</div>
			{!!secondParagraph && (
				<Text
					color="black"
					variant="p24"
					className={cl.root__text}
					lineHeight="l26">
					{secondParagraph}
				</Text>
			)}
		</article>
	)
}
