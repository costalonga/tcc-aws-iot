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