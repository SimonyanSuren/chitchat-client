// Import necessary Angular modules and dependencies
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:9090/api/v1'; 

  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('accessToken'), 
  });

  signUp(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/sign-up`, user);
  }

  signIn(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/sign-in`, credentials);
  }

  signOut(): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/sign-out`, {}, { headers: this.headers });
  }

  refreshAccessToken(): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/refresh`, {}, { headers: this.headers });
  }

  getCurrentUserData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user`, { headers: this.headers });
  }

  createChannel(channelData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/channel`, channelData, { headers: this.headers });
  }

  getUserChannels(): Observable<any> {
    return this.http.get(`${this.baseUrl}/channel`, { headers: this.headers });
  }

  addMembersToChannel(channelId: number, members: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/channel/${channelId}/members`, members, {
      headers: this.headers,
    });
  }

  createMessage(channelId: number, messageData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/channel/${channelId}/message`, messageData, {
      headers: this.headers,
    });
  }

  getChannelMessages(channelId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/channel/${channelId}/message`, { headers: this.headers });
  }

  updateMessage(channelId: number, messageId: number, updatedMessage: any): Observable<any> {
    return this.http.patch(
      `${this.baseUrl}/channel/${channelId}/message/${messageId}`,
      updatedMessage,
      { headers: this.headers }
    );
  }
}
