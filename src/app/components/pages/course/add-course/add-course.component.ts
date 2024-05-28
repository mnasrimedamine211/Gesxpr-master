import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { toHTML } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/service/routes/routes';
import { Offre } from 'src/app/modelSTG/offre';
import { OffreService } from 'src/app/servicesSTG/offre.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddCourseComponent implements OnInit, OnDestroy {
  registerOffer: Offre = new Offre();
  errorMsg:string=""
  public routes = routes;
  selected="1";
  selected2="1";
  public activeIndex:number=0
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  constructor( private servoffre:OffreService){
   
  }
  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  ngOnInit(): void {
    this.editor = new Editor();
    const IDD=localStorage.getItem("userId");
    console.log("ggggggg",IDD);
  }

  registeroffre(){
    const IDD=localStorage.getItem("userId");
    this.registerOffer.idEncadrant=Number(IDD)
    console.log("TTTTTTTT", this.registerOffer)
    this.servoffre.addoffre(this.registerOffer)
    .subscribe(result=>{
     // this.router.navigate(["home/"])
   
      
      console.log(result)
    
    },
    (err:HttpErrorResponse)=>this.errorMsg='not saved')
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  public onSubmit(index:number){
    this.activeIndex = index
  }

  public onBack(index:number){
    this.activeIndex = index

  }

  }
