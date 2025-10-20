import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Authentication } from '../services/authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCard implements OnInit{
  @Input('trip') trip: any;

  constructor(
    private router: Router, 
    private authenticationService: Authentication
  ) {}

  ngOnInit(): void {

  }
  public isLoggedIn() 
  { 
    return this.authenticationService.isLoggedIn(); 
  }

}
