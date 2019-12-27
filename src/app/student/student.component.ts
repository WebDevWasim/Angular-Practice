import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent implements OnInit {
  studentData: object[] = [];

  studentFormSubmit(data) {
    let obj = data.value;
    obj.percentage = (obj.hindi + obj.science + obj.english + obj.math) / 4;
    this.studentData.push(obj);
    data.reset();
  }
  constructor() {}

  ngOnInit() {}
}
