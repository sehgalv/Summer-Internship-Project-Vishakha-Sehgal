import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AcademicsService {

    academics: Academics[] = [];
    work: Work[] = [];
    constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            console.log(data);
            for (var i = 0; i < data.academics.length; i++) {
                this.academics.push(new Academics(data.academics[i].id, data.academics[i].school, data.academics[i].location, data.academics[i].major, data.academics[i].gpa, data.academics[i].minor, data.academics[i].concentration,data.academics[i].courses, data.academics[i].start_date, data.academics[i].end_date, data.academics[i].imageFullPath, data.academics[i].imageCaption))
            }
            for (var i = 0; i < data.work.length; i++) {
                this.work.push(new Work(data.work[i].id, data.work[i].employeer, data.work[i].title, data.work[i].description, data.work[i].start_date, data.work[i].end_date, data.work[i].imageFullPath, data.work[i].imageCaption))
            }
        })
    }

    public getAcademics(): Academics[] {
        return this.academics;
    }

    public getWork(): Work[] {
        return this.work;
    }

    public getJSON(): Observable<any> {
        return this.http.get("/assets/data/academics.json");
    }
}

export class Academics {
    constructor(public id: number, public school: string, public location: string, public major: string, public gpa: string, public minor: string, public concentration:string, public courses: string[], public start_date: string, public end_date: string, public fullImagePath: string, public imageCaption: string) { }
}

export class Work {
    constructor(public id: number, public employeer: string, public title: string, public description: string[], public start_date: string, public end_date: string, public fullImagePath: string, public imageCaption: string) { }
}