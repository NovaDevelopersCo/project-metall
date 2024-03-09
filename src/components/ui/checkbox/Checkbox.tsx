'use client'

import cl from './Checkbox.module.scss'

export const Checkbox = ({ value, filter, active }: { value: string }) => {
	return (
		<label className={cl.root}>
			<input
				onChange={filter}
				type="checkbox"
				className={cl.root__checkbox}
				value={value}
			/>
			<span className={cl.root__fakeCheckbox}>
				<span
					className={
						active
							? `${cl.root__fakeCheckbox__check} ${cl.root__fakeCheckbox__check__active}`
							: `${cl.root__fakeCheckbox__check}`
					}
				/>
			</span>
		</label>
	)
}
