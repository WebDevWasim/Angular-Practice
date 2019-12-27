import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-c",
  templateUrl: "./c.component.html",
  styleUrls: ["./c.component.css"]
})
export class CComponent implements OnInit, OnChanges {
  @Input() public data: any;
  public data1: any[] = [];
  public data2: any;

  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    this.data1.push(this.data);
    this.data2 = this.data1[this.data1.length - 2];
  }
}
