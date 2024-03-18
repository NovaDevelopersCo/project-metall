import Image from 'next/image'
import Link from 'next/link'

import { footerBottomItems } from './FooterBottom.data'
import cl from './FooterBottom.module.scss'

export const FooterBottom = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__footerBottomItem}>
				{footerBottomItems.map(
					({ href, linkStyle, src, alt, textStyle, text }) => (
						<Link
							className={linkStyle}
							href={href}
							key={text}>
							<Image
								src={src}
								alt={alt}
							/>
							<span className={textStyle}>{text}</span>
						</Link>
					)
				)}
			</div>
			<div className={cl.root__footerBottomItem}>
				<Link
					href="#"
					className={cl.root__footerBottomItem__link}>
					<span className={cl.root__footerBottomItem__link__text}>
						Website developed by Nova Developers
					</span>
				</Link>
			</div>
		</div>
	)
}
