import { Component } from '@angular/core';

@Component({
  selector: 'app-mathematique',
  templateUrl: './mathematique.component.html',
  styleUrl: './mathematique.component.css'
})
export class MathematiqueComponent {
  results: any[] = [];

  constructor() {}

  ngOnInit() {
    this.fetchResults();
  }

  fetchResults() {
    fetch('http://localhost:3000/results')
      .then(response => response.json())
      .then(data => {
        this.results = data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des résultats:', error);
      });
  }
}

