import { ServiceList } from '@/components/services'
import { Container } from '@/components/ui/container'
import { Typography } from '@/components/ui/typography'

const { Title } = Typography

export const ServicesPage = () => {
	return (
		<>
			<Container>
				<Title
					variant="h3"
					color="black">
					Услуги
				</Title>
				<ServiceList />
			</Container>
		</>
	)
}
