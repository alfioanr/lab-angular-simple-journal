import { Component, OnInit } from '@angular/core';
import { recoverEntries } from "../../service/service.service";

@Component({
  selector: "app-entry-list",
  templateUrl: "./entry-list.component.html",
  styleUrls: ["./entry-list.component.css"]
})
export class EntryListComponent implements OnInit {
  journalList: Array<any>;
  constructor(public rE: recoverEntries) {
    this.rE.getJournal().subscribe(list => (this.journalList = list));
  }
  ngOnInit() {}
}



