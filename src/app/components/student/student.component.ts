import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common/common.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public routes = routes;

  base: string="";
  page: string="";
  last: string = '';
  side_bar_data: Array<any> = [];
  student: boolean = true;
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
    this.data.getStudentSideBarData.subscribe((res: any) => {
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
          event.url === '/expert/deposit-expert-dashboard' ||
          event.url === '/expert/expert-profile' ||
          event.url === '/expert/view-invoice' ||
          event.url === '/expert/expert-view/experts-grid' ||
          event.url === '/expert/expert-view/experts-list' ||
          event.url === '/instructor/instructor-new-tickets' ||
          event.url === '/instructor/instructor-view/instructor-list' ||
          event.url === '/instructor/instructor-view/instructor-grid' ||
          event.url === '/instructor/instructor-chat'
           ) {
          this.student = false;
        } else {
          this.student = true;
        }

  }

}
