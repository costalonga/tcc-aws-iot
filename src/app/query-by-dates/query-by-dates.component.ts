import { Component, OnInit } from '@angular/core';
import { CustomDateObject } from '../query-panel/date-format-model';
import { TimeBasedQueryOption, TimeBasedQuery } from '../query.model';
import { MockedQuery, QueryResultType1 } from '../query-panel/mocked-queries-result';
import { QueryOptionsEnum } from '../query-panel/query-panel.component';

export interface Q3OptionFormat {
  [id: string] : string;
}

@Component({
  selector: 'app-query-by-dates',
  templateUrl: './query-by-dates.component.html',
  styleUrls: ['./query-by-dates.component.css']
})
export class QueryByDatesComponent implements OnInit {

  // TODO HERE
  queryResults: QueryResultType1[] = new MockedQuery().q3Results;
  // TODO HERE

  timeBasedQueryOptions: TimeBasedQueryOption[] = [
    {id: 1, text: "Linha com maior média de tempo"},
    {id: 2, text: "Linha com menor média de tempo"},
    {id: 3, text: "Linha que percorreu maior distância"},
    {id: 4, text: "Linha que percorreu menor distância"},
  ]

  Q3MappedOptions: Q3OptionFormat = {
    1: "Linha com maior média de atrasos",
    2: "Linha com menor média de atrasos",
    3: "Linha que percorreu maior distância",
    4: "Linha que percorreu menor distância"
  }

  selectedQuery: TimeBasedQuery;

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

    if (this.selectedQuery.queryID === 1) {
      console.log("Maior Media Tempo");
      // TODO: Implementar chamada HTTP
    } else if (this.selectedQuery.queryID === 2) {
      console.log("Menor Media Tempo");
      // TODO: Implementar chamada HTTP
    } else if (this.selectedQuery.queryID === 3) {
      console.log("Maior Distancia");
      // TODO: Implementar chamada HTTP
    } else if (this.selectedQuery.queryID === 4) {
      console.log("Menor Distancia");
      // TODO: Implementar chamada HTTP
    } else {
      console.log("Selecione uma das 4 consultas disponíveis");
    }

    this.showResult();
  }

  onSelect(choosedQueryID: number): void {
    this.selectedQuery.queryID = choosedQueryID;
    if (choosedQueryID in this.Q3MappedOptions) {
      this.selectedQuery.text = this.Q3MappedOptions[choosedQueryID];
    } else {
      this.selectedQuery.text = "";
    }
    console.log("Value of Q3:", this.selectedQuery.text);
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
