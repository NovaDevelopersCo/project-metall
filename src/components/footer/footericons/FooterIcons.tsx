import Link from 'next/link'

import { footerIconsItems } from './FooterIcons.data'
import cl from './FooterIcons.module.scss'

export const FooterIcons = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__iconsItem}>
				<span className={cl.root__iconsItem__border}></span>
			</div>
			<div className={cl.root__iconsItem}>
				{footerIconsItems.map(({ href, src: Icon, alt }) => (
					<Link
						href={href}
						key={alt}>
						<Icon />
					</Link>
				))}
			</div>
			<div className={cl.root__iconsItem}>
				<span className={cl.root__iconsItem__border}></span>
			</div>
		</div>
	)
}
