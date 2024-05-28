import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import { Demande } from 'src/app/modelSTG/demande';
import { Offre } from 'src/app/modelSTG/offre';
import { DemandeService } from 'src/app/servicesSTG/demande.service';
import { OffreService } from 'src/app/servicesSTG/offre.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.scss']
})
export class DemandeComponent {
  registerdemandes: Demande = new Demande();
  idoff!:number
  errorMsg:string=""
  //public routes = this.routes;
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
  constructor( private servdem:DemandeService,private servoff:OffreService){
   
  }
  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  ngOnInit(): void {
    this.editor = new Editor();
    const IDD=localStorage.getItem("userId");
    console.log("ggggggg",IDD);
  }

  registerdemande(){
    const IDD=localStorage.getItem("userId");
    this.registerdemandes.idstagiaire=Number(IDD)
    this.registerdemandes.idoffre=this.servoff.idoff
    console.log("TTTTTTTT", this.registerdemandes)
    this.servdem.addDemande(this.registerdemandes)
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
