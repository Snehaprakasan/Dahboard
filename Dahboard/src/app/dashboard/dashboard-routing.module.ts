import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetstartComponent } from './components/getstart/getstart.component';
import { OverviewComponent } from './components/overview/overview.component';
import { InsightComponent } from './components/insight/insight.component';
import { AdvertiseComponent } from './components/advertise/advertise.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { ToolsComponent } from './components/tools/tools.component';
import { SidenavWrapperComponent } from './components/sidenav-wrapper/sidenav-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavWrapperComponent,
    children: [
      {
        path: 'start',
        component: GetstartComponent
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'insight',
        component: InsightComponent

      },
      {
        path: 'advertise',
        component:  AdvertiseComponent 

      },
      {
        path: 'discover',
        component: DiscoverComponent
      },
      {
        path: 'tool',
        component: ToolsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
