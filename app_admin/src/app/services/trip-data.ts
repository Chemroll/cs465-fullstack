import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';
import { AddTrip } from '../add-trip/add-trip';

@Injectable({
  providedIn: 'root'
})
export class TripData {

  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/api/trips';
  
  getTrips() : Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
    
  }
  AddTrip(FormData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, FormData);
  }
}
