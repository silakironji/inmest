import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  getLeaveById(id: number) {
    throw new Error('Method not implemented.');
  }
  private leavesDB = [
    {
        id: 3,
    leave_type: "Maternity",
    start_date: "Dec 20, 2023",
    end_date: "Mar 20, 2024",
    created_by: "Osege",
    status: "PENDING",
    last_modified: "Nov 27, 2023",
    status_changed_by: "Habiba",
    leave_details: "I am writing to  discuss further details at your convenience.",
    },
    {
        id: 2,
    leave_type: "Maternity",
    start_date: "Dec 20, 2023",
    end_date: "Mar 20, 2024",
    created_by: "Fred",
    status: "PENDING",
    last_modified: "Nov 27, 2023",
    status_changed_by: "DWarren",
    leave_details: "I am writing to formally request a leave of absence from work starting [start date] to [end date]. The reason for this leave is [briefly explain the reason, such as personal reasons, family matters, or health concerns].I have ensured that my responsibilities are up to date, and I will make every effort to complete any pending tasks before my departure. I am willing to delegate my duties and provide any necessary training for the smooth continuation of projects during my absence.I kindly request your approval for this leave and am willing to discuss further details at your convenience.",
    },
    {
        id: 1,
        leave_type: "Maternity",
        start_date: "Dec 20, 2023",
        end_date: "Mar 20, 2024",
        created_by: "Michori",
        status: "PENDING",
        last_modified: "Nov 27, 2023",
        status_changed_by: "DeJose",
        leave_details: "I am writing to formally request convenience.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
   
  ]

  constructor() { }

  getLeaves() {
    return of(this.leavesDB)
  }
  
  getLeaveByID(id:number){
    return of(this.leavesDB.find(element => element.id === id));
  }
}
