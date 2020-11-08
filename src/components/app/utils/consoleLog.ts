const consoleLog = (text: string): void => {
	const date: Date = new Date()

	console.log(`%c[App]%c ${date.getHours()}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:${date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}:%c ${text}`, 'color: pink', 'color: grey', '', 'color: orange', '')
}

export default consoleLog
