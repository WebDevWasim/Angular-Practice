import { HttpService } from "./../http.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-http",
  templateUrl: "./http.component.html",
  styleUrls: ["./http.component.css"]
})
export class HttpComponent implements OnInit {
  public searchItem: any;
  public searchField: any = "employee_name";
  constructor(private hs: HttpService) {}
  public employees: object[];
  ngOnInit() {
    // this.hs.getData().subscribe(data => {
    //   this.employees = data["Employees"];
    // });

    this.hs.getData().subscribe(data => {
      this.employees = data;
    });
  }
}
