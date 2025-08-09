document.addEventListener('DOMContentLoaded', () => {
    // Clock
    const hourHand = document.querySelector('[data-hour-hand]');
    const minuteHand = document.querySelector('[data-minute-hand]');
    const secondHand = document.querySelector('[data-second-hand]');
    const dateElement = document.querySelector('.date');

    function setClock() {
        const currentDate = new Date();
        const secondsRatio = currentDate.getSeconds() / 60;
        const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
        const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
        setRotation(secondHand, secondsRatio);
        setRotation(minuteHand, minutesRatio);
        setRotation(hourHand, hoursRatio);

        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        dateElement.textContent = currentDate.toLocaleDateString('en-US', options);
    }

    function setRotation(element, rotationRatio) {
        element.style.setProperty('--rotation', rotationRatio * 360);
    }

    setInterval(setClock, 1000);
    setClock();

    // Search
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value;
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    });

    // Weather (Placeholder)
    // To get live weather data, you will need an API key from a weather service like OpenWeatherMap.
    // You can then replace the placeholder data below with a fetch call to the API.
    const weatherCondition = document.querySelector('.weather-condition');
    const humidity = document.querySelector('.humidity');
    const feelsLike = document.querySelector('.feels-like');
    const location = document.querySelector('.location');
    const temperature = document.querySelector('.temperature');

    weatherCondition.textContent = 'Mist';
    humidity.textContent = 'Humidity 75%';
    feelsLike.textContent = 'Feels 35.7°C';
    location.textContent = 'Calcutta';
    temperature.textContent = '31°';

    // Settings Panel
    const settingsBtn = document.querySelector('.settings-btn');
    const settingsPanel = document.querySelector('.settings-panel');
    const closeBtn = document.querySelector('.close-btn');
    const backdrop = document.createElement('div');
    backdrop.classList.add('backdrop');
    document.body.appendChild(backdrop);

    const shortcutsToggle = document.getElementById('shortcuts-toggle');
    const aiToolsToggle = document.getElementById('ai-tools-toggle');
    const fahrenheitToggle = document.getElementById('fahrenheit-toggle');
    const languageSelect = document.getElementById('language-select');
    const colorPalette = document.querySelector('.color-palette');

    settingsBtn.addEventListener('click', () => {
        settingsPanel.classList.add('open');
        backdrop.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        settingsPanel.classList.remove('open');
        backdrop.classList.remove('open');
    });

    backdrop.addEventListener('click', () => {
        settingsPanel.classList.remove('open');
        backdrop.classList.remove('open');
    });

    shortcutsToggle.addEventListener('change', (e) => {
        console.log('Shortcuts toggle:', e.target.checked);
    });

    aiToolsToggle.addEventListener('change', (e) => {
        console.log('AI-Tools toggle:', e.target.checked);
    });

    fahrenheitToggle.addEventListener('change', (e) => {
        console.log('Fahrenheit toggle:', e.target.checked);
    });

    languageSelect.addEventListener('change', (e) => {
        console.log('Language selected:', e.target.value);
    });

    colorPalette.addEventListener('click', (e) => {
        if (e.target.classList.contains('color-box')) {
            const color = e.target.dataset.color;
            document.documentElement.style.setProperty('--primary-color', color);

            // Update selected checkmark
            const selectedColor = document.querySelector('.color-box.selected');
            if (selectedColor) {
                selectedColor.classList.remove('selected');
            }
            e.target.classList.add('selected');
        }
    });
});