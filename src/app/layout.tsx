import { Roboto_Flex } from 'next/font/google'

import { AppProvider } from '@/components/providers'
import '@/styles/index.scss'
import { createMetadata } from '@/utils/metadata'

const font = Roboto_Flex({
	weight: ['600', '700', '800', '900', '300'],
	subsets: ['latin']
})

export const metadata = createMetadata('Metall', 'Metall')

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={font.className}>
				<AppProvider>
					<main>{children}</main>
				</AppProvider>
			</body>
		</html>
	)
}
