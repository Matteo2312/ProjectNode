import { Component, OnInit } from '@angular/core';
import { PhysiqueService } from './physique.service';

@Component({
  selector: 'app-physique',
  templateUrl: './physique.component.html',
  styleUrls: ['./physique.component.css']
})
export class PhysiqueComponent implements OnInit {
  subjects: any[] = [];

  constructor(private physiqueService: PhysiqueService) { }

  ngOnInit(): void {
    this.physiqueService.getPhysiqueSubjects().subscribe(data => {
      this.subjects = data;
    });
  }
}
