import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-color",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.css"]
})
export class ColorComponent implements OnInit {
  inputData: string;
  colorsArr: string[] = [];
  showPara: boolean = false;

  addColors(color: string) {
    this.colorsArr.push(color);
    this.inputData = "";
    this.showPara = true;
  }

  constructor() {}

  ngOnInit() {}
}
