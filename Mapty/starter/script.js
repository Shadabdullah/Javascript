'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');





class App {
    #map;
    #mapEvent;
    constructor() {
        this._getLocation()

    }

    _getLocation() {

        if (navigator.geolocation) {



            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {

                alert("Could'nt get location")
            })


        }


    }

    _loadMap(position) {


        const { latitude, longitude } = position.coords

        console.log(`https://www.google.com/maps/@${latitude}${longitude}`)

        const coords = [latitude, longitude]

        this.#map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);



        this.#map.on('click', function (mapE) {
            this.#mapEvent = mapE
            form.classList.remove('hidden')
            inputDistance.focus();


        })

    }

    _showForm() {


    }

    _toggleElevationField() {

    }
    _newWorkout() {


    }

}

const app = new App()

form.addEventListener('submit', function (e) {

    inputDistance.value = inputElevation.value = inputCadence.value = inputDuration.value = ''

    e.preventDefault()

    const { lat, lng } = mapEvent.latlng

    L.marker([lat, lng]).addTo(map)
        .bindPopup(L.popup({ maxWidth: 200, minWidth: 120, autoClose: false, closeOnClick: false, className: 'running-popup' }))
        .setPopupContent("work").openPopup();

    // form.classList.add('hidden')
})

inputType.addEventListener('change', function () {

    inputElevation.closest('.form__row').classList.toggle("form__row--hidden")
    inputCadence.closest('.form__row').classList.toggle("form__row--hidden")

    console.log('change')
})