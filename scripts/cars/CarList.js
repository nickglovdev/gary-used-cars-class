import { useCars } from "./CarDataProvider.js"
import { Car } from "./Car.js"

const contentTarget = document.querySelector("#container")

export const CarList = () => {
    const carDataArray = useCars()

    const carStringArray = carDataArray.map(
        (carObject) => {
            return Car(carObject)
        }
    )

    contentTarget.innerHTML = carStringArray.join("")
}