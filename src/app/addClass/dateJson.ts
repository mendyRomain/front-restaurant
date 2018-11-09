export class DateJson{
    year: number;
    month: number;
    day:number;
    
    constructor(){
    }

    updateDateJsontoDaTe(datetoconvert:any){
        let date = new Date();
        if(null != datetoconvert){
            this.year=datetoconvert.year;
            this.month=datetoconvert.month-1;
            this.day= datetoconvert.day;
            date.setFullYear(this.year,this.month,this.day);
        }
        
        return date;
    }
}