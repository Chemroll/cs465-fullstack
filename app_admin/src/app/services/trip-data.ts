import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';
import { AddTrip } from '../add-trip/add-trip';
import { User } from '../models/user';
import { BROWSER_STORAGE } from '../storage';
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root'
})
export class TripData {
  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  baseUrl = 'http://localhost:3000/api';
  url = 'http://localhost:3000/api/trips';
 
  getTrips() : Observable<Trip[]> {
    console.log('Inside TripData::getTrips');
    return this.http.get<Trip[]>(this.url);
  }

  AddTrip(formData: Trip) : Observable<Trip> {
    console.log('Inside TripData::getTrips');
    return this.http.post<Trip>(this.url, FormData);
  }

  getTrip(tripCode: string) : Observable<Trip[]> {
    console.log('Inside TripData::getTrip');
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  updateTrip(formData: Trip) : Observable<Trip> {
    console.log('Inside TripData::updateTrip');
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }

  login(user: User, passwd: string) : Observable<AuthResponse> {
    return this.handleAuthAPICall('login', user, passwd);
  }
  register(user: User, passwd: string) : Observable<AuthResponse>{
  return this.handleAuthAPICall('register', user, passwd);
  }

  handleAuthAPICall(endpoint: string, user: User, passwd: string) : Observable<AuthResponse> {
    let formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };

    return this.http.post<AuthResponse>(this.baseUrl + '/' + endpoint, formData);
  }


}
