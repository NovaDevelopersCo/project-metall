import { Breadcrumbs } from '@/components/breadcrumbs'
import { AppProvider } from '@/components/providers'
import '@/styles/index.scss'
import { createMetadata } from '@/utils/metadata'

export const metadata = createMetadata('Metall', 'Metall')

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<AppProvider>
					<Breadcrumbs />
					<main>{children}</main>
				</AppProvider>
			</body>
		</html>
	)
}
