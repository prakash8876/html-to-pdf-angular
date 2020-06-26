import { Component } from '@angular/core';
import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularbase';

  downloadPdf() {
    var element = document.getElementById("dataToPdf")
    html2canvas(element).then((canvas)=>{
      console.log(canvas)
      var imageData = canvas.toDataURL('image/png')
      var doc = new jspdf()
      var imageHeight = canvas.height * 208 / canvas.width
      doc.addImage(imageData, 10, 10, 208, imageHeight)
      doc.save("File.pdf")
    })
  }

}
