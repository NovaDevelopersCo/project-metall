'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import cl from './Breadcrumbs.module.scss'

export const Breadcrumbs = () => {
	const pathName = usePathname()

	let currentLink = ''

	const paths = pathName
		?.split('/')
		.filter(path => path !== '')
		.map(path => {
			currentLink += `/${path}`

			return (
				<li
					className={cl.root__item}
					key={path}>
					<Link
						className={cl.root__item__link}
						href={currentLink}>
						{path}
					</Link>
				</li>
			)
		})

	return (
		<div className={cl.root}>
			<ul className={cl.root__items}>
				<li className={cl.root__item}>
					<Link
						className={cl.root__item__link}
						href="/">
						Главная
					</Link>
				</li>
				{paths}
			</ul>
		</div>
	)
}
