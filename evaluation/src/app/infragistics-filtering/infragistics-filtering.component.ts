import {Component, OnInit, ViewChild} from '@angular/core';
import {DATA} from "../data/nwindData";
import {IgxGridComponent, IgxStringFilteringOperand} from "igniteui-angular";

@Component({
  selector: 'app-infragistics-filtering',
  templateUrl: './infragistics-filtering.component.html',
  styleUrls: ['./infragistics-filtering.component.css','./infragistics-filtering.scss']
})
export class InfragisticsFilteringComponent implements OnInit {

  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1!: IgxGridComponent;

  public data!: any[];

  constructor() { }

  public ngOnInit(): void {
    this.data = DATA;
  }

  public filter($event:any) {
    //this.grid1.filter('ProductName', term, IgxStringFilteringOperand.instance().condition('contains'));
    this.grid1.filter('ProductName', $event.target.value, IgxStringFilteringOperand.instance().condition('contains'));
  }

  public formatDate(val: Date) {
    return new Intl.DateTimeFormat('en-US').format(val);
  }

  public formatCurrency(val: string) {
    return parseInt(val, 10).toFixed(2);
  }

}
