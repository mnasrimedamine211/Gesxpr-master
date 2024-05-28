import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public routes = routes;
  public wishlist: any = [];

  constructor(private DataService: DataService) {
    this.wishlist = this.DataService.wishlist;
  }

  ngOnInit(): void {
  }

}
