import { Component, OnInit } from '@angular/core';
import { UnicornService } from '../services/unicorn.service';

@Component({
  selector: 'app-unicorn',
  templateUrl: './unicorn.component.html',
  styleUrls: ['./unicorn.component.css']
})
export class UnicornComponent implements OnInit {
  unicorns: any[] = [];
  isModalOpen = false;
  unicorn = { name: '', age: null, colour: '' };

  constructor(private unicornService: UnicornService) { }

  ngOnInit(): void {
    this.loadUnicorns();  
  }

  loadUnicorns(): void {
    this.unicornService.getUnicorns().subscribe((data) => {
      this.unicorns = data;
    });
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  addUnicorn(): void {
    this.unicornService.addUnicorn(this.unicorn).subscribe(() => {
      this.loadUnicorns();
      this.closeModal();
    });
  }

  deleteUnicorn(id: string): void {
    this.unicornService.deleteUnicorn(id).subscribe(() => {
      this.loadUnicorns();
    });
  }
}