
export interface QueryResultType1 {
  id: String;  
  tempo: String;
  quilometragem: String;  
  data: String; 
  qtd_trajetos_completados: Number; 
}

export interface QueryResultType2 {
  id: String;  
  tempo: String;
  quilometragem: String;  
  data: String; 
  qtd_trajetos_completados: Number; 
  qtd_veiculos: Number; 
}


export class MockedQuery {

  public q1Results: QueryResultType1[] = [
    {
      "id": "A72110",
      "tempo": "5",
      "quilometragem": "15",
      "data": "02/03/2021",
      "qtd_trajetos_completados": 10
    },
    {
      "id": "A72110",
      "tempo": "35",
      "quilometragem": "55",
      "data": "03/03/2021",
      "qtd_trajetos_completados": 9
    },
    {
      "id": "A72110",
      "tempo": "25",
      "quilometragem": "35",
      "data": "04/03/2021",
      "qtd_trajetos_completados": 10
    }
  ]

  public q2Results: QueryResultType2[] = [
    {
      "id": "410",
      "tempo": "500",
      "quilometragem": "2000",
      "data": "20/03/2021",
      "qtd_trajetos_completados": 100,
      "qtd_veiculos": 50,
    },
    {
      "id": "410",
      "tempo": "425",
      "quilometragem": "700",
      "data": "21/03/2021",
      "qtd_trajetos_completados": 99,
      "qtd_veiculos": 50,
    },
    {
      "id": "410",
      "tempo": "375",
      "quilometragem": "3000",
      "data": "22/03/2021",
      "qtd_trajetos_completados": 100,
      "qtd_veiculos": 50,
    },
    {
      "id": "410",
      "tempo": "555",
      "quilometragem": "2870",
      "data": "22/03/2021",
      "qtd_trajetos_completados": 100,
      "qtd_veiculos": 50,
    },
    {
      "id": "410",
      "tempo": "527",
      "quilometragem": "2968",
      "data": "22/03/2021",
      "qtd_trajetos_completados": 98,
      "qtd_veiculos": 50,
    }
  ]


  public q3Results: QueryResultType1[] = [
    {
      "id": "410",
      "tempo": "5",
      "quilometragem": "15",
      "data": "02/03/2021",
      "qtd_trajetos_completados": 10
    },
    {
      "id": "410",
      "tempo": "35",
      "quilometragem": "55",
      "data": "03/03/2021",
      "qtd_trajetos_completados": 9
    },
    {
      "id": "410",
      "tempo": "25",
      "quilometragem": "35",
      "data": "04/03/2021",
      "qtd_trajetos_completados": 10
    }
  ]


  constructor() {
  }


  // private _convertToDyanmoFormat() {
  //   this.d = tmp_date[0];
  //   this.m = tmp_date[1];
  //   this.y = tmp_date[2];
  // }


}

