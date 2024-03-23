import { YandexMap } from '../map'
import { Button, Container, Typography } from '../ui'
import cl from './index.module.scss'

const { Text, Title } = Typography

export const Address = () => {
	return (
		<section className={cl.root}>
			<Container>
				<Title
					className={cl.root__title}
					variant="h3"
					color="black">
					Наш адрес
				</Title>
				<div className={cl.root__body}>
					<YandexMap className={cl.root__body__map} />
					<div className={cl.root__body__content}>
						<Title
							variant="h3"
							color="yellow"
							className={cl.root__body__content__title}>
							Контактная информация
						</Title>
						<div className={cl.root__body__content__body}>
							<Text
								color="black"
								variant="p28"
								fontWeight="extra_bold">
								Отдел продаж
							</Text>
							<Text
								color="black"
								variant="p18">
								Адрес офиса: г. Москва, ул. Ленина, 25, офис 305
							</Text>
							<Text
								fontWeight="extra_bold"
								color="black"
								variant="p28">
								Складские базы
							</Text>
							<Text
								color="black"
								variant="p18">
								Локация 1: г. Москва, Южное шоссе, 42, склад №5
							</Text>
						</div>
						<div className={cl.root__body__content__buttons}>
							<Button
								variant="primary"
								text="Заказать звонок"
								textColor="black"
								textVariant="small_text"
							/>
							<Button
								variant="outline"
								text="Оставить заявку"
								textColor="black"
								textVariant="small_text"
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
