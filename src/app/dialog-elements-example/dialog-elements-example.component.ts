import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogElementsExampleDialog } from './dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import { User } from './user.module';
import { UserService } from './user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-dialog-elements-example',
  templateUrl: './dialog-elements-example.component.html',
  styleUrls: ['./dialog-elements-example.component.css']
})
export class DialogElementsExampleComponent implements OnInit {
  users: User[];
  constructor(public dialog: MatDialog, private userService: UserService) {}
  ngOnInit(){
    this.users = this.userService.getUsers();
    console.log('colleges..' + JSON.stringify(this.userService.getColleges()));
    this.userService.userChanged.subscribe((users: User[]) => {
      this.users = users;
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogElementsExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:' + result);
    });
  }
  onDeleteUser(user: User){
    this.users = this.userService.deleteUser(user);
  }

}
