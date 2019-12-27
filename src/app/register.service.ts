import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor() {}

  // Resister Data
  private resisters: object[] = [];
  private resistersView2: object[] = [];
  private isRegistered: boolean = false;
  private isNotRegistered: boolean = false;
  private registerAdded: boolean = false;
  private registerExist: boolean = false;

  // Add new Resister Data
  public addNewResister(reg) {
    if (!this.resisters.includes(reg)) {
      this.isNotRegistered = true;
      this.isRegistered = false;
      this.resisters.push(reg);
    } else {
      this.isRegistered = true;
      this.isNotRegistered = false;
    }
  }

  // Returning Resisters Details
  public returnResistersData() {
    return this.resisters;
  }

  // Add Confirm Resisters Details
  public addResistersView2Data(reg2: object) {
    if (!this.resistersView2.includes(reg2)) {
      this.registerAdded = true;
      this.registerExist = false;
      this.resistersView2.push(reg2);
    } else {
      this.registerExist = true;
      this.registerAdded = false;
    }
  }

  // Returning Confirm Resisters Details
  public returnResistersView2Data() {
    return this.resistersView2;
  }

  // is Resister
  public resister() {
    return this.isRegistered;
  }

  // is Not Resister
  public notResister() {
    return this.isNotRegistered;
  }

  // Returning Added Status
  public added() {
    return this.registerAdded;
  }

  // Returning Confirm Resisters Details
  public exist() {
    return this.registerExist;
  }
}
