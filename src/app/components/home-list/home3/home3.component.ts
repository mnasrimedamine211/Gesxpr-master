import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import SwiperCore, { SwiperOptions,EffectCoverflow,Swiper,Pagination,Navigation,Scrollbar, } from 'swiper';
import { DataService } from 'src/app/shared/service/data/data.service';
import { Router } from '@angular/router';
import { HomeData } from './components/data';
import { routes } from 'src/app/shared/service/routes/routes';
SwiperCore.use([EffectCoverflow,Pagination,Navigation,Scrollbar]);
@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class Home3Component implements OnInit{
  selected = '1';
  public counter: any = [];
  public favourite: any = [];
  public tab1: any = [];
  public tab2: any = [];
  public tab3: any = [];
  public tab4: any = [];
  public tab5: any = [];
  public tab6: any = [];
  public tab7: any = [];
  public trending_course: any = [];
  public swiper: any = [];
  public routes = routes;
  constructor(private DataService: DataService, public router: Router,private data:HomeData) {
    this.counter = this.data.counter;
    this.favourite = this.data.favourite;
    this.tab1 = this.data.tab1;
    this.tab2 = this.data.tab2;
    this.tab3 = this.data.tab3;
    this.tab4 = this.data.tab4;
    this.tab5 = this.data.tab5;
    this.tab6 = this.data.tab6;
    this.tab7 = this.data.tab7;
    this.trending_course = this.data.trending_course;
    this.swiper = this.data.swiper;
  }
  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }
  config: SwiperOptions = {
    effect: "coverflow",
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 2,
    // spaceBetween: 100,
    speed:400,
    navigation: {
      prevEl: '.slide-prev-btn',
      nextEl: '.slide-next-btn',
    },
    pagination: { 
      clickable: true ,
      el: ".swiper-pagination",
    },
    // scrollbar: { draggable: true },
    coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 100,
			modifier: 10,
			slideShadows: true
			},
      
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
            items: 4,
          },
          1170: {
            items: 5,
          },
    }
  };
  public trendingOption: OwlOptions = {
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
            items: 4,
          },
          1170: {
            items: 4,
          },
    }
  };
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
            items: 6,
          },
    }
  };
  directPath() {
    this.router.navigate(['/pages/course/course-list']);

  }
}
