import { Component, OnInit } from '@angular/core';
import { FrancaisService } from './francais.service';

@Component({
  selector: 'app-francais',
  templateUrl: './francais.component.html',
  styleUrls: ['./francais.component.css']
})
export class FrancaisComponent implements OnInit {
  subjects: any[] = [];

  constructor(private francaisService: FrancaisService) { }

  ngOnInit(): void {
    this.francaisService.getFrancaisSubjects().subscribe(data => {
      this.subjects = data;
    });
  }
}
