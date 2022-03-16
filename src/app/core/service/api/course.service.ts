import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ListResponse} from '../../../shared/models/ListResponse';
import {Course} from '../../../shared/models/Course';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  oke

  constructor(private http: HttpClient) {
  }

  public get6CourseHighestViewers(){
    return this.http.get<ListResponse<Course>>('http://localhost:8080/course/get-6-course-highest', httpOptions)
  }
}
