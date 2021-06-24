import { CustomDateObject } from "./query-panel/date-format-model";

export enum QueryOptionsEnum {
  Tempo = "Tempo Médio do Trajeto",
  Quilometragem = "Quilometragem Percorrida"
}


export interface SimpleQueryOptionsInterface {
  id: QueryOptionsEnum;
  text: string;
}
export interface IDBasedQuery {
  id: string;  // Line or Bus ID
  queryType: QueryOptionsEnum;
  initDate: CustomDateObject;
  endDate: CustomDateObject;

  // // TODO: Create new component with this properties
  // // Reuse component 3 times -> reduce HTML and TS files size
  // // Use data binding from APP.component to its (3) childs (one child per query component) 
  // // Each Component should have its own Execute, Toggle, and etc... methods
  // exhibitResultContent: boolean;
  // exhibitQueryResult: boolean;
}

export interface TimeBasedQueryOption {
  id: number;  // ID of the selected Query
  text: string;
}
export interface TimeBasedQuery {
  queryID: number;  // Index corresponding to the selected Query
  text: string;
  initDate: CustomDateObject;
  endDate: CustomDateObject;
}

export interface Q3OptionFormat {
  [id: string] : string;
}