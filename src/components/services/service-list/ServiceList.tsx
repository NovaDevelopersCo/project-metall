import { ServiceItem } from '../service-item/ServiceItem'
import { servicesItemsArr } from '../services.data'
import cl from './index.module.scss'

export const ServiceList = () => {
	return (
		<section className={cl.root}>
			{servicesItemsArr.map((i, index) => (
				<ServiceItem
					key={i.title}
					{...i}
					index={index}
				/>
			))}
		</section>
	)
}
