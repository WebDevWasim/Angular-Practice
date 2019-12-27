import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-p",
  templateUrl: "./p.component.html",
  styleUrls: ["./p.component.css"]
})
export class PComponent implements OnInit {
  public num: number;
  constructor() {}

  ngOnInit() {}

  sendData(ref) {
    this.num = ref.value;
    ref.value = "";
  }
}
