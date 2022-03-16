import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/models/Course';
import { CourseService } from '../../../../core/service/api/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public coursesList: Course[] = [
    {
      id: 'html',
      course_code: "html",
      name: 'HTML & CSS',
      price_tag: 'premium',
      image_path: './../../../../../assets/image/html-css.png',
      total_time: 33,
      total_lessons: 14,
      first_lesson:'intro-course-html',
      description:
        'Khóa học đề cao việc thực hành qua những ví dụ trong thực tế giúp học viên nhanh chóng xây dựng được giao diện website',
      level: 'beginer',
      viewers: 4019,
      created_at: "string",
      update_at: "string",
    },
    {
      id: 'js',
      course_code:"html",
      name: 'Java Script',
      price_tag: 'free',
      image_path: './../../../../../assets/image/js-basic.png',
      total_time: 331,
      total_lessons: 114,
      first_lesson:'intro-course-js',
      description:
        'Khóa học đề cao việc thực hành qua những ví dụ trong thực tế giúp học viên nhanh chóng xây dựng được giao diện website',
      level: 'advanced',
      viewers: 4019,
      created_at: "string",
      update_at: "string",
    },
    {
      id: 'java',
      course_code:'java',
      name: 'Java 8',
      price_tag: 'free',
      image_path: './../../../../../assets/image/java-basic.png',
      total_time: 44,
      total_lessons: 41,
      first_lesson:'intro-course-java',
      description:
        'Khóa học đề cao việc thực hành qua những ví dụ trong thực tế giúp học viên nhanh chóng xây dựng được giao diện website',
      level: 'intermediate',
      viewers: 2019,
      created_at: "string",
      update_at: "string",
    }, {
      id: 'html',
      course_code:'html',
      name: 'HTML & CSS',
      price_tag: 'premium',
      image_path: './../../../../../assets/image/html-css.png',
      total_time: 33,
      total_lessons: 14,
      first_lesson:'intro-course-html',
      description:
        'Khóa học đề cao việc thực hành qua những ví dụ trong thực tế giúp học viên nhanh chóng xây dựng được giao diện website',
      level: 'beginer',
      viewers: 4019,
      created_at: "string",
      update_at: "string",
    },
    {
      id: 'js',
      course_code:'js',
      name: 'Java Script',
      price_tag: 'free',
      image_path: './../../../../../assets/image/js-basic.png',
      total_time: 331,
      total_lessons: 114,
      first_lesson:'intro-course-js',
      description:
        'Khóa học đề cao việc thực hành qua những ví dụ trong thực tế giúp học viên nhanh chóng xây dựng được giao diện website',
      level: 'advanced',
      viewers: 4019,
      created_at: "string",
      update_at: "string",
    },
    {
      id: 'java',
      course_code:'java',
      name: 'Java 8',
      price_tag: 'free',
      image_path: './../../../../../assets/image/java-basic.png',
      total_time: 44,
      total_lessons: 41,
      first_lesson:'intro-course-java',
      description:
        'Khóa học đề cao việc thực hành qua những ví dụ trong thực tế giúp học viên nhanh chóng xây dựng được giao diện website',
      level: 'intermediate',
      viewers: 2019,
      created_at: "string",
      update_at: "string",
    }
  ];
  // public coursesList: Course[];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    // this.courseService
    //   .get6CourseHighestViewers()
    //   .toPromise()
    //   .then((res) => {
    //     this.coursesList = res.data;
    //     console.log(res.data);
    //   });
    // console.log(this.coursesList);
    // const unixTime = 1210981217;
    // const date = new Date(unixTime);
    // console.log(date.toLocaleDateString('en-US'));
  }

  currentPriceTag(price: string) {
    return price === 'free' ? 'free' : 'premium';
  }

  iconLevelColor(level: string) {
    if (level === 'beginner') {
      return 'color: #ff0000';
    }
    if (level === 'intermediate') {
      return 'color: #ee82ee';
    }
    if (level === 'advanced') {
      return 'color: #00CE83';
    }
  }

  iconLevelType(level: string) {
    if (level === 'beginner') {
      return 'fa fa-battery-quarter';
    }
    if (level === 'intermediate') {
      return 'fa fa-battery-three-quarters';
    }
    if (level === 'advanced') {
      return 'fa fa-battery-full';
    }
  }
}
