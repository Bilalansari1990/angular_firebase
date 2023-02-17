import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-stuedent',
  templateUrl: './list-stuedent.component.html',
  styleUrls: ['./list-stuedent.component.css'],
})
export class ListStuedentComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.studentService.getStudentList().subscribe((response) => {
      this.students = response.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Student;
      });
    });
  }

  editStudent(item: any) {
    this.router.navigate(['/edit'], { queryParams: { id: item.id } });
  }
  deleteStudent(item: any) {
    this.studentService.deleteStudent(item);
  }
}
