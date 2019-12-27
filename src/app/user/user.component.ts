import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  userData: object[] = [];

  submitForm(ref, user: any) {
    this.userData.push(user);
    ref.reset();
  }

  constructor() {}

  ngOnInit() {}
}
