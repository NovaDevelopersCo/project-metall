'use client'

import { useState } from 'react'

import { Modal } from '@/components/modal/Modal'

export const HomePage = () => {
	const [modalActive, setModalActive] = useState(false)

	return (
		<>
			<button onClick={() => setModalActive(true)}>open modal</button>
			<Modal
				variant="form"
				active={modalActive}
				setActive={setModalActive}>
				<p>text</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Libero, quasi beatae corporis laborum autem exercitationem
					nulla veritatis harum consequuntur delectus odio accusamus
					pariatur. Enim dolorem aliquam eum illum voluptatibus
					blanditiis!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Libero, quasi beatae corporis laborum autem exercitationem
					nulla veritatis harum consequuntur delectus odio accusamus
					pariatur. Enim dolorem aliquam eum illum voluptatibus
					blanditiis!
				</p>
			</Modal>
		</>
	)
}
