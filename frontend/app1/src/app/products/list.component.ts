import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { ProductService } from '@app/_services';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  templateUrl: 'list.component.html',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf]
})
export class ListComponent implements OnInit {
    products?: any[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getAll()
            .pipe(first())
            .subscribe(products => this.products = products);
    }
}