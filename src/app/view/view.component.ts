import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
   this. showSuccess()
   this.spinner.show();
   
   setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 5000);
}
  

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

 
}




 





