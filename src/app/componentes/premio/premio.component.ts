import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';

import swal from 'sweetalert2'; 

@Component({
  selector: 'app-premio',
  templateUrl: './premio.component.html',
  styleUrls: ['./premio.component.css']
})
export class PremioComponent implements OnInit {

  public premio: string;

  constructor(
    private _clientesService: ClientesService,
  ) { }

  ngOnInit(): void {

    /* Premios aleatorios */
    const premios = ['Llavero', 'Boligrafo', 'Gafas', 'Billetera', 'Mochila'];
    const random = Math.floor(Math.random() * premios.length);

    /* LocalStorage */
    let datos: any; 
    datos =  JSON.parse(localStorage.getItem('cliente'));

   
    let guardar = {};

    /* Fecha */
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    var date = dd + '/' + mm + '/' + yyyy;
    
    guardar['nombre'] = datos.nombre;
    guardar['apellido'] = datos.apellido;
    guardar['carnet'] = datos.carnet;
    guardar['telefono'] = datos.telefono;
    guardar['correo'] = datos.correo;
    guardar['factura'] = datos.factura;
    guardar['monto'] = datos.monto;
    guardar['ciudad'] = datos.ciudad;
    guardar['premio'] = premios[random];
    guardar['fecha'] = date;

    this._clientesService.crearCliente(guardar).then( resp => {


      swal.fire({
        title: '¡Felicidades!',
        width: 600,
        padding: '3em',
        background: '#fff url(assets/imagen/logo2.jpg)',
        backdrop: `
          rgba(0,0,123,0.4)
         
          no-repeat
        `
      })

      this.premio = premios[random];
      console.log(resp)

    }).catch(error => {
      console.log(error)
    }); 





  }

}
