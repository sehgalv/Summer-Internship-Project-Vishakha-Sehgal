import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class InvolvementService {

    involvements : Involvement[] = [];
    constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            for(var i = 0; i < data.involvements.length; i++) {
                this.involvements.push(new Involvement(data.involvements[i].id,data.involvements[i].organization, data.involvements[i].title, data.involvements[i].description, data.involvements[i].start_date, data.involvements[i].end_date, data.involvements[i].imageFullPath, data.involvements[i].imageCaption))
            }
        })
    }

     public getInvolvements() :Involvement[] {
        return this.involvements;
     }

    public getJSON() : Observable<any> {
        return this.http.get("/assets/data/involvement.json");
    }
}

export class Involvement {
    constructor(public id: number, public organization: string, public title:string, public description:string[], public start_date:string, public end_date:string, public fullImagePath: string, public imageCaption: string) {}
}