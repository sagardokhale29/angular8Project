import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { User} from '../user.module';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.component.html',
  styleUrls: ['./dialog-elements-example-dialog.component.css']
})

export class DialogElementsExampleDialog implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('bdateInput') bdateInputRef: ElementRef;
  @ViewChild('addressInput') addressInputRef: ElementRef;
  @ViewChild('genderInput') genderInputRef: ElementRef;
  @ViewChild('collegeName') collegeNameRef: ElementRef;
  @ViewChild('hobbiesInput') hobbiesInputRef: ElementRef;
  constructor( private userService: UserService) { }
  collegeList: any = [];

  ngOnInit(): void {
    this.userService.getColleges().subscribe((data: {}) => {
      this.collegeList = data;
    });
  }
  onAddUser(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingBdate = this.bdateInputRef.nativeElement.value;
    const ingAddress = this.addressInputRef.nativeElement.value;
    const ingGender = this.genderInputRef.nativeElement.value;
    const ingCollege = this.collegeNameRef.nativeElement.value;
    const ingHobbies = this.hobbiesInputRef.nativeElement.value;
    const newUser = new User(ingName, ingBdate, ingAddress, ingGender, ingCollege, ingHobbies);
    this.userService.addUsers(newUser);
  }
  // onGetCollege(){
  //   this.userService.getColleges().subscribe((data: {}) => {
  //     this.collegeList = data;
  //     this.collegeList.forEach(element => {
  //          this.collegeName.push(element.name);
        
  //     });
      
  //   });
  
  // }

}
