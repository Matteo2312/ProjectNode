import { Component, OnInit } from '@angular/core';
import { PhilosophieService } from './philosophie.service';

@Component({
  selector: 'app-philosophie',
  templateUrl: './philosophie.component.html',
  styleUrls: ['./philosophie.component.css']
})
export class PhilosophieComponent implements OnInit {
  subjects: any[] = [];

  constructor(private philosophieService: PhilosophieService) { }

  ngOnInit(): void {
    this.philosophieService.getPhilosophieSubjects().subscribe(data => {
      this.subjects = data;
    });
  }
}
