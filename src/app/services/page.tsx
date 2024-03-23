import { ServiceList } from '@/components/services'
import { Container, Typography } from '@/components/ui'

const { Title } = Typography

export default function Services() {
	return (
		<Container>
			<Title
				variant="h3"
				color="black">
				Услуги
			</Title>
			<ServiceList />
		</Container>
	)
}
