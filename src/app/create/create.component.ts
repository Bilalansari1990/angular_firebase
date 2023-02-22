import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  myForm: FormGroup;
  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('bilal'),
      email: new FormControl('bilal@gmail.com'),
      student_course: new FormControl('testing'),
      fees: new FormControl('15'),
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid as boolean) {
      this.studentService.createStudent(form.value);
      this.router.navigate(['/list']);
    }
  }
}
