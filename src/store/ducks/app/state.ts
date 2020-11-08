export enum Actions {
	SELECT = 'SELECT',
	NODE = 'NODE',
	ROD = 'ROD',
	SUPPORT_1 = 'SUPPORT_1',
	SUPPORT_2 = 'SUPPORT_2',
	SUPPORT_3 = 'SUPPORT_3',
	FORCE = 'FORCE',
	LOAD = 'LOAD',
}

export interface IObject {
	id: string;
	position: { x: number; y: number };
	type: Actions;
}

export interface IApp {
	history: IObject[];
	currentAction: Actions;
	tip: string;
	// scale: number; // TODO: масштаб рабочей области
	// status: Status; // TODO: статус приложения LOADED присваивается только после загрузки всех его модулей
}
