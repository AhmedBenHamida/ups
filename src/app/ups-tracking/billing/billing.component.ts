import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})


export class BillingComponent {
  constructor(private router: Router) { }

    onNextClick(): void {
        // Navigate to the /card route
        this.router.navigate(['/card']);
    }
}