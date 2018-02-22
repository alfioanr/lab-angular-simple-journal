import { Component, OnInit } from "@angular/core";
import { recoverEntries } from "../../service/service.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-single-entry",
  templateUrl: "./single-entry.component.html",
  styleUrls: ["./single-entry.component.css"]
})
export class SingleEntryComponent implements OnInit {
  journalList: Array<any>;
  objeto: any;

  constructor(
    private rE: recoverEntries,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.getSingleJournal1(params["id"])
    })
  }
  getSingleJournal1(id){
    this.rE.getSingleJournal(id).subscribe(objeto =>{
      this.objeto=objeto
    });
  }
}
