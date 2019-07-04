import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/cursos.service';
import { SelectService } from '../../services/select.service';
import { Product, Servicio, State } from '../../models/products';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';




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

  user: string;

  // cambio de array
  servicio: string;
  ciudad: string ;
  ciudadd: string = 'bogota';
  // OPcion de telefono/correo
  info: false;


  constructor(public productService: FormService, public selectService: SelectService, private auth: AuthService) {
    
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
    })
    this.servicios = this.selectService.getServicios();
    this.onSelect(this.selectedServicio.id);

    this.ciudades = this.selectService.getCiudad();
    this.onSelectCiudad(this.selectedCiudad.id);
    this.product.origen = 'telefono';

    if (this.auth.user == null) {
      this.user = localStorage.getItem('email');
      console.log(this.user, 'del local store');
    } else {
      this.user = this.auth.user;
      console.log(this.user, 'del registro');
    }

    
    
  }

  addProduct(f: NgForm) {
    console.log("NgForm: ", f)
    if (f.invalid) {
      return;
    }

    this.product.fechaReg = moment().format('l');
    this.product.horaReg = moment().format('LTS');

    this.product.usuario = this.user;

    this.product.servicio = this.servicio;
    this.product.ciudad = this.ciudad;

    if (this.product.primerN ) {
      this.product.primerN = this.product.primerN.toUpperCase();
    }

    if (this.product.segundoN) {

      this.product.segundoN = this.product.segundoN.toUpperCase();
    }

    if (this.product.primerA) {
      this.product.primerA = this.product.primerA.toUpperCase();
    } 

    if (this.product.segundoA) {
      this.product.segundoA = this.product.segundoA.toUpperCase();
    }

    this.product.correo = this.product.correo.toLowerCase();
    console.log(this.product.primerA);




    this.productService.addProducts(this.product);
    this.product = {} as Product;
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Producto guardado con exito',
      showConfirmButton: false,
      timer: 1500
    })

    console.log('sale');
    this.product.origen = 'telefono';

  }


  onSelect(servicioid) {

    this.states = this.selectService.getStates().filter((item) => item.servicioid == servicioid);

    this.servicio = this.servicios[servicioid - 1].name;



  }

  onSelectCiudad(servicioid) {

    this.municipios = this.selectService.getMunicipios().filter((item) => item.servicioid == servicioid)

    this.ciudad = this.ciudades[servicioid - 1].name;



    if (servicioid == 3) {

      return this.otra = true;

    } else {
      return this.otra = false;
    }

  }

}
