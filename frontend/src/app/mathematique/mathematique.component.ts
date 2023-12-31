// mathematique.component.ts
import { Component, OnInit } from '@angular/core';
import { MathematiqueService } from './mathematique.service';

@Component({
  selector: 'app-mathematique',
  templateUrl: './mathematique.component.html',
  styleUrls: ['./mathematique.component.css']
})
export class MathematiqueComponent implements OnInit {
  subjects: any[] = [];

  constructor(private mathematiqueService: MathematiqueService) { }

  ngOnInit(): void {
    this.mathematiqueService.getMathematiqueSubjects().subscribe(data => {
      this.subjects = data;
    });
  }
}
