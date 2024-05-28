import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common/common.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { SidebarService } from 'src/app/shared/service/sidebar/sidebar.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent implements OnInit {
  base: string = '';
  page: string = '';
  last: string = '';
  public routes = routes;
  sidebar: Array<any> = [];

  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebarService: SidebarService
  ) {
    // this.Router.events.subscribe((data: any) => {
    //   if (data instanceof NavigationStart) {
    //     this.hideSidebar();
    //     this.base = data.url.split('/')[1];
    //     this.page = data.url.split('/')[2];
    //     this.last = data.url.split('/')[3];
    //   }
    // });
    this.common.base.subscribe((res: any) => {
      this.base = res;
    });
    this.common.page.subscribe((res: any) => {
      this.page = res;
    });
    this.common.last.subscribe((res: any) => {
      this.last = res;
    });
    this.sidebar = this.data.sideBar;
  }

  ngOnInit(): void {}
  public toggleSidebar(): void {
    this.sidebarService.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebarService.closeSidebar();
  }
}
