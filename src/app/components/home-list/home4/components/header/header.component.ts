import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common/common.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { SidebarService } from 'src/app/shared/service/sidebar/sidebar.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public routes = routes;
  @ViewChild('stickyMenu')
  menuElement!: ElementRef;
  headerpage: boolean = false;
  sticky: boolean = false;
  elementPosition: any;
  public headerClass: any = true;
  base: string = '';
  page: string = '';
  last: string = '';
  headerMenuactive = '';

  public white_bg: boolean = false;

  sidebar: Array<any> = [];
  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebarService: SidebarService
  ) {
    // this.Router.events.subscribe((data: any) => {
    //   if (data instanceof NavigationStart) {
    //     // to hide sidebar while route changes
    //     this.base = data.url.split('/')[1];
    //     this.page = data.url.split('/')[2];
    //     this.last = data.url.split('/')[3];
    //     this.hideSidebar();
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

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
    if (windowScroll == 0) {
      this.white_bg = false;
    } else {
      this.white_bg = true;
    }
  }

  ngOnInit(): void {}

  public toggleSidebar(): void {
    this.sidebarService.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebarService.closeSidebar();
  }

  ngAfterViewInit() {
    // this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }
}
