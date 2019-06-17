import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/cursos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: []
})


export class TableComponent implements OnInit {
  products = [];
  constructor(public productService: FormService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
  })

}
}

