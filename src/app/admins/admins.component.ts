import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-admins",
  templateUrl: "./admins.component.html",
  styleUrls: ["./admins.component.css"]
})
export class AdminsComponent implements OnInit {
  public adminsData: Object[] = [];
  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.adminsData = this._dataService.returnAdminsData();
  }

  submitForm(ref) {
    console.log(ref);
    this._dataService.addNewMember(ref.value);
    ref.reset();
  }
}
