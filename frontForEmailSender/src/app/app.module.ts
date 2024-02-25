import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
      AppComponent,
      // BlockViewComponent,
      // BlockchainViewerComponent,
      // ... other components, directives, and pipes
    ],
    imports: [
       BrowserModule,
       AppRoutingModule
      // CommonModule,
      // FormsModule
      // ... other imported modules
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
  })
  export class AppModule { }