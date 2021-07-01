import { Component, OnInit } from '@angular/core';
import { CustomDateObject } from './date-format-model';
import { MockedQuery, QueryResultType1, QueryResultType2 } from './mocked-queries-result';



export enum QueryOptionsEnum {
  Tempo = "Tempo Médio do Trajeto",
  Quilometragem = "Quilometragem Percorrida"
}


export enum ThirdQueryOptionsEnum {
  MelhorTempo = "Tempo Médio do Trajeto",
  PiorTempo = "Tempo Médio do Trajeto",
  MelhorQuilometragem = "Quilometragem Percorrida",
  PiorQuilometragem = "Quilometragem Percorrida"
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

@Component({
  selector: 'app-query-panel',
  templateUrl: './query-panel.component.html',
  styleUrls: ['./query-panel.component.css']
})
export class QueryPanelComponent implements OnInit {

  // TODO HERE
  firstQueryResults: QueryResultType1[] = new MockedQuery().q1Results;
  secondQueryResults: QueryResultType2[] = new MockedQuery().q2Results;
  thirdQueryResults: QueryResultType1[] = new MockedQuery().q3Results;
  // TODO HERE


  SimpleQueriesOptionsLst: SimpleQueryOptionsInterface[] = [
    {id: QueryOptionsEnum.Tempo, text: "Tempo Médio do Trajeto"},
    {id: QueryOptionsEnum.Quilometragem, text: "Quilometragem Percorrida"},
  ]

  timeBasedQueryOptions: TimeBasedQueryOption[] = [
    {id: 1, text: "Linha com maior média de atrasos"},
    {id: 2, text: "Linha com menor média de atrasos"},
    {id: 3, text: "Linha que percorreu maior distância"},
    {id: 4, text: "Linha que percorreu menor distância"},
    // {id: 5, text: "Q5"},
  ]

  Q3MappedOptions: Q3OptionFormat = {
    1: "Linha com maior média de atrasos",
    2: "Linha com menor média de atrasos",
    3: "Linha que percorreu maior distância",
    4: "Linha que percorreu menor distância"
  }

  selectedQuery1: IDBasedQuery;
  selectedQuery2: IDBasedQuery;
  selectedQuery3: TimeBasedQuery;

  exhibitQueryResult: boolean = false;
  public exhibitResultContent = {
    status: false,
    symbol: '+'
  } 

  public get QueryOptionsEnum(): typeof QueryOptionsEnum {
    return QueryOptionsEnum; 
  }

  constructor() { 
    this.selectedQuery1 = {
      id: "", 
      queryType: QueryOptionsEnum.Tempo,
      initDate: new CustomDateObject("02/03/2021"), // Oldest day from database
      endDate: new CustomDateObject("16/03/2021")  // Newest day from database
    }

    this.selectedQuery2 = {
      id: "", 
      queryType: QueryOptionsEnum.Tempo,
      initDate: new CustomDateObject("02/03/2021"), // Oldest day from database
      endDate: new CustomDateObject("16/03/2021")  // Newest day from database
    }

    this.selectedQuery3 = {
      queryID: 0, 
      text: "",
      initDate: new CustomDateObject(""), // Oldest day from database
      endDate: new CustomDateObject("")  // Newest day from database
    }
   }

  ngOnInit(): void {
  }

  executeQuery() {
    console.log("Button clicked!");
    // console.log(this.selectedQuery1);
    // console.log(this.selectedQuery1.initDate.date);
    // console.log(this.selectedQuery1.endDate.date);

    console.log("Value of Simple Query 1:", this.selectedQuery1.queryType);
    console.log("Value of Simple Query 2:", this.selectedQuery2.queryType);

    if (this.selectedQuery2.queryType == QueryOptionsEnum.Tempo) {
      console.log("queryType ID = enum.TEMPO");
    }
    if (this.selectedQuery2.queryType == QueryOptionsEnum.Quilometragem) {
      console.log("queryType ID = enum.KM");
    }

    this.showResult();
  }

  onSelectQ3(choosedQueryID: number): void {
    this.selectedQuery3.queryID = choosedQueryID;
    if (choosedQueryID in this.Q3MappedOptions) {
      this.selectedQuery3.text = this.Q3MappedOptions[choosedQueryID];
    } else {
      this.selectedQuery3.text = "";
    }
    console.log("Value of Q3:", this.selectedQuery3.text);
  }

  showResult(): void {
    this.exhibitQueryResult = true;
    this.exhibitResultContent.status = true;
    this.exhibitResultContent.symbol = '-';
  }

  toggleContent(): void {
    this.exhibitResultContent.status = !this.exhibitResultContent.status;
    if (this.exhibitResultContent.status) {
      this.exhibitResultContent.symbol = '-';
    } else {
      this.exhibitResultContent.symbol = '+';
    }
  }




}
