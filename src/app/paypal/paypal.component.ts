import { Component, Input, OnInit } from '@angular/core';
import { ICreateOrderRequest } from 'ngx-paypal';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Entrada } from '../clases/entrada';
import { GestionCineService } from '../services/gestionCine.service';
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {
  @Input()  pelicula!: String;
  @Input() butaca!:Number ;
  @Input() hora!:String ;
  @Input() dia!:Date ;
  @Input() sesion!:String;


  public payPalConfig: any;
  public showPaypalButtons: boolean | undefined;
  comprado:boolean=false;
  route: any;
 
  ngOnInit() {
    this.payPalConfig = {
      currency: "EUR",
      clientId: "AYvU7p49APJ3TWCP7EPq6Z1Sm7LijDirPdDI-G6DjNasJ2tyIVCwb0IZL1v5cKy_tw7qPr_2ybS62gCR",
      createOrder: () =>
        <ICreateOrderRequest>{
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "EUR",
                value: "9.99",
                breakdown: {
                  item_total: {
                    currency_code: "EUR",
                    value: "9.99"
                  }
                }
              },
              items: [
                {
                  name: "Enterprise Subscription",
                  quantity: "1",
                  category: "DIGITAL_GOODS",
                  unit_amount: {
                    currency_code: "EUR",
                    value: "9.99"
                  }
                }
              ]
            }
          ]
        },
      advanced: {
        commit: "true"
      },
      style: {
        label: "paypal",
        layout: "vertical"
      },
      onApprove: (data: any, actions: { order: { get: () => Promise<any>; }; }) => {
        console.log(
          "onApprove - transaction was approved, but not authorized",
          data,
          actions
        );
        actions.order.get().then(details => {
          console.log(
            "onApprove - you can get full order details inside onApprove: ",
            details
          );
        });
      },
      onClientAuthorization: (data: any) => {
        this.compradoFun();
      },
      onCancel: (data: any, actions: any) => {
        console.log("OnCancel", data, actions);
      },
      onError: (err: any) => {
        console.log("OnError", err);
      },
      onClick: (data: any, actions: any) => {
        console.log("onClick", data, actions);
      }
    };
  }
 
  pay() {
    this.showPaypalButtons = true;
  }
 
  back(){
    this.showPaypalButtons = false;
  }
  
  idEntrada:Number=0; 

  async compradoFun(){
    this.comprado=true;

    //insertar

    const entrada:Entrada = {
      "id":1,
      "sesion_id": this.sesion,
      "butaca_id": this.butaca,
      "usuario_id": 1,
      "precio": 9.99
    };
    const resultado=await this.cineServicio.insertarEntrada(entrada,1,this.sesion,this.butaca);
    this.idEntrada=resultado.id;
  }
  constructor(public cineServicio: GestionCineService) {}

  public descargarPDF(): void {
    const pdf = new jsPDF();
    
    pdf.setFont("helvetica","bold");
    pdf.setFontSize(90);
    var imgData = '../assets/img/logo.png';
    console.log(imgData);
    pdf.setFontSize(40);
    pdf.addImage(imgData, 'PNG', 0, 0, 40, 40);
    pdf.output('datauri');
    pdf.text('Cinetix',40,26);
    pdf.line(0,40,600,40);

    const texto1:string=this.pelicula.toString();
    const texto2:string=this.butaca.toString();
    const texto3:string=this.sesion.toString();
    const texto4:string=this.hora.toString();
    const texto5:string=this.dia.toString();

    pdf.setFontSize(20);
    pdf.text("Película:",20,60);
    pdf.text(texto1,60,60);

    pdf.text("Sala:",20,80);
    pdf.text("02",60,80);

    pdf.text("Butaca:",20,100);
    pdf.text(texto2,60,100);

    pdf.text("Sesión:",20,120);
    pdf.text(texto3,60,120);

    pdf.text("Hora:",20,140);
    pdf.text(texto4,60,140);

    pdf.text("Día:",20,160);
    pdf.text(texto5,60,160);

    pdf.text("Precio:",20,180);
    pdf.text("9.99 €",60,180);
    
    

    pdf.save('entrada.pdf');
  }

  async cancelarEntrada(){
    
    await this.cineServicio.borrarEntrada(this.idEntrada);
    alert("Entrada borrada con éxito");
    window.location.reload();
  }


  

  opcionSeleccionado: Number= 0
  precio:Number=9;
  capturar(){
    this.precio=this.opcionSeleccionado;
    console.log(this.precio);
  }

  async editarPrecio(){
    const resultado=await this.cineServicio.editarEntrada(this.precio,this.idEntrada);
    alert("Precio editado con éxito");
  }

}
