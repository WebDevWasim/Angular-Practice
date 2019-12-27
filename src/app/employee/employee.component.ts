import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  employeesData: object[] = [];
  showTable: boolean = false;

  submitForm(myForm) {
    this.employeesData.push(myForm.value);
    this.showTable = true;
    myForm.reset();
  }

  constructor() {}

  ngOnInit() {}
}
