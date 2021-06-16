
export interface CustomDateFormat {
  d: string;
  m: string;
  y: string;
}

export class CustomDateObject {
  private d;
  private m;
  private y;
  public date: string;

  constructor(dd_mm_yyyy: string) {
    const tmp_date = dd_mm_yyyy.split("/");
    if (tmp_date.length > 1) {
      this.date = dd_mm_yyyy;
      this.d = tmp_date[0];
      this.m = tmp_date[1];
      this.y = tmp_date[2];
    } else {
      this.date = "";
    }

  }


  // private _convertToDyanmoFormat() {
  //   this.d = tmp_date[0];
  //   this.m = tmp_date[1];
  //   this.y = tmp_date[2];
  // }


}

