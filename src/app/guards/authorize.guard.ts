import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../Services/account.service';

export const authorizeGuard: CanActivateFn = (route, state) => {
  let accountService=inject(AccountService);
  let router=inject(Router);
  if(accountService.isLogin===true)
    return true;
  else{
    router.navigate(['/login'], { 
      queryParams: { returnUrl: state.url } 
    });
   return false;
  }
};
