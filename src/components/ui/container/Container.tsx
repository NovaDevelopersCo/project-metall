import type { ReactNode } from 'react'

import { classNames } from '@/utils/classNames'

import cl from './index.module.scss'

export const Container = ({
	children,
	className
}: {
	children: ReactNode
	className?: string
}) => {
	const containerClasses = classNames(cl.root, className ?? '')
	return <div className={containerClasses}>{children}</div>
}
