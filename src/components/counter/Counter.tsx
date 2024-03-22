import { classNames } from '@/utils/classNames'

import cl from './Counter.module.scss'

type CounterProps = {
	value: number
	setValue: React.Dispatch<React.SetStateAction<number>>
	quantity: number
}

export const Counter = ({ value, setValue, quantity }: CounterProps) => {
	return (
		<div className={cl.root}>
			<button
				onClick={() => value > 0 && setValue(prev => prev - 1)}
				className={classNames(
					cl.root__button,
					cl.root__button_left,
					!value ? cl.root__button_disabled : ''
				)}>
				-
			</button>
			<div className={cl.root__value}>{value}</div>
			<button
				onClick={() => value < quantity && setValue(prev => prev + 1)}
				className={classNames(
					cl.root__button,
					cl.root__button_right,
					value === quantity ? cl.root__button_disabled : ''
				)}>
				+
			</button>
		</div>
	)
}
