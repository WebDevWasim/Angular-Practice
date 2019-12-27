import { Component, OnInit } from "@angular/core";
import { RegisterService } from "../register.service";

@Component({
  selector: "app-exam-v1",
  templateUrl: "./exam-v1.component.html",
  styleUrls: ["./exam-v1.component.css"]
})
export class ExamV1Component implements OnInit {
  public resistersData: Object[] = [];
  public isAdded: boolean;
  public isExist: boolean;

  constructor(private rService: RegisterService) {}

  ngOnInit() {
    this.resistersData = this.rService.returnResistersData();
    console.log(this.resistersData);
  }

  sendToView(reg) {
    console.log(reg);
    this.rService.addResistersView2Data(reg);
    this.isAdded = this.rService.added();
    this.isExist = this.rService.exist();
  }
}
