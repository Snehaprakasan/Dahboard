import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavWrapperComponent } from './components/sidenav-wrapper/sidenav-wrapper.component';
import { GetstartComponent } from './components/getstart/getstart.component';
import { OverviewComponent } from './components/overview/overview.component';
import { InsightComponent } from './components/insight/insight.component';
import { AdvertiseComponent } from './components/advertise/advertise.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { ToolsComponent } from './components/tools/tools.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [SidenavWrapperComponent, GetstartComponent, OverviewComponent, InsightComponent, AdvertiseComponent, DiscoverComponent, ToolsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTableModule,
    FormsModule,
    MatSelectModule
  ]
})
export class DashboardModule { }
