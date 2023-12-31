// histoire.component.ts
import { Component, OnInit } from '@angular/core';
import { HistoireService } from './histoire.service';

@Component({
  selector: 'app-histoire',
  templateUrl: './histoire.component.html',
  styleUrls: ['./histoire.component.css']
})
export class HistoireComponent implements OnInit {
  subjects: any[] = [];

  constructor(private histoireService: HistoireService) { }

  ngOnInit(): void {
    this.histoireService.getHistoireSubjects().subscribe(data => {
      this.subjects = data;
    });
  }
}
