import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.scss']
})
export class JobCategoryComponent implements OnInit {
  public routes = routes;
  public jobCategoryGraphics: any = [];
  public jobCategoryprogramming: any = [];
  public jobCategorymarketing: any = [];
  public jobCategoryanimation: any = [];


  constructor(private DataService: DataService) {
    this.jobCategoryGraphics = this.DataService.jobCategoryGraphics;
    this.jobCategoryprogramming = this.DataService.jobCategoryprogramming;
    this.jobCategorymarketing = this.DataService.jobCategorymarketing;
    this.jobCategoryanimation = this.DataService.jobCategoryanimation;

  }

  ngOnInit(): void {
  }

}
