import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(
    private _accountService: AccountService,
    private _toasterService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  register() {
    this._accountService.register(this.model).subscribe(res => {
      console.log(res);
      this.cancel();
    }, err => {
      console.log(err);
      this._toasterService.error(err.error);
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
