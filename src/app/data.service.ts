import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}
  // Admins Data
  private admins: object[] = [
    { name: "Wasim", age: 21 },
    { name: "Anupam", age: 22 },
    { name: "Samir", age: 23 }
  ];

  // Members Data
  private members: object[] = [
    { name: "Shan", age: 43 },
    { name: "Akash", age: 42 },
    { name: "Khan", age: 53 }
  ];

  // Returning Admins Details
  public returnAdminsData() {
    return this.admins;
  }

  // Returning Members Details
  public returnMembersData() {
    return this.members;
  }

  // Add new Admin Data
  public addNewAdmin(admin: object) {
    this.admins.push(admin);
  }

  // Add new Mimber Data
  public addNewMember(member: object) {
    this.members.push(member);
  }
}
