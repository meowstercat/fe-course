import {Component, OnInit} from '@angular/core';
import * as Plyr from 'plyr';
import {Lesson} from '../../../../shared/models/Lesson';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent implements OnInit {
  public player;
  public courseCode;
  public lessonList: Lesson[] = [
    {
      id: '',
      lessonCode: 'abc',
      lessonName: 'What is Html css?',
      lessonTime: 2,
      videoFilename: '',
      documentation: '',
      score: 2,
      isLock: false
    },
    {
      id: '',
      lessonCode: 'bas',
      lessonName: 'What is Html css?',
      lessonTime: 2,
      videoFilename: '',
      documentation: '',
      score: 2,
      isLock: false
    },
    {
      id: '',
      lessonCode: 'c',
      lessonName: 'What is Html css?',
      lessonTime: 2,
      videoFilename: '',
      documentation: '',
      score: 2,
      isLock: false
    },
    {
      id: '',
      lessonCode: 'daqw',
      lessonName: 'What is Html css?',
      lessonTime: 2,
      videoFilename: '',
      documentation: '',
      score: 2,
      isLock: false
    },
    {
      id: '',
      lessonCode: 'eas',
      lessonName: 'What is Html css?',
      lessonTime: 2,
      videoFilename: '',
      documentation: '',
      score: 2,
      isLock: false
    },
    {
      id: '',
      lessonCode: 'fba',
      lessonName: 'What is Html css?',
      lessonTime: 2,
      videoFilename: '',
      documentation: '',
      score: 2,
      isLock: false
    },
    {
      id: '',
      lessonCode: 'h',
      lessonName: 'What is Html css?',
      lessonTime: 2,
      videoFilename: '',
      documentation: '',
      score: 2,
      isLock: false
    },
  ];

  constructor(private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
    this.player = new Plyr('#plyrID', {captions: {active: true}});
    this.activatedRoute.paramMap.subscribe((p:ParamMap)=>{
     this.courseCode = p.get("courseCode");
     console.log(this.courseCode);
    })
  }

}
