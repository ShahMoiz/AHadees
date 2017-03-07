import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    dashBoard;
    checkDashBoard(dashboard){
        this.dashBoard =  dashboard;
    }
}