import Email from '@/assets/email.svg'
import Phone from '@/assets/phone.svg'

import cl from './FooterBottom.module.scss'

export const footerBottomItems = [
	{
		href: '#',
		linkStyle: `${cl.root__footerBottomItem__link}`,
		src: Email,
		alt: 'Email',
		textStyle: `${cl.root__footerBottomItem__link__text}`,
		text: 'metal@gmail.com'
	},
	{
		href: '#',
		linkStyle: `${cl.root__footerBottomItem__link}`,
		src: Phone,
		alt: 'Phone',
		textStyle: `${cl.root__footerBottomItem__link__text}`,
		text: '+7 (499) 695-34-22'
	}
]
