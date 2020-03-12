const cars = [
    {
        id: 1,
        color: "Blue",
        make: "Chevrolet",
        model: "Silverado",
        year: 2010,
        body: "Truck"
    },
    {
        id: 2,
        color: "Goldenrod",
        make: "Ford",
        model: "F-150",
        year: 2014,
        body: "Truck"
    },
    {
        id: 3,
        color: "Magenta",
        make: "Lambourghini",
        model: "Mercialago",
        year: 2019,
        body: "Car"
    },
    {
        id: 4,
        color: "Orange",
        make: "Toyota",
        model: "Forerunner",
        year: 1989,
        body: "Car"
    },
    {
        id: 5,
        color: "Red",
        make: "Honda",
        model: "Civic",
        year: 2007,
        body: "Car"
    },
    {
        id: 6,
        color: "Black",
        make: "Tesla",
        model: "Model 3",
        year: 2018,
        body: "Car"
    }
]

export const useCars = () => cars.slice()
