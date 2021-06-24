import { Component, OnInit } from '@angular/core';
import { CustomDateObject } from '../query-panel/date-format-model';
import { MockedQuery, QueryResultType1 } from '../query-panel/mocked-queries-result';
import { QueryOptionsEnum, SimpleQueryOptionsInterface, IDBasedQuery } from '../query.model';

@Component({
  selector: 'app-query-by-bus-id',
  templateUrl: './query-by-bus-id.component.html',
  styleUrls: ['./query-by-bus-id.component.css']
})
export class QueryByBusIdComponent implements OnInit {

  // TODO HERE
  queryResults: QueryResultType1[] = new MockedQuery().q1Results;
  // TODO HERE

  SimpleQueriesOptionsLst: SimpleQueryOptionsInterface[] = [
    {id: QueryOptionsEnum.Tempo, text: "Tempo Médio do Trajeto"},
    {id: QueryOptionsEnum.Quilometragem, text: "Quilometragem Percorrida"},
  ]

  selectedQuery: IDBasedQuery;
  // selectedQuery2: IDBasedQuery;

  exhibitQueryResult: boolean = false;
  public exhibitResultContent = {
    status: false,
    symbol: '+'
  } 

  public get QueryOptionsEnum(): typeof QueryOptionsEnum {
    return QueryOptionsEnum; 
  }

  constructor() { 
    this.selectedQuery = {
      id: "", 
      queryType: QueryOptionsEnum.Tempo,
      initDate: new CustomDateObject("02/03/2021"), // Oldest day from database
      endDate: new CustomDateObject("16/63/2021")  // Newest day from database
    }

    // this.selectedQuery2 = {
    //   id: "", 
    //   queryType: QueryOptionsEnum.Tempo,
    //   initDate: new CustomDateObject("02/03/2021"), // Oldest day from database
    //   endDate: new CustomDateObject("16/63/2021")  // Newest day from database
    // }
  }

  ngOnInit(): void {
  }

  executeQuery() {
    console.log("Button clicked!");
    // console.log(this.selectedQuery1);
    // console.log(this.selectedQuery1.initDate.date);
    // console.log(this.selectedQuery1.endDate.date);

    console.log("Value of Simple Query 1:", this.selectedQuery.queryType);
    // console.log("Value of Simple Query 2:", this.selectedQuery2.queryType);

    // if (this.selectedQuery2.queryType == QueryOptionsEnum.Tempo) {
    //   console.log("queryType ID = enum.TEMPO");
    // }
    // if (this.selectedQuery2.queryType == QueryOptionsEnum.Quilometragem) {
    //   console.log("queryType ID = enum.KM");
    // }

    this.showResult();
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
