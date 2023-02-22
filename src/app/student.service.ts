import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore/';
import { Student } from './student.model';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private angularFireStore: AngularFirestore) {}

  getStudentDoc(id) {
    return this.angularFireStore
      .collection('student-collection')
      .doc(id)
      .valueChanges();
  }

  getStudentList() {
    return this.angularFireStore
      .collection('student-collection')
      .snapshotChanges();
  }

  createStudent(student: Student) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireStore
        .collection('student-collection')
        .add(student)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  deleteStudent(student: any) {
    return this.angularFireStore
      .collection('student-collection')
      .doc(student.id)
      .delete();
  }

  updateStudent(student: Student, id) {
    return this.angularFireStore
      .collection('student-collection')
      .doc(id)
      .update({
        name: student.name as string,
        email: student.email as string,
        student_course: student.student_course as string,
        fees: student.fees as string,
      });
  }
}
