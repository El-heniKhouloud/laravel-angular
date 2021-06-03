import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public add: FormGroup;
  products:any

  constructor(public formBuilder: FormBuilder,
              public productservice: ProductsService,
              private route: Router,
              public http: HttpClient) {
                this.add = formBuilder.group({
                  name:["", Validators.required],
                  details: ["",Validators.required],
                  image:[""],
                  price:[, Validators.required],
                })
              }

  ngOnInit(): void {
    this.productservice.getProducts().subscribe(
      (list)=>{
        this.products=list
        console.log(list)
      }
    )
  }

  onadd(){
    const data = this.add.value
    this.productservice.createProduct(data).subscribe(
      response=>{
        console.log('yes', response)
        this.route.navigateByUrl('/')
      }
    )
  }
  /*imageUpload(event: any){
    this.files = event.target.files[0];
    console.log(this.files);

  }*/
}
