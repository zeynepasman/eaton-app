import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from 'src/app/main/login/user.model';
import { Device } from './device.model';

@Injectable({ providedIn: 'root' })
export class ListService {
  public user: Observable<User>;

  constructor(private http: HttpClient) {}

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`${environment.apiUrl}/devices`).pipe(
      map((devices) => {
        return devices;
      })
    );
  }
}
