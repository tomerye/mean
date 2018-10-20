import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { TransactionsService } from "../transfers/transfers.service";
import { UsersService } from "./users.service";

@Component({
  selector: "users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) {}

  users : any[];

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data.users;
    });
  }
}
