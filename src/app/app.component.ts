import { Component, ElementRef, ViewChild } from '@angular/core';







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exportFunctionality';

  @ViewChild('content', {static:true})
  content! : ElementRef;

  constructor( ){}

  


// generatePDF() {

//   html2canvas(this.content.nativeElement).then(canvas => {  
//     // Few necessary setting options  
//     let imgWidth = 300;   
//     let pageHeight = 500;    
//     let imgHeight = canvas.height * imgWidth / canvas.width;  
//     let heightLeft = imgHeight;  

//     const contentDataURL = canvas.toDataURL('image/png')  
//     let pdf = new jsPDF('p', 'pt', 'a4'); // A4 size page of PDF  
//     let position = 10;  
//     pdf.addImage(contentDataURL, 'PNG', 10, position, imgWidth, imgHeight)  
//     pdf.save('MYPdf.pdf'); // Generated PDF

    
    
//     document.location = 'mailto: rchawla@ex2india.com'   ;
//   });  
  
//   // html2canvas(this.content.nativeElement).then(canvas => {
//   //   var imgWidth = 300;
//   //   var imgHeight = canvas.height * imgWidth / canvas.width;
//   //   const contentDataURL = canvas.toDataURL('image/png')
//   //   let pdf = new jsPDF('p', 'mm', 'a4');
//   //   var position = 10;
//   //   pdf.addImage(contentDataURL, 'PNG', 10, position, imgWidth, imgHeight)
//   //   pdf.save('newPDF.pdf');
//   // });
// }

// //  sendEmail() {
// //   Email.send({
// //     Host: "smtp.gmail.com",
// //     Username : "<sender’s email address>",
// //     Password : "<email password>",
// //     To : '<recipient’s email address>',
// //     From : "<sender’s email address>",
// //     Subject : "<email subject>",
// //     Body : "<email body>",
// //   })
// //   .then(function(message: string){
// //     alert("mail sent successfully")
// //   });
// // }

}