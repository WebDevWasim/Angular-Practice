import { Component, OnInit } from "@angular/core";
import { RegisterService } from "../register.service";

@Component({
  selector: "app-exam-v2",
  templateUrl: "./exam-v2.component.html",
  styleUrls: ["./exam-v2.component.css"]
})
export class ExamV2Component implements OnInit {
  public resistersData: Object[] = [];

  constructor(private rService: RegisterService) {}

  ngOnInit() {
    this.resistersData = this.rService.returnResistersView2Data();
  }
}
