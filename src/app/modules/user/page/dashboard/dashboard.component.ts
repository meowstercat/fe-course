import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listCourse: any = [
    {
      title: 'HTML, CSS từ zero đến Hero',
      description: 'Khóa học đề cao việc thực hành qua những ví dụ trong thực tế giúp học viên nhanh chóng xây dựng được giao diện website',
    },
    {
      title: 'Lập trình Javascript cơ bản (bản đầy đủ)',
      description: 'Khóa học Javascript cơ bản dành cho mọi đối tượng bắt đầu học lập trình với nội dung ngắn gọn, dễ hiểu và hệ thống làm bài tập phong phú',
    },
    {
      title: 'Xây dựng web responsive',
      description: 'Khóa học này sẽ giúp bạn nắm chắc tư tưởng cốt lõi của việc xây dựng giao diện website responsive và áp dụng trong thực tế',
    },
    {
      title: 'Kiến thức cơ bản, cốt lõi dân IT cần học trước',
      description: 'Kiến thức cơ bản dành cho dân IT, không phân biệt bạn theo Front-end, Back-end hay Devops',
    },
    {
      title: 'Xây dựng web với NodeJS & ExpressJS',
      description: 'Xây dựng web trong thực tế với NodeJS & ExpressJS với cách chia sẻ chi tiết, tận tâm, dễ hiểu và chất giọng giàu sức sống của người chia sẻ',
    },
    {
      title: 'HTML, CSS tips',
      description: 'Tutorials về HTML, CSS, UI, UX sẽ được tổng hợp tại khóa học này, các video có nội dung ngắn gọn, súc tích giúp học viên có thể ứng dụng ngay vào thực tế',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
