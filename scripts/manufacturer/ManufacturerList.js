import { useManufacturers } from "./ManufacturerDataProvider.js"
import { Manufacturer } from "./Manufacturer.js"

const contentTarget = document.querySelector(".manufacturerList")
const eventHub = document.querySelector("#container")

contentTarget.addEventListener("change", changeEvent => {
    // What was changed?
    if (changeEvent.target.classList.contains("manufacturerDropdown")) {
        // Let system know that a manufacturer was chosen
        const manSelected = new CustomEvent("manufacturerChosen", {
            // Pass along details about which manufacturer was chosen
            detail: {
                manufacturer: changeEvent.target.value
            }
        })

        eventHub.dispatchEvent(manSelected)
    }
})

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