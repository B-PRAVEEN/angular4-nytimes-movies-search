import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  dataTo: Array<any>;
  filter: string;
  query: string;
  data: Array<any>;
  colHeaders: string[] = ['Title', 'Head Line', 'Summary', 'opening Date', 'Rating'];
  columns: any[] = [
    {
      data: 'display_title'
    },
    {
      data: 'headline',
      renderer: 'text',
      readOnly: true
    },
    {
      data: 'summary_short',
      readOnly: true
    },
    {
      data: 'opening_date'
    },
    {
      data: 'mpaa_rating',

    }]
  options: any = {
    stretchH: 'all',
    columnSorting: true,
    filters: true,
    contextMenu: [
      'row_above', 'row_below', 'remove_row'
    ]
  };

  colWidths: number[] = [null, null, 55, null, null];
  constructor(public http: Http) {

  }
  ntReviewSearch() {
    this.http.get('https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=63bbc1b318b847e7a35dda59db8c761d&query=' + this.query).subscribe((res: Response) => {
      console.log(res.json());
      this.data = res.json().results
      this.dataTo = res.json().results
    })
  }

  public search() {
    console.log(this.query);
    this.ntReviewSearch();
  }

  public update() {

    let new_data = [];
    this.data = this.dataTo.filter((element, index) => {
      console.log((element.display_title).toLowerCase())
      if ((element.display_title).toLowerCase().search(this.filter) >= 0) {
        return true;
      } else {
        return false;
      }
    })
  }

}
