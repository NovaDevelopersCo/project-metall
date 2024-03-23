import { Container } from '@/components/container'
import { ServiceList } from '@/components/services'
import { Typography } from '@/components/typography'

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
