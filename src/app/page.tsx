'use client'

import { Provider } from 'react-redux'

import { HomePage } from '@/pages/home'
import { store } from '@/store'

export default function Home() {
	return (
		<Provider store={store}>
			<HomePage />
		</Provider>
	)
}
