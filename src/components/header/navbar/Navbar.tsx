import cl from './Navbar.module.scss'
import { NavbarItem } from './NavbarItem'
import { navbarItemsArr } from './navbarItems.data'

export const Navbar = () => {
	return (
		<nav className={cl.root}>
			<ul className={cl.root__items}>
				{navbarItemsArr.map(item => (
					<NavbarItem
						key={item.href}
						text={item.text}
						href={item.href}
					/>
				))}
			</ul>
		</nav>
	)
}
