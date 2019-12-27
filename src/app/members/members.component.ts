import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.css"]
})
export class MembersComponent implements OnInit {
  public membersData: Object[] = [];
  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.membersData = this._dataService.returnMembersData();
  }

  submitForm(ref) {
    this._dataService.addNewAdmin(ref.value);
    ref.reset();
  }
}
