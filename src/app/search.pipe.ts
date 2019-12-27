import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(members: object[], searchField: string, searchItem: any): any {
    if (searchItem == undefined) {
      return members;
    } else {
      return members.filter(memberObj =>
        memberObj[searchField]
          .toString()
          .toLowerCase()
          .includes(searchItem.toLowerCase())
      );
    }
  }
}
