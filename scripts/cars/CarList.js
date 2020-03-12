import { useCars } from "./CarDataProvider.js"
import { Car } from "./Car.js"

const contentTarget = document.querySelector(".carList")
const eventHub = document.querySelector("#container")

eventHub.addEventListener("manufacturerChosen", customEvent => {
    // Get all the cars
    const carDataArray = useCars()

    // Filter out the cars that are of the same make as what was chosen
    const filteredCars = carDataArray.filter(
        (carObject) => {
            if (carObject.make === customEvent.detail.manufacturer) {
                return true
            }
            return false
        }
    )

    // Convert each object in the filtered array to a string
    const carStringArray = filteredCars.map(
        (carObject) => {
            return Car(carObject)
        }
    )

    // Join into a single string and inject into the DOM
    contentTarget.innerHTML = carStringArray.join("")

})

export const CarList = () => {
    const carDataArray = useCars()

    const carStringArray = carDataArray.map(
        (carObject) => {
            return Car(carObject)
        }
    )

    contentTarget.innerHTML = carStringArray.join("")
}