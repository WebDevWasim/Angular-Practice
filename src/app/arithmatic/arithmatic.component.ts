import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-arithmatic",
  templateUrl: "./arithmatic.component.html",
  styleUrls: ["./arithmatic.component.css"]
})
export class ArithmaticComponent implements OnInit {
  result: number;
  getSum(n1, n2) {
    this.result = +n1 + +n2;
  }
  getSub(n1, n2) {
    this.result = +n1 - +n2;
  }
  getMul(n1, n2) {
    this.result = +n1 * +n2;
  }
  getDiv(n1, n2) {
    this.result = +n1 / +n2;
  }

  constructor() {}

  ngOnInit() {}
}
