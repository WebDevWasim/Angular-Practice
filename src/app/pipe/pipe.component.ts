import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipe",
  templateUrl: "./pipe.component.html",
  styleUrls: ["./pipe.component.css"]
})
export class PipeComponent implements OnInit {
  // public num: number = 121;
  // public arr: number[] = [1, 2, 3, 4, 5];

  public searchItem: any;
  public searchField: any = "first_name";

  public members: object[] = [
    {
      id: 1,
      first_name: "Sebastian",
      last_name: "Eschweiler",
      email: "sebastian@codingthesmartway.com"
    },
    {
      id: 2,
      first_name: "Steve",
      last_name: "Palmer",
      email: "steve@codingthesmartway.com"
    },
    {
      id: 3,
      first_name: "Ann",
      last_name: "Smith",
      email: "ann@codingthesmartway.com"
    },
    {
      id: 4,
      first_name: "Bjnn",
      last_name: "Sewmith",
      email: "bjnn@codingthesmartway.com"
    },
    {
      id: 5,
      first_name: "Mjnn",
      last_name: "Qbmith",
      email: "mjnn@codingthesmartway.com"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
