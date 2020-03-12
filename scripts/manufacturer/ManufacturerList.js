import { useManufacturers } from "./ManufacturerDataProvider.js"
import { Manufacturer } from "./Manufacturer.js"

const contentTarget = document.querySelector(".manufacturerList")

export const ManufacturerList = () => {
    const manufacturers = useManufacturers()

    const manArray = manufacturers.map(
        (manObject) => {
            const manufacturerHTML = Manufacturer(manObject)
            return manufacturerHTML
        }
    )

    contentTarget.innerHTML = `
        <select class="manufacturerDropdown">
            ${manArray.join("")}
        </select>
    `
}