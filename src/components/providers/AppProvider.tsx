'use client'

import type { ReactNode } from 'react'
import { ReduxProvider } from './ReduxProvider'

export const AppProvider = ({ children }: { children: ReactNode }) => {
	return <ReduxProvider>
		{children}
		</ReduxProvider>
}
