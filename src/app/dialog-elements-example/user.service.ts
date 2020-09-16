import { User } from './user.module';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
  })

export class UserService{
    constructor(private http: HttpClient , private cookieService: CookieService) { }
    userChanged = new EventEmitter<User[]>();
    private users: User[] = [
        
      ];

  

    getUsers(){
        console.log('users..' + this.cookieService.get('users'));
        this.users = JSON.parse(this.cookieService.get('users'));
        return this.users;
    }

    getColleges(): Observable<any>{
        return this.http.get(`http://universities.hipolabs.com/search?name=middle`);
    }
    
    addUsers(user: User){
        this.users.push(user);
        this.cookieService.set( 'users', JSON.stringify(this.users));
        this.userChanged.emit(this.users.slice());
    }
    deleteUser(user: User){

        this.users = this.users.filter((item) => item.name !== user.name);
        // this.users = this.users.slice(0, 1);
        console.log('users after ' + JSON.stringify(this.users));
        this.cookieService.set( 'users', JSON.stringify(this.users));
        return this.users;
    }
}