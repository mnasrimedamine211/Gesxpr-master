import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/service/data/data.service';
import { routes } from 'src/app/shared/service/routes/routes';
@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.scss']
})
export class Home4Component implements OnInit {
  public routes = routes;
  selected ="1";
  constructor(private DataService: DataService, public router: Router) {

  }
  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }
  slideConfig={
    slidesToShow: 1,
    SlidesToScroll: 1,
    autoplay: false,
    lazyLoad: 'ondemand',
    speed: 3000,
    autoplaySpeed: 1800,
    dots: false,
    nav: true
  }
  public leadingOption: OwlOptions = {
    margin: 24,
    nav : false,
    loop: true,
    dots:false,
    autoplay:false,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 4,
          },
          1170: {
            items: 4,
          },
    }
  };
  public courseOption: OwlOptions = {
    margin: 24,
    nav : false,
    loop: true,
    dots:true,
    autoplay:false,
        responsive: {
          0: {
            items: 1,
            dots:false
          },
          768: {
            items: 3,
          },
          1170: {
            items: 3,
          },
    }
  };
  public blogOption: OwlOptions = {
    margin: 24,
    nav : false,
    loop: true,
    dots:true,
    autoplay:false,
        responsive: {
          0: {
            items: 1,
            dots:false
          },
          768: {
            items: 3,
          },
          1170: {
            items: 3,
          },
    }
  };
  directPath() {
    this.router.navigate(['/pages/course/course-list']);

  }
}
