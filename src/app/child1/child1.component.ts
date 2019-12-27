import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.css"]
})
export class Child1Component implements OnInit {
  // Child Data
  public userData: object[] = [];

  @Output() myEvent = new EventEmitter();
  submitForm(form) {
    this.userData.push(form.value);
    this.myEvent.emit(this.userData);
    form.reset();
  }

  constructor() {}

  ngOnInit() {}
}
