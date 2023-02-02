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
let map, mapEvent;




inputType.addEventListener('change', function () {

    inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
})

class App {
    
    #map;
    #mapEvent;
    constructor() {
        this._getPosition();

        form.addEventListener('submit',this._newWorkout.bind(this))

    }
    _getPosition() {

        navigator.geolocation.getCurrentPosition(this._loadmap.bind(this), function () {
            alert('couldnt get loc')
        
        })

    }
    _loadmap(position) {
        const { latitude, longitude } = position.coords

        const coords = [latitude, longitude]
        this.#map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

     

        this.#map.on('click',this._showForm.bind(this))


    }
    _showForm(mapE) {
        this.#mapEvent = mapE

        form.classList.remove('hidden');
        inputDistance.focus();

    }
    _toggleElevation() {

    }
    _newWorkout(e) {

        e.preventDefault();
        
        inputDistance.value = inputCadence.value = inputDistance.value = inputElevation.value = ''
        const { lat, lng } = mapEvent.latlng
    
        L.marker([lat, lng]).addTo(this.#map)
            .bindPopup(L.popup({ minWidth: 50, maxWidth: 300, autoClose: false, closeOnClick: false, className: 'runnig-popup', }))
            .openPopup().setPopupContent('workout');


    }
}

const app = new App()