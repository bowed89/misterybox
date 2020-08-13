import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

import swal from 'sweetalert2'; 

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientenombre: string;
  clienteCarnet: number;
  clienteTelefono: number;
  clienteCorreo: string;
  clienteFactura: number;
  clienteMonto: number;
  clienteCiudad: string;
  //clientePremio: number;


  constructor(
    
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  crearCliente() {


    if(this.clienteMonto >= 450) {

      let guardar = {};

      const dateNow = Date.now()
      
      guardar['nombre'] = this.clientenombre;
      guardar['carnet'] = this.clienteCarnet;
      guardar['telefono'] = this.clienteTelefono;
      guardar['correo'] = this.clienteCorreo;
  
      guardar['factura'] = this.clienteFactura;
      guardar['monto'] = this.clienteMonto;
      guardar['ciudad'] = this.clienteCiudad;
      guardar['fecha'] = dateNow;

      localStorage.setItem('cliente', JSON.stringify(guardar));

      swal.fire({
        icon: 'success',
        title: 'Registro',
        text: 'Registro de compra con éxito!',
      });

      this.router.navigate(['/premio']);

    } else {

      swal.fire({
        icon: 'error',
        title: 'Monto de compra',
        text: 'El monto de compra debe ser igual o mayor a 450 Bs.',
      });

    }



  }

}
