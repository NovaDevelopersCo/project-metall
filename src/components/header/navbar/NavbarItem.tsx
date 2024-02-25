import Link from 'next/link';
import cl from './NavbarItem.module.scss'

export const NavbarItem = ({ href, text }: { href: string; text: string }) => {
	return (
		<li className={cl.root}>
			<Link
			
				href={href}
				className={cl.root__link}>
				{text}
			</Link>
		</li>
	)
}
