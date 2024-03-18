import cl from './Footer.module.scss'
import { FooterBottom } from './footerbottom/FooterBottom'
import { FooterIcons } from './footericons/FooterIcons'
import { FooterTop } from './footertop/FooterTop'

export const Footer = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__container}>
				<FooterTop />
				<FooterIcons />
				<FooterBottom />
			</div>
		</div>
	)
}
