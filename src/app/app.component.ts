import { Component } from '@angular/core';
import { Student } from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  num : number = 100;

  price : number = 50.26;

  name : string = "Sandesh";

  isPresent : boolean = true

  greet : string = 'bad luck'

  data : any = 2548556

  data1 = true

//student object creation

stu : Student = {
  rollno: 101,
  name: 'Sandesh',
  address: 'Pune',
  mobile: 785242963,
  isPresent : true
}

Days : String[] =['Sun','Mon','Tue',"Wed",'Thr',"Fri","Sat"];
stulist :Student[] =[this.stu];

constructor()
{
  this.greetwish();
  this.getName();
  console.log("end");
}
greetwish(){
  console.log("greet wish called ...........")
}
getName() : string {
console.log("getname called");
return "CJC Akurdi";

}
}
