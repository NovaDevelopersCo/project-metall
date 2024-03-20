import Image from 'next/image'
import Link from 'next/link'

import Location from '@/assets/location.svg'
import Time from '@/assets/time.svg'

import cl from './HeaderTop.module.scss'

export const HeaderTop = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__container}>
				<span className={cl.root__container__text}>
					<Image
						src={Location}
						alt="location"
					/>
					Москва
				</span>
				<span className={cl.root__container__text}>
					Адрес: Смоленская улица 39, Москва
				</span>
				<span className={cl.root__container__text}>
					<Image
						src={Time}
						alt="time"
					/>
					Пн. - Пт.: 9:00 - 18:00
				</span>
				<Link
					href="#"
					className={cl.root__container__text}>
					+7 (499) 938-95-77
				</Link>
				<Link
					href="#"
					className={cl.root__container__text}>
					metal@gmail.com
				</Link>
			</div>
		</div>
	)
}
