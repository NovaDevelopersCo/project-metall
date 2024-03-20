import cl from './Checkbox.module.scss'

export const Checkbox = ({
	value,
	filter,
	active
}: {
	value: string
	filter: (event: { target: { value: string; checked: boolean } }) => void // eslint-disable-line no-unused-vars
	active: boolean
}) => {
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
