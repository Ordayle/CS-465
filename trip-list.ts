import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

type TripsResponse = {
  message: string;
  count: number;
  trips: any[];
};

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-list.html'
})
export class TripList {
  trips: any[] = [];
  error = '';
  raw: any = null;

  constructor(private http: HttpClient) {
    this.loadTrips();
  }

  loadTrips() {
    this.error = '';
    this.raw = 'Loading...';

    this.http.get<TripsResponse>('/api/trips').subscribe({
      next: (res) => {
        this.raw = res;
        this.trips = res.trips ?? [];
      },
      error: (err) => {
        this.raw = err;
        this.error = 'Failed to load trips (backend/proxy)';
      }
    });
  }
}
