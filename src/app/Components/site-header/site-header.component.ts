import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccountService } from '../../Services/account.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink,NgIf],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css'
})
export class SiteHeaderComponent implements OnInit,OnDestroy {
  userIsLogin:boolean=false;
  constructor(private accountService:AccountService) {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  private subscription!: Subscription;

  ngOnInit(): void {
    this.userIsLogin=(this.accountService.accessToken.getValue()!== '');
    this.subscription = this.accountService.accessToken.subscribe(
      token => {
        this.userIsLogin = token !== '';
      }
    );
    
  }
 
}
