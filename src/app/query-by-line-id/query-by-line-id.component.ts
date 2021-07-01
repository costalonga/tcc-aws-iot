import { Component, OnInit } from '@angular/core';
import { CustomDateObject } from '../query-panel/date-format-model';
import { MockedQuery, QueryResultType2 } from '../query-panel/mocked-queries-result';
import { QueryOptionsEnum, SimpleQueryOptionsInterface, IDBasedQuery } from '../query.model';

@Component({
  selector: 'app-query-by-line-id',
  templateUrl: './query-by-line-id.component.html',
  styleUrls: ['./query-by-line-id.component.css']
})
export class QueryByLineIdComponent implements OnInit {

  

  // TODO HERE
  // queryResults: QueryResultType1[] = new MockedQuery().q1Results;
  queryResults: QueryResultType2[] = new MockedQuery().q2Results;
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
      endDate: new CustomDateObject("16/03/2021")  // Newest day from database
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
    // console.log(this.selectedQuery);
    // console.log(this.selectedQuery.initDate.date);
    // console.log(this.selectedQuery.endDate.date);

    console.log("Value of Simple Query 1:", this.selectedQuery.queryType);
    // console.log("Value of Simple Query 2:", this.selectedQuery2.queryType);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });


    xhr.open("POST", "https://4x095vdhkd.execute-api.us-west-2.amazonaws.com/staging");
    
    xhr.send();

    // To solve, CORS problem correctly:
    // AWS - REST API CORS SUPPORT: https://codeburst.io/react-js-api-calls-to-aws-lambda-api-gateway-and-dealing-with-cors-89fb897eb04d
    // XHR - With Credentials: https://stackoverflow.com/questions/42803394/cors-credentials-mode-is-include

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
