import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'src/app/modelSTG/offre';
import { OffreService } from 'src/app/servicesSTG/offre.service';
import { CommonService } from 'src/app/shared/service/common/common.service';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public routes = routes;
  public cart: any = [];
  offreList:Offre[] = [];
  public isstudentHeader!: boolean;

  constructor(private DataService: DataService ,private  offrsev:OffreService ,private common: CommonService,private router:Router) {
    this.cart = this.DataService.cart;
    this.common.isstudentHeader.subscribe((res: boolean) => {
      this.isstudentHeader = res;
    });
  }


  ngOnInit(): void {
    this.offresList()
  }
  offresList()
  {
    this.offrsev.getList().subscribe(res => {
      this.offreList = res
    } , error => {
        console.error(error)
    } , ()=> {

    })
  }
 recupeidoffr(idoffcom:number)

 {
alert("fffffffff")
  this.offrsev.idoff=idoffcom;
  console.log(idoffcom)
  this.router.navigate(['expert/demande']);

 }
}
