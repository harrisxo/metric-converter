const inputValue = document.getElementById("input-value")
const convertBtn = document.getElementById("convert-btn")
const meter = document.getElementById("text-meter")
const liter = document.getElementById("text-liter")
const kilo = document.getElementById("text-kilo")

const METER_TO_FEET = 3.28084
const LITER_TO_GALLON = 0.264172
const KILO_TO_POUND = 2.20462

function formatNumber(value) {
  return Number(value).toFixed(3)
}

function convertAll() {
  const rawValue = inputValue.value.trim()
  if (rawValue === "") {
    meter.textContent = "Bitte eine Zahl eingeben."
    liter.textContent = "Bitte eine Zahl eingeben."
    kilo.textContent = "Bitte eine Zahl eingeben."
    return
  }
  const value = Number(rawValue)
  if (Number.isNaN(value)) {
    meter.textContent = "Bitte eine Zahl eingeben."
    liter.textContent = "Bitte eine Zahl eingeben."
    kilo.textContent = "Bitte eine Zahl eingeben."
    return
  }

  const feet = value * METER_TO_FEET
  const meters = value / METER_TO_FEET
  meter.textContent = `${value} meters = ${formatNumber(feet)} feet | ${value} feet = ${formatNumber(meters)} meters`

  const gallons = value * LITER_TO_GALLON
  const liters = value / LITER_TO_GALLON
  liter.textContent = `${value} liters = ${formatNumber(gallons)} gallons | ${value} gallons = ${formatNumber(liters)} liters`

  const pounds = value * KILO_TO_POUND
  const kilos = value / KILO_TO_POUND
  kilo.textContent = `${value} kilos = ${formatNumber(pounds)} pounds | ${value} pounds = ${formatNumber(kilos)} kilos`
}

convertBtn.addEventListener("click", convertAll)
convertAll()
