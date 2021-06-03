import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  public edit: FormGroup;
  data : any
  id: any
  constructor(
    public formBuilder: FormBuilder,
    public productservice: ProductsService,
    private route: Router,
    public router: ActivatedRoute
  ){
      this.edit = formBuilder.group({
        name:["", Validators.required],
        details: ["",Validators.required],
        image:["", Validators.required],
        price:[, Validators.required],
      })
    }

  ngOnInit(): void {
    this.id = this.router.snapshot.params["id"];
    this.productservice.getProduct(this.id).subscribe(response => {
      this.data = response;
      console.log('data',this.data);
      this.edit.patchValue(this.data);
    })
  }

  update(){
    const st = this.edit.value;
    this.productservice.updateProduct(this.id, st).subscribe(
      response => {
        this.edit.reset();
        console.log(response)
        this.route.navigateByUrl('/')
      }
    )
  }
}
