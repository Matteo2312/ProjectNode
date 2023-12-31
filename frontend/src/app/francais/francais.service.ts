import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrancaisService {
  private apiUrl = 'http://localhost:3000/api/sujets';

  constructor(private http: HttpClient) { }

  getFrancaisSubjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
