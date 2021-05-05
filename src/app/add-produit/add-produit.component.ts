import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service/service.service';
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
    type: ['',],
   
  });

  constructor(private fb: FormBuilder,public sv:ServiceService,private toastr: ToastrService) {
    

   }

  ngOnInit(): void {
   
    
      
  }
  onSubmit(){
<<<<<<< HEAD
    console.log(this.addProduit.value);
=======
>>>>>>> b70b45c... admin+ modal produit
    const data=this.addProduit.value;
    this.sv.createProduit(data).subscribe((r)=>{
      console.log(r);
      this.toastr.success('Produit est créer!', 'Toastr fun!');
          })
  
    


  }

}
