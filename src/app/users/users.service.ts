import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UsersService {

  constructor(private http : HttpClient) {}

  public $userSource = new Subject<any>();

  getAllUsers() : Observable <any> {
    return Observable.create(observer => {
      this.http.get('/api/user').subscribe((data : any) => {
        observer.next({users: data});
        observer.complete();
      })
    });
  }
}
