import type { ReactNode } from 'react'

import cl from './index.module.scss'

export const Container = ({ children }: { children: ReactNode }) => {
	return <div className={cl.root}>{children}</div>
}
