import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceService } from '../../services/attendance/attendance.service';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit{
  attendance : any[]  = [];
   //constructor injection
   constructor(
    private attendanceService: AttendanceService
  ){
    
  }
  ngOnInit(): void {
    this.getAttendance()
    console.log(this.attendance)
  }

  getAttendance(){
    this.attendanceService.getAttendance().subscribe((resp:any)=>{
       this.attendance = resp
    })
  }
}
