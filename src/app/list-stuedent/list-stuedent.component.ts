import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { SocketService } from '../socket.service';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-list-stuedent',
  templateUrl: './list-stuedent.component.html',
  styleUrls: ['./list-stuedent.component.css'],
})
export class ListStuedentComponent implements OnInit {
  students: Student[] = [];
  messageList: any[] = [];
  constructor(
    private studentService: StudentService,
    private router: Router,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.studentService.getStudentList().subscribe((response) => {
      this.students = response.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as Student;
      });
    });

    this.socketService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
    });
  }

  editStudent(item: any) {
    this.router.navigate(['/edit'], { queryParams: { id: item.id } });
  }
  deleteStudent(item: any) {
    this.studentService.deleteStudent(item);
  }

  newMessage: string;
  sendMessage() {
    if (this.newMessage) {
      this.socketService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}
