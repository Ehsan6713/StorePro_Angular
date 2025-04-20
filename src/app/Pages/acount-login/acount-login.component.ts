import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../Services/account.service';
import { LoginDto } from '../../Dtos/login.dto';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-acount-login',
  imports: [FormsModule],
  templateUrl: './acount-login.component.html',
  styleUrl: './acount-login.component.css'
})
export class AcountLoginComponent {
  loginModel:LoginDto={
    password:"",
    username:"",
    rememberMe:true
  }
  constructor(private accountService:AccountService,
    private router:Router,
    private toaster:ToastrService) {
    
    
  }
  


  onLogin() {
    this.accountService.login(this.loginModel)
      .pipe(
        catchError(error => {
          if (error.status === 401 || error.status === 400) {
            this.toaster.error('نام کاربری یا رمز عبور نادرست است');
          } else {
            this.toaster.error('خطا در ارتباط با سرور');
            console.error('Login error:', error);
          }
          return throwError(() => error);
        })
      )
      .subscribe({
        next: (response:any) => {
          // ذخیره اطلاعات کاربر و توکن
          this.accountService.accessToken.next(response.accessToken);
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('userData', JSON.stringify({
            userId: response.userId,
            username: response.username,
            roleIds: response.roleIds,
            permissionIds: response.permissionIds
          }));
  
          this.toaster.success('ورود با موفقیت انجام شد');
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1000);
          
        },
        error: () => {
        }
      });
  }



}