const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")

const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")

const error = document.getElementById("error")

convertBtn.addEventListener("click", () => {
    const input = Number(inputEl.value)

    if (isNaN(input) || isNaN(parseFloat(input))) {
        error.textContent = "Please enter a valid value"
        return
    }
    error.textContent = ""
    const convertedValues = convert(input)
    render(input, convertedValues)
    
})

function render(input, values) {
    const lengthText = `${input} meters = ${values.metersFeet} feet | 20 feet = ${values.feetMeters} meters`
    const volumeText = `${input} liters = ${values.litresGalons} gallons | 20 gallons = ${values.galonsLetres} liters`
    const massText = `${input} kilos = ${values.kilosPounds} pounds | 20 pounds = ${values.poundsKilos} kilos`

    lengthP.textContent = lengthText
    volumeP.textContent = volumeText
    massP.textContent = massText
}


function convert(input) {
    /*
        1 meter = 3.281 feet
        1 liter = 0.264 gallon
        1 kilogram = 2.204 pound
    */
    return {
        metersFeet: (input * 3.281).toFixed(3),
        feetMeters: (input / 3.281).toFixed(3),
        litresGalons: (input * 0.264).toFixed(3),
        galonsLetres: (input / 0.264).toFixed(3),
        kilosPounds: (input * 2.204).toFixed(3),
        poundsKilos: (input / 2.204).toFixed(3)
    }
}