export const Car = carObject => {
    return `
        <section class="car">
            <header class="car__model">
                <h2>${carObject.model}</h2>
            </header>

            <p class="car__make">${carObject.make}</p>
            <p class="car__details">${carObject.color} ${carObject.year}</p>
        </section>
    `
}