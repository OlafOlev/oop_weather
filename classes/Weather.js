class Weather{
    constructor(city){
        this.city = city
        this.key = "f2b438be18cd39fb7b1ca95c2824aaaa"
    }
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responseData = await response.json()
        return responseData
    }
    changeCity(city){
        this.city = city
    }
}