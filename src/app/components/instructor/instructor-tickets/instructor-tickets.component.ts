import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-instructor-tickets',
  templateUrl: './instructor-tickets.component.html',
  styleUrls: ['./instructor-tickets.component.scss']
})
export class InstructorTicketsComponent implements OnInit {
  public routes = routes;
  public instructorTickets1: any = [];
  public instructorTickets2: any = [];
  public instructorTickets3: any = [];
  public instructorTickets4: any = [];

  constructor(private DataService: DataService) {
    
  }

  ngOnInit(): void {
    this.tableData1();
    this.tableData2();
    this.tableData3();
    this.tableData4();
  }
  private tableData1(): void {
    this.instructorTickets1= [];
    this.DataService.instructorTicket1().subscribe((res: any) => {
      res.data.map((res: any) => {
        this.instructorTickets1.push(res);
      });

    });
  }
  private tableData2(): void {
    this.instructorTickets2= [];
    this.DataService.instructorTicket2().subscribe((res: any) => {
      res.data.map((res: any) => {
        this.instructorTickets2.push(res);
      });

    });
  }
  private tableData3(): void {
    this.instructorTickets3= [];
    this.DataService.instructorTicket3().subscribe((res: any) => {
      res.data.map((res: any) => {
        this.instructorTickets3.push(res);
      });

    });
  }
  private tableData4(): void {
    this.instructorTickets4= [];
    this.DataService.instructorTicket4().subscribe((res: any) => {
      res.data.map((res: any) => {
        this.instructorTickets4.push(res);
      });

    });
  }
}
