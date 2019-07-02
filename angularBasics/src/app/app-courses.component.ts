import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'app-courses',
    template: `
    <h2>{{ getTitle() }}
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    </h2>`
})
export class AppCoursesComponent {
    title = 'List of courses';
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}
