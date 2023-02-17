import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-stuedent',
  templateUrl: './edit-stuedent.component.html',
  styleUrls: ['./edit-stuedent.component.css'],
})
export class EditStuedentComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private studentService: StudentService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      student_course: new FormControl(''),
      fees: new FormControl(''),
    });
  }
  ngOnInit(): void {
    const id = this.activeRouter.snapshot.queryParamMap.get('id');
    this.studentService.getStudentDoc(id).subscribe((response: any) => {
      this.myForm = new FormGroup({
        name: new FormControl(response.name),
        email: new FormControl(response.email),
        student_course: new FormControl(response.student_course),
        fees: new FormControl(response.fees),
      });
    });
  }
  onSubmit(form: FormGroup) {
    const id = this.activeRouter.snapshot.queryParamMap.get('id');
    this.studentService.updateStudent(form.value, id);
    this.router.navigate(['/list']);
  }
}
