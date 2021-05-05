import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import { ServiceService } from '../service/service.service';
import {Router} from '@angular/router' ; 
import { FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
>>>>>>> b70b45c... admin+ modal produit
@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit() {
  }
=======
  loggedUser ; 
  addProduit = this.fb.group({
    nom: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    category: ['',],
    produit: [''],
    type: ['',],
   
  });
  image;
  produitSelected="" ; 
  CategorySelected="";
  listData=[] ; 
  listDataFilter=[] ; 
  produit= null ;
  produits  = ['Chaussures' ,'Sacs', "Accessoires"] ;
  femmeChaussures=['Bottes',"Bottines","Escarpins","Compensées","Sandales","Baskets",
    "Espadrilles","Slip-on", "Ballerines","Mules","Derbies"]
  femmeSacs=["Sac à main","Sac à bandoulière","Pochette","Sac à dos","Couffin","Portefeuille","Porte-monnaie",
    "Cartable"];
  femmeAccessoires=["Lunettes","Ceinture","Accessoires pour Cheveux","Collant",
      "Chaussettes","Chapeau","Bonnet","Echarpe","Foulard"];
  fillesChaussures=["Chaussures bébés filles","Ballerines","Baskets","Bottes","Chaussons",
      "Sandales"];
  fillesSacs=["Sacs bébés filles","Sacs à dos","Sacs à main","Cartables","Etuis à crayons"];
  fillesAccessoires=["Accessoires de cheveux","Bijoux","Chapeaux","Ceintures","Collants","Echarpes",
      "Lunettes",];
  garconsChaussures=["Chaussures bébés garçons","Baskets","Bottes","Chaussons","Mocassins","Sandales"];
  garconsSacs=["Sacs bébés garçons"," Sacs à dos"," Sacs de sport"," Cartables","Etuis à crayons"];
  garconsAccessoires=["Ceintures","Chapeaux","Cravates","Echarpes","Noeuds papillon","Lunettes"];

  constructor(public crudApi: ServiceService,public authApi:AuthService ,private router: Router,private fb: FormBuilder,public sv:ServiceService ) { }

  ngOnInit() {
    this.loggedUser=this.authApi.getLoggedUser();
   
    if(this.router.url!=='/boutique'){
        this.getfromlocal();
        
    }
    else{
    this.getData();
  }
  }
  onSelectCategory(event){
    this.CategorySelected=event.target.value;
    this.listDataFilter=this.listData.filter(res=>res.category==event.target.value);

  }
  onSelectProduit(event){
    this.produitSelected=event.target.value;
    this.listDataFilter=this.listData.filter(res=>res.produit==event.target.value);
  }
  getfromlocal(){
   this.listData=JSON.parse(localStorage.getItem('produits'));
   this.listDataFilter=this.listData;
  }
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.listData = response;
        this.listDataFilter=this.listData;
      }
     );
   
  }
  onOpenModal(produit ) {
    this.produit=produit ;
    const container=document.getElementById('main-container');
    const button = document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    button.setAttribute('data-target','#exampleModal');
    console.log(produit);
    this.crudApi.getImages(produit.id).subscribe(
      response =>{this.image=response;
      }
     );
    

    container.appendChild(button);
    button.click(); }

    addPanier(produit){
      const data=JSON.parse(localStorage.getItem('produits'));
      if(data==null){
        const tabdata = [produit];
        localStorage.setItem('produits',JSON.stringify(tabdata));
      }else{
      data.push(produit);
      localStorage.setItem('produits',JSON.stringify(data));
    }
    this.router.navigate(['boutique/panier'])
    }
    updateUrl($event){
     
    }
>>>>>>> b70b45c... admin+ modal produit

}
