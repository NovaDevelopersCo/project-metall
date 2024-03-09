'use client'

import { useState } from 'react'

import { Modal } from '@/components/modal/Modal'

export const HomePage = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<button onClick={() => setOpen(true)}>open Modal</button>
			<Modal
				active={open}
				setActive={setOpen}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
				facilis in mollitia dolores impedit saepe quia modi recusandae.
				Libero aut quia, rem id accusamus minima minus iste voluptatum
				voluptates molestias. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Laborum facilis in mollitia dolores impedit
				saepe quia modi recusandae. Libero aut quia, rem id accusamus
				minima minus iste voluptatum voluptates molestias. Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Laborum facilis in
				mollitia dolores impedit saepe quia modi recusandae. Libero aut
				quia, rem id accusamus minima minus iste voluptatum voluptates
				molestias. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Laborum facilis in mollitia dolores impedit saepe quia
				modi recusandae. Libero aut quia, rem id accusamus minima minus
				iste voluptatum voluptates molestias. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Laborum facilis in mollitia
				dolores impedit saepe quia modi recusandae. Libero aut quia, rem
				id accusamus minima minus iste voluptatum voluptates molestias.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
				facilis in mollitia dolores impedit saepe quia modi recusandae.
				Libero aut quia, rem id accusamus minima minus iste voluptatum
				voluptates molestias.
			</Modal>
		</>
	)
}
