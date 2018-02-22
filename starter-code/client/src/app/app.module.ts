import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { AppComponent } from "./app.component";
import { EntryListComponent } from "./entry-list/entry-list.component";
import { SingleEntryComponent } from "./single-entry/single-entry.component";
import { recoverEntries } from "../service/service.service";

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent, 
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [recoverEntries],
  bootstrap: [AppComponent]
})
export class AppModule {}
