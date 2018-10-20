import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { TransactionsService } from './transfers.service';

@Component({
  selector: 'transfer-money',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  constructor(private authService: AuthService, private transactionService: TransactionsService) { }

  userName: string;
  payTo: string;
  amount: number;

  ngOnInit() {
  }

  pay() : void{
    this.transactionService.transfer('tomer', this.payTo, this.amount)
    .subscribe(data => {
    })
  }

}
