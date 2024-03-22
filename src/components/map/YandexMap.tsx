import { classNames } from '@/utils/classNames'

export const YandexMap = ({ className }: { className?: string }) => {
	const mapClasses = classNames('', className ?? '')
	return (
		<iframe
			className={mapClasses}
			src="https://yandex.ru/map-widget/v1/?um=constructor%3A62c88f257f7e08aacd83799af32c670a8b2d3fe4a6fe481d5f09c8a4faf24b5b&amp;source=constructor"
			width="962"
			height="619"
		/>
	)
}
