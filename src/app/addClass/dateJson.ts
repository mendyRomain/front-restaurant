export class DateJson{
    year: number;
    month: number;
    day:number;
    
    constructor(year:number, month:number, day:number){
        this.year=year;
        this.month=month;
        this.day=day;
    }

    updateDateJsontoDaTe(){
        let date = new Date();
        date.setFullYear(this.year,this.month,this.day);
        return date;
    }
}