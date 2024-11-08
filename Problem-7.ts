{


    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number){
            this.make = make;
            this.model = model; 
            this.year = year
        }

        getCarAge(){
            const currentYear : number = new Date().getFullYear();
            const givenYear : number = this.year
            const carAge : number = currentYear - givenYear
            console.log(carAge);
            return carAge
        }
    }

    const car = new Car("Toyota", "V100", 2018)
    car.getCarAge()

}