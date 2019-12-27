import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  // parent Data
  public userData: object[] = [];
  submitForm(form) {
    this.userData.push(form.value);
    form.reset();
  }

  constructor() {}

  ngOnInit() {}
}
