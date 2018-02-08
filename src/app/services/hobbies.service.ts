import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class HobbiesService {

    hobbies : Hobby[] = [];
    constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            for(var i = 0; i < data.hobbies.length; i++) {
                this.hobbies.push(new Hobby(data.hobbies[i].id,data.hobbies[i].activity, data.hobbies[i].description, data.hobbies[i].image))
            }
        })
    }

     public getHobbies() :Hobby[] {
        return this.hobbies;
     }

    public getJSON() : Observable<any> {
        return this.http.get("/assets/data/hobbies.json");
    }
}

export class Hobby {
    constructor(public id: number, public activity: string, public description:string[], public images:[{}]) {}
}