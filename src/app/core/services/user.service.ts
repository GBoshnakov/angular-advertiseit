import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogData, IRegData, IUser } from '../interfaces';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser!: IUser;

  get isLogged() {
    return !!this.currentUser;
  }

  constructor(private httpClient: HttpClient) { }

  login(userData: ILogData): Observable<IUser> {
    console.log('sending data')
    return this.httpClient.post<IUser>(`${environment.apiUrl}/login`, userData)
      .pipe(tap(user => this.currentUser = user));
  }

  logout(): Observable<void> {
    return this.httpClient.post<void>(`${environment.apiUrl}/logout`, {});
  }

  register(userData: IRegData): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/register`, userData);
  }

  getUser(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`);
  }
}
