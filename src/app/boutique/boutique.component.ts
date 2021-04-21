import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  produitSelected="" ; 
  CategorySelected="";
  produit ;
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

  constructor(public crudApi: ServiceService) { }

  ngOnInit() {
    this.crudApi.getAll().subscribe(
      res=>{console.log(res)}
    )
    this.getData();
  }
  onSelectCategory(event){
    this.CategorySelected=event.target.value;

  }
  onSelectProduit(event){
    console.log(event.target.value);
    this.produitSelected=event.target.value;
  }
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.listData = response;}
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
    console.log(produit)

    container.appendChild(button);
    button.click(); }

}
