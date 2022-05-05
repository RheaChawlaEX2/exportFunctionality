import { Component, OnInit, ElementRef,ViewChild} from '@angular/core';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf'
// import '../../../assets/js/smtp.js'

declare let Email : any;

@Component({
  selector: 'app-export-content',
  templateUrl: './export-content.component.html',
  styleUrls: ['./export-content.component.css']
})
export class ExportContentComponent implements OnInit {

  @ViewChild('content', {static:true})
  content! : ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  sendEmail(pdf: any){
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'rchawla@ex2india.com',
      Password : '8A91732B8BC8CFD6B951E2CB6122459037A6',
      To : 'rchawl@ex2india.com',
      From : `rchawla@ex2india.com`,
      Subject : 'PDF!',
      Body : 'This is the requested pdf',
      Attachments: [
        {data:'somedata', type:'application/pdf', stream: pdf, name:'newPDF.pdf'}
      ]
      }).then( (error:any) => {console.log(error) } );
        
      }
  

  exportPdf(){

    html2canvas(this.content.nativeElement).then(canvas => {
      var imgWidth = 208; //defining the weight of the content on the webpage
      var imgHeight = canvas.height * imgWidth / canvas.width; //defining the height in accordance with the canvas height and width 
      const contentDataURL = canvas.toDataURL('image/png') //converting the to an image 
      let pdf = new jsPDF('p', 'mm', 'a4');
      var position = 5;
      pdf.addImage(contentDataURL, 'PNG', 5, position, imgWidth, imgHeight) //adding the image to the pdf at 5px away from the top and left of the page
      this.sendEmail(pdf.save('/newPDF.pdf')) //used this to send an email over the elastic email server
    });

   

   
 }
 

}
