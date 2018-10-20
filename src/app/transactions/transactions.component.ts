import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { TransactionsService } from "../transfers/transfers.service";

@Component({
  selector: "transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"]
})
export class TransactionsComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private transactionService: TransactionsService
  ) {}

  transactions : any[];

  ngOnInit() {
    this.transactionService.getAllTransactions().subscribe(data => {
      this.transactions = data.transactions;
    });
  }
}
