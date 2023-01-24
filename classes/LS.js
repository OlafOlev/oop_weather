class LS{
    constructor() {
        this.city
        this.defaultCity = "Tallinn"
    }
    getcity(){
        if(localStorage.getItem("city") === null){
            this.city = this.defaultCity
        }else{
            this.city = localStorage.getItem("city")
        }
        return this.city
    }
    setcity(city){
        localStorage.setItem("city", city)
    }
}