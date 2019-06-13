import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/cursos.service';
import { SelectService } from '../../services/select.service';
import { Product, Servicio, State } from '../../models/products';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';




@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
})


export class CursosComponent implements OnInit {

  mostrar = false;
  otra = false;

  product = {} as Product;
  validacion = false;


  //  Seleccion de servicios***** */
  selectedServicio: Servicio = new Servicio(1, '');
  servicios: Servicio[];
  states: State[];

  // Seleccio de ciudad/municipio****
  selectedCiudad: Servicio = new Servicio(1, '');
  ciudades: Servicio[];
  municipios: State[];

  //usuarrio login
  fechaReg: string;
  horaReg: string;
  usuario: string;



  constructor(public productService: FormService, public selectService: SelectService,
    private router:Router) {

  }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
    })
    this.servicios = this.selectService.getServicios();
    this.onSelect(this.selectedServicio.id);

    this.ciudades = this.selectService.getCiudad();
    this.onSelectCiudad(this.selectedCiudad.id);




  }

  addProduct(form: NgForm) {
    if (form.invalid) {
      return;
    }


    this.product.fechaReg = moment().subtract(10, 'days').calendar();
    this.product.horaReg = moment().format('LTS');
    this.product.usuario = localStorage.getItem('email');
    console.log(this.product);

    this.productService.addProducts(this.product);
    this.product = {} as Product;
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Producto guardado con exito',
      showConfirmButton: false,
      timer: 1500
    })
    location.reload();
    //this.router.navigateByUrl('/cursos');

  }


  onSelect(servicioid) {

    this.states = this.selectService.getStates().filter((item) => item.servicioid == servicioid);
  }

  onSelectCiudad(servicioid) {
    console.log('Ciudad Ok');
    
    this.municipios = this.selectService.getMunicipios().filter((item) => item.servicioid == servicioid)
    if (servicioid == 3) {
      return this.otra = true;
    } else {
      return this.otra = false;
    }

  }



}
