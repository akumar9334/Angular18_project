import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  courseName : string = 'Angular-18';
  myClassName: string = "bg-primary"
  inputTpe = 'radio';
  rollNo: number =123;
  isIndian: boolean = true;
  currentDate: Date = new Date;
  succesmessage: string=  ' ur procedure is sucessfully work';
 Count: number=0;
  countdec: number =10;
  selectStateName : string ='mahrastra';


  constructor(){
   
  }

  showAlert(message: String){
alert(message)
  }
  showAlertsucc(){
    alert(this.succesmessage)
  }
  showAlertwarning(msgwarning: string){
    alert(msgwarning)
  }
  showtoglemesage(togglemsg:string){
    new ToggleEvent(togglemsg)
  }

  incrementcount(){
    this.Count +=1;
  }
  decrementCount(){
   this. countdec -= 1;

  }
  showingpop(msgwarn : string ){
  prompt(msgwarn);
  
    
  }
  changeCourseName(){
    this.courseName = 'react js'
  }
  
}


