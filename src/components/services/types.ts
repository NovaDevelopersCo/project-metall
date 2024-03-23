import type { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

export type TServiceItem = {
	firstParagraph: ReactNode
	secondParagraph?: ReactNode
	title: string
	image: StaticImageData
}
