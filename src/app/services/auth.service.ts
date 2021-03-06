import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDto } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/';
/**
 * 
 * @param httpClient 
 */
  constructor(private httpClient: HttpClient) { }
/**
 * @param nuevoUsuario
 * @return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario)
 * 
 */
  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }
/**
 * @param loginUsuario
 * @return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario)
 * 
 */
  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }

}
