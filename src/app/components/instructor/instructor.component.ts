import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common/common.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {
  public routes = routes;
  base: string="";
  page: string="";
  last: string = '';
  side_bar_data: Array<any> = [];
  instructor: boolean = true;
  dashboard: boolean = true;
  constructor(private common : CommonService,private Router: Router,private data: DataService,) { 
    this.common.base.subscribe((res:string)=>{
      this.base =res;
    })
    this.common.page.subscribe((res:string)=>{
      this.page =res;
    })
    this.common.last.subscribe((res:string)=>{
      this.last =res;
    })
    Router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.Router);
    this.setcontent()
    this.data.getInstructorSideBarData.subscribe((res: any) => {
      this.side_bar_data = res;
    });
  }

  ngOnInit(): void {
  }
  setcontent(){

  }
  getRoutes(event:any){
    let splitVal = event.url.split('/');
        this.base = splitVal[1];
        this.page = splitVal[2];
        this.last = splitVal[3];
        if (
          event.url === '/instructor/instructor-profile' ||
          event.url === '/instructor/instructor-profile' ||
          event.url === '/instructor/instructor-new-tickets' ||
          event.url === '/instructor/instructor-view/instructor-list' ||
          event.url === '/instructor/instructor-view/instructor-grid' ||
          event.url === '/instructor/instructor-chat' 
          ) {
          this.instructor = false;
        } else {
          this.instructor = true;
        }

  }
}
