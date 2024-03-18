import Image, { StaticImageData } from 'next/image'

import Arrow from '@/assets/arrow.svg'

import cl from './CatalogItem.module.scss'

export const CatalogItem = ({
	src,
	alt,
	width,
	height,
	ProductName
}: {
	src: StaticImageData
	alt: string
	width: number
	height: number
	ProductName: string
}) => {
	return (
		<div className={cl.root}>
			<Image
				className={cl.root__productImg}
				src={src}
				alt={alt}
				width={width}
				height={height}
			/>
			<span className={cl.root__name}>{ProductName}</span>
			<div className={cl.root__link}>
				<Image
					className={cl.root__link__arrowImg}
					src={Arrow}
					alt="vector"
				/>
			</div>
		</div>
	)
}
