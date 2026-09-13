/* =================================
   PANCHAYAT WEATHER DATA
================================= */

const weatherData = {

    A: {
        rainfall: "18 mm",
        temperature: "30°C",
        humidity: "72%",
        wind: "14 km/h",
        confidence: 86,
        risk: "Low"
    },

    B: {
        rainfall: "24 mm",
        temperature: "29°C",
        humidity: "76%",
        wind: "17 km/h",
        confidence: 82,
        risk: "Medium"
    },

    C: {
        rainfall: "38 mm",
        temperature: "27°C",
        humidity: "84%",
        wind: "23 km/h",
        confidence: 79,
        risk: "High"
    },

    D: {
        rainfall: "15 mm",
        temperature: "31°C",
        humidity: "68%",
        wind: "12 km/h",
        confidence: 88,
        risk: "Low"
    }

};


/* =================================
   UPDATE WEATHER
================================= */

function updateWeather() {

    const selected =
        document.getElementById("panchayat").value;

    const data =
        weatherData[selected];

    document.getElementById("rainfall")
        .innerText = data.rainfall;

    document.getElementById("temperature")
        .innerText = data.temperature;

    document.getElementById("humidity")
        .innerText = data.humidity;

    document.getElementById("wind")
        .innerText = data.wind;

    document.getElementById("confidence")
        .innerText = data.confidence;

    document.getElementById("confidenceBar")
        .style.width = data.confidence + "%";

    document.getElementById("selectedPanchayat")
        .innerText =
        "Panchayat " + selected;

    document.getElementById("mapRain")
        .innerText = data.rainfall;

    document.getElementById("mapRisk")
        .innerText = data.risk;

}


/* =================================
   MAP PANCHAYAT
================================= */

function selectPanchayat(letter) {

    document.getElementById("panchayat")
        .value = letter;

    updateWeather();

    showNotification(
        "Panchayat " + letter + " selected"
    );

}


/* =================================
   NOTIFICATION
================================= */

function showNotification(message) {

    const box =
        document.getElementById("notification");

    if (!box) return;

    box.innerText = message;

    box.style.display = "block";

    setTimeout(function() {

        box.style.display = "none";

    }, 2500);

}


/* =================================
   FARMER FEEDBACK
================================= */

function feedback(type) {

    showNotification(
        "Feedback recorded: " + type
    );

}


/* =================================
   CROP ADVISORY
================================= */

function changeAdvisory() {

    const crop =
        document.getElementById("crop").value;

    const title =
        document.getElementById("advisoryTitle");

    const text =
        document.getElementById("advisoryText");

    const list =
        document.getElementById("advisoryList");


    if (crop === "paddy") {

        title.innerText =
            "Paddy • Flowering Stage";

        text.innerText =
            "Heavy rainfall is expected. Avoid unnecessary irrigation and postpone pesticide spraying.";

        list.innerHTML = `
            <li>Do not irrigate before rainfall.</li>
            <li>Avoid pesticide spraying during rain.</li>
            <li>Check field drainage.</li>
            <li>Monitor fungal diseases.</li>
        `;

    }


    else if (crop === "cotton") {

        title.innerText =
            "Cotton • Vegetative Stage";

        text.innerText =
            "High humidity and rainfall may increase pest and disease risk.";

        list.innerHTML = `
            <li>Monitor cotton leaves regularly.</li>
            <li>Avoid spraying before rainfall.</li>
            <li>Check for fungal infection.</li>
            <li>Maintain field drainage.</li>
        `;

    }


    else if (crop === "maize") {

        title.innerText =
            "Maize • Growing Stage";

        text.innerText =
            "Moderate rainfall is expected. Avoid excess irrigation.";

        list.innerHTML = `
            <li>Do not over-irrigate.</li>
            <li>Check field waterlogging.</li>
            <li>Monitor crop growth.</li>
            <li>Apply fertilizer when suitable.</li>
        `;

    }


    else {

        title.innerText =
            "Vegetables • Growing Stage";

        text.innerText =
            "Rainfall may increase fungal disease risk.";

        list.innerHTML = `
            <li>Ensure proper drainage.</li>
            <li>Avoid spraying before rainfall.</li>
            <li>Check leaves for fungal infection.</li>
            <li>Remove standing water.</li>
        `;

    }

}


/* =================================
   LANGUAGE
================================= */

let telugu = false;

function toggleLanguage() {

    telugu = !telugu;

    const button =
        document.getElementById("languageButton");

    const hero =
        document.getElementById("heroText");

    if (!button || !hero) return;


    if (telugu) {

        button.innerText = "English";

        hero.innerText =
            "AI మరియు స్థానిక డేటాను ఉపయోగించి బ్లాక్ స్థాయి వాతావరణ అంచనాను పంచాయతీ స్థాయికి మార్చి రైతులకు ఉపయోగకరమైన వ్యవసాయ సూచనలు అందిస్తుంది.";

        showNotification(
            "తెలుగు భాష ప్రారంభించబడింది"
        );

    }

    else {

        button.innerText = "తెలుగు";

        hero.innerText =
            "Convert Block-level weather forecasts into Panchayat-level predictions using AI/ML, historical weather, terrain, satellite and local observation data.";

        showNotification(
            "English language enabled"
        );

    }

}


/* =================================
   PAGE LOAD
================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        if (
            document.getElementById("panchayat")
        ) {

            updateWeather();

        }

    }
);
