export enum Status {
	LOADING = 'LOADING',
	LOADED = 'LOADED',
	ERROR = 'ERROR',
	NEVER = 'NEVER'
}

export interface IApp {
	// scale: number;
	status: Status; // TODO: статус приложения LOADED присваивается только после загрузки всех его модулей
}
