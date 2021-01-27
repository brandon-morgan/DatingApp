import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public accountService: AccountService,
    private _router: Router,
    private _toasterService: ToastrService
  ) { }

  ngOnInit(): void {
    
  }

  login() {
    this.accountService.login(this.model).subscribe(res => {
      this._router.navigateByUrl('/members');
    });
  }

  logout() {
    this.accountService.logout();
    this._router.navigateByUrl('/');
  }

}
