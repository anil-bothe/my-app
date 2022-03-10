import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { FormsModule } from "@angular/forms";
import EmployeeService from "./services/employee";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
  declarations: [AppComponent, TestComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
