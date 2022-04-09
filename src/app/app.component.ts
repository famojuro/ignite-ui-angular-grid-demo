import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'evaluation';

  selectedMenuIndex:number = 0;

  ngOnInit(): void {
  }

  updateMenuIndex(index: number){
    this.selectedMenuIndex = index;
    console.log(this.selectedMenuIndex);
  }
}
