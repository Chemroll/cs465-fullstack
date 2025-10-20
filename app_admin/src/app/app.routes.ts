import { Routes } from '@angular/router';
import { TripListing } from './trip-listing/trip-listing';
import { AddTrip } from './add-trip/add-trip';
import { Login } from './login/login';

export const routes: Routes = [
     {path: 'add-trip', component: AddTrip },
     { path: '', component: TripListing, pathMatch: 'full'},
     { path: 'Login', component: Login},
];
