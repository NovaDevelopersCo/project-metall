import Link from 'next/link'

import { footerTopLeftItems, footerTopRightItems } from './FooterTop.data'
import cl from './FooterTop.module.scss'

export const FooterTop = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__navItem}>
				<strong className={cl.root__navItem__strong}>
					Главная страница
				</strong>
				{footerTopLeftItems.map(({ href, text, styles }) => (
					<Link
						className={styles}
						href={href}
						key={text}>
						{text}
					</Link>
				))}
			</div>
			<div className={cl.root__navItem}>
				<h2 className={cl.root__navItem__title}>ПК РС</h2>
			</div>
			<div className={cl.root__navItem}>
				<strong className={cl.root__navItem__strong}>
					Правила пользования
				</strong>
				{footerTopRightItems.map(({ href, text, styles }) => (
					<Link
						className={styles}
						href={href}
						key={text}>
						{text}
					</Link>
				))}
			</div>
		</div>
	)
}
