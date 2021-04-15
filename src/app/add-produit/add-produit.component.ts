import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  addProduit = this.fb.group({
    nom: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    category: ['',],
    couleur: ['',],
    pointure: ['',],
   
  });

  constructor(private fb: FormBuilder) {
    

   }

  ngOnInit(): void {
   
    
      
  }
  onSubmit(){
    console.log(this.addProduit.value);
    
    const data=this.addProduit.value;
    

    
  }

}
