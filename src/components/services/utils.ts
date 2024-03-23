export const getFormattedCount = (number: number) =>
	String(number).length > 1 ? String(number) : `0${number}`
