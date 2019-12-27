import { RegisterService } from "./../register.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exam",
  templateUrl: "./exam.component.html",
  styleUrls: ["./exam.component.css"]
})
export class ExamComponent implements OnInit {
  constructor(private rService: RegisterService) {}
  public isRegistered: boolean;
  public isNotRegistered: boolean;
  ngOnInit() {}

  submitForm(ref) {
    console.log(ref.value);
    this.rService.addNewResister(ref.value);
    this.isRegistered = this.rService.resister();
    this.isNotRegistered = this.rService.notResister();
    ref.reset();
  }
}
