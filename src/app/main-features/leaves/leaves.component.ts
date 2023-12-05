import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';




@Component({
  selector: 'app-leave',
  standalone: true,
  // imports: [CommonModule, MatTabsModule, MatTableModule, MatCardModule, MaterialModule],
  imports: [CommonModule,RouterModule, MatTabsModule, MatTableModule,MatIconModule, MatCardModule],
  templateUrl: './leaves.component.html',
  styleUrl: './leaves.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class LeaveComponent implements OnInit {
  dataSource :any;
  displayedColumns:string [] = [];
  leaves: any[] = [];

  constructor(
    private leaveService: LeaveService
  ){}

  getLeaves() {
    this.leaveService.getLeaves().subscribe((response:any) => {
      this.leaves = response;
    })
  }

  ngOnInit(): void {
      this.getLeaves();
      this.displayedColumns = ['id', 'EIT_id', 'type', 'date', 'status'];
      this.dataSource = this.leaves;
  }

}
