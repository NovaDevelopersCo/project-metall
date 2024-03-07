import Image from 'next/image'
import { Dispatch, ReactNode, SetStateAction } from 'react'

import Close from '@/assets/close.svg'

import cl from './Modal.module.scss'

export const Modal = ({
	active,
	setActive,
	children,
	variant
}: {
	active: boolean
	setActive: Dispatch<SetStateAction<boolean>>
	children: ReactNode
	variant?: string
}) => {
	switch (variant) {
		case 'form':
			return (
				<div
					className={
						active ? `${cl.root} ${cl.root__active}` : `${cl.root}`
					}
					onClick={() => setActive(false)}>
					<div
						className={
							active
								? `${cl.root__content} ${cl.root__content__activeContent}`
								: `${cl.root__content}`
						}
						onClick={e => e.stopPropagation()}>
						<span
							className={cl.root__content__close}
							onClick={() => setActive(false)}>
							<Image
								width={16}
								height={16}
								src={Close}
								alt="close"
							/>
						</span>
						<span>{children}</span>
					</div>
				</div>
			)
	}

	return (
		<div
			className={active ? `${cl.root} ${cl.root__active}` : `${cl.root}`}
			onClick={() => setActive(false)}>
			<div
				className={
					active
						? `${cl.root__content} ${cl.root__content__activeContent}`
						: `${cl.root__content}`
				}
				onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}
