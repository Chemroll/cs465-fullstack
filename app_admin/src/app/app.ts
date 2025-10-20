import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripListing } from './trip-listing/trip-listing';
import { NavbarComponent } from './navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TripListing, NavbarComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Travel Getway Admin!');
}
