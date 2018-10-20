import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TransactionsService {

  constructor(private http : HttpClient) {}

  public $userSource = new Subject<any>();

  transfer(from: string, to: string, amount : number) : Observable <any> {
    return Observable.create(observer => {
      this.http.post('/api/transaction', {
        sourceUserName: from,
        targetUserName: to,
        amount
      }).subscribe((data : any) => {
          observer.next({transactions: data});
          observer.complete();
      })
    });
  }

  getAllTransactions() : Observable <any> {
    return Observable.create(observer => {
      this.http.get('/api/transaction').subscribe((data : any) => {
        observer.next({transactions: data});
        observer.complete();
      })
    });
  }
}
