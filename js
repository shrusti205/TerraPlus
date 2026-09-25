// ============================================================
// TERRAPLUS LOGIN / APP JAVASCRIPT
// LOGIN + PASSWORD REVEAL + LANGUAGE
// ============================================================


// ============================================================
// LANGUAGE STORAGE
// ============================================================

const LANGUAGE_STORAGE_KEY =
    "terraPlusLanguage";


// ============================================================
// TRANSLATIONS
// ============================================================

const translations = {

    // ========================================================
    // ENGLISH
    // ========================================================

    en: {

        welcomeBack:
            "Welcome Back 👋",

        loginSubtitle:
            "Login to your TerraPlus dashboard",

        username:
            "👤 Username",

        password:
            "🔒 Password",

        usernamePlaceholder:
            "Enter your username",

        passwordPlaceholder:
            "Enter your password",

        rememberMe:
            "Remember me",

        forgotPassword:
            "Forgot password?",

        login:
            "Login",

        english:
            "English",

        gujarati:
            "ગુજરાતી",

        hindi:
            "हिंदी",

        smartAgriculturePlatform:
            "Smart Agriculture Platform",

        copyright:
            "© 2026 TerraPlus",

        tagline:
            "Know Your Soil. Grow Better. 🌱",

        showPassword:
            "Show password",

        hidePassword:
            "Hide password",

        emptyFields:
            "Please enter username and password.",

        forgotMessage:
            "Password recovery feature will be added soon."

    },


    // ========================================================
    // GUJARATI
    // ========================================================

    gu: {

        welcomeBack:
            "ફરી સ્વાગત છે 👋",

        loginSubtitle:
            "તમારા TerraPlus ડેશબોર્ડમાં લોગિન કરો",

        username:
            "👤 વપરાશકર્તા નામ",

        password:
            "🔒 પાસવર્ડ",

        usernamePlaceholder:
            "તમારું વપરાશકર્તા નામ દાખલ કરો",

        passwordPlaceholder:
            "તમારો પાસવર્ડ દાખલ કરો",

        rememberMe:
            "મને યાદ રાખો",

        forgotPassword:
            "પાસવર્ડ ભૂલી ગયા છો?",

        login:
            "લોગિન",

        english:
            "English",

        gujarati:
            "ગુજરાતી",

        hindi:
            "हिंदी",

        smartAgriculturePlatform:
            "સ્માર્ટ એગ્રીકલ્ચર પ્લેટફોર્મ",

        copyright:
            "© 2026 TerraPlus",

        tagline:
            "તમારી જમીન જાણો. વધુ સારું ઉગાડો. 🌱",

        showPassword:
            "પાસવર્ડ બતાવો",

        hidePassword:
            "પાસવર્ડ છુપાવો",

        emptyFields:
            "કૃપા કરીને વપરાશકર્તા નામ અને પાસવર્ડ દાખલ કરો.",

        forgotMessage:
            "પાસવર્ડ પુનઃપ્રાપ્તિ સુવિધા ટૂંક સમયમાં ઉમેરવામાં આવશે."

    },


    // ========================================================
    // HINDI
    // ========================================================

    hi: {

        welcomeBack:
            "आपका फिर से स्वागत है 👋",

        loginSubtitle:
            "अपने TerraPlus डैशबोर्ड में लॉगिन करें",

        username:
            "👤 उपयोगकर्ता नाम",

        password:
            "🔒 पासवर्ड",

        usernamePlaceholder:
            "अपना उपयोगकर्ता नाम दर्ज करें",

        passwordPlaceholder:
            "अपना पासवर्ड दर्ज करें",

        rememberMe:
            "मुझे याद रखें",

        forgotPassword:
            "पासवर्ड भूल गए?",

        login:
            "लॉगिन",

        english:
            "English",

        gujarati:
            "ગુજરાતી",

        hindi:
            "हिंदी",

        smartAgriculturePlatform:
            "स्मार्ट कृषि प्लेटफ़ॉर्म",

        copyright:
            "© 2026 TerraPlus",

        tagline:
            "अपनी मिट्टी जानें। बेहतर उगाएँ। 🌱",

        showPassword:
            "पासवर्ड दिखाएँ",

        hidePassword:
            "पासवर्ड छिपाएँ",

        emptyFields:
            "कृपया उपयोगकर्ता नाम और पासवर्ड दर्ज करें.",

        forgotMessage:
            "पासवर्ड रिकवरी सुविधा जल्द ही जोड़ी जाएगी."

    }

};


// ============================================================
// CURRENT LANGUAGE
// ============================================================

let currentLanguage = "en";


// ============================================================
// GET SAVED LANGUAGE
// ============================================================

function getSavedLanguage() {

    try {

        const saved =
            localStorage.getItem(
                LANGUAGE_STORAGE_KEY
            );


        if (
            saved &&
            translations[saved]
        ) {

            return saved;

        }

    }
    catch (error) {

        console.warn(
            "Unable to read saved language.",
            error
        );

    }


    return "en";

}


// ============================================================
// TRANSLATION HELPER
// ============================================================

function t(key) {

    if (
        translations[currentLanguage] &&
        translations[currentLanguage][key]
    ) {

        return translations[currentLanguage][key];

    }


    return translations.en[key] || key;

}


// ============================================================
// LOGIN
// ============================================================

function loginUser() {

    const username =
        document.getElementById(
            "username"
        );


    const password =
        document.getElementById(
            "password"
        );


    if (
        !username ||
        !password
    ) {

        console.error(
            "Username or password field not found."
        );

        return;

    }


    const usernameValue =
        username.value.trim();


    const passwordValue =
        password.value.trim();


    if (
        usernameValue === "" ||
        passwordValue === ""
    ) {

        alert(
            t("emptyFields")
        );

        return;

    }


    localStorage.setItem(
        "farmerName",
        usernameValue
    );


    localStorage.setItem(
        "terraPlusLoggedIn",
        "true"
    );


    window.location.href =
        "dashboard.html";

}


// ============================================================
// FORGOT PASSWORD
// ============================================================

function showForgotMessage() {

    alert(
        t("forgotMessage")
    );

}


// ============================================================
// PASSWORD REVEAL / HIDE
// ============================================================

function setupPasswordToggle() {

    const passwordInput =
        document.getElementById(
            "password"
        );


    const toggleButton =
        document.getElementById(
            "togglePassword"
        );


    if (
        !passwordInput ||
        !toggleButton
    ) {

        console.warn(
            "Password reveal elements not found."
        );

        return;

    }


    toggleButton.addEventListener(
        "click",
        function () {

            if (
                passwordInput.type ===
                "password"
            ) {

                // ------------------------------------------
                // SHOW PASSWORD
                // ------------------------------------------

                passwordInput.type =
                    "text";


                toggleButton.textContent =
                    "🙈";


                toggleButton.setAttribute(
                    "aria-label",
                    t("hidePassword")
                );


                toggleButton.setAttribute(
                    "title",
                    t("hidePassword")
                );

            }
            else {

                // ------------------------------------------
                // HIDE PASSWORD
                // ------------------------------------------

                passwordInput.type =
                    "password";


                toggleButton.textContent =
                    "👁️";


                toggleButton.setAttribute(
                    "aria-label",
                    t("showPassword")
                );


                toggleButton.setAttribute(
                    "title",
                    t("showPassword")
                );

            }

        }
    );

}


// ============================================================
// UPDATE PASSWORD TOGGLE LANGUAGE
// ============================================================

function updatePasswordToggleLanguage() {

    const passwordInput =
        document.getElementById(
            "password"
        );


    const toggleButton =
        document.getElementById(
            "togglePassword"
        );


    if (
        !passwordInput ||
        !toggleButton
    ) {

        return;

    }


    if (
        passwordInput.type ===
        "password"
    ) {

        toggleButton.setAttribute(
            "aria-label",
            t("showPassword")
        );


        toggleButton.setAttribute(
            "title",
            t("showPassword")
        );

    }
    else {

        toggleButton.setAttribute(
            "aria-label",
            t("hidePassword")
        );


        toggleButton.setAttribute(
            "title",
            t("hidePassword")
        );

    }

}


// ============================================================
// APPLY LOGIN LANGUAGE
// ============================================================

function applyLoginLanguage() {

    const translatedElements =
        document.querySelectorAll(
            "[data-translate]"
        );


    translatedElements.forEach(
        function (element) {

            const key =
                element.getAttribute(
                    "data-translate"
                );


            if (
                key &&
                translations[currentLanguage] &&
                translations[currentLanguage][key]
            ) {

                element.textContent =
                    t(key);

            }

        }
    );


    const placeholderElements =
        document.querySelectorAll(
            "[data-translate-placeholder]"
        );


    placeholderElements.forEach(
        function (element) {

            const key =
                element.getAttribute(
                    "data-translate-placeholder"
                );


            if (
                key
            ) {

                element.placeholder =
                    t(key);

            }

        }
    );


    updatePasswordToggleLanguage();


    document.documentElement.lang =
        currentLanguage;

}


// ============================================================
// LANGUAGE CHANGE
// ============================================================

function changeLanguage(
    language,
    selectedButton
) {

    if (
        !translations[language]
    ) {

        language = "en";

    }


    currentLanguage =
        language;


    try {

        localStorage.setItem(
            LANGUAGE_STORAGE_KEY,
            language
        );

    }
    catch (error) {

        console.warn(
            "Unable to save language.",
            error
        );

    }


    // ------------------------------------------
    // Update active language button
    // ------------------------------------------

    const buttons =
        document.querySelectorAll(
            ".language-button"
        );


    buttons.forEach(
        function (button) {

            button.classList.remove(
                "active"
            );

        }
    );


    if (
        selectedButton
    ) {

        selectedButton.classList.add(
            "active"
        );

    }
    else {

        buttons.forEach(
            function (button) {

                if (
                    button.getAttribute(
                        "data-language"
                    ) === language
                ) {

                    button.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    // ------------------------------------------
    // Apply translation
    // ------------------------------------------

    applyLoginLanguage();

}


// ============================================================
// INITIALIZE
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "TerraPlus login page started."
        );


        // ------------------------------------------
        // Load saved language
        // ------------------------------------------

        currentLanguage =
            getSavedLanguage();


        // ------------------------------------------
        // Setup password reveal
        // ------------------------------------------

        setupPasswordToggle();


        // ------------------------------------------
        // Apply saved language
        // ------------------------------------------

        applyLoginLanguage();


        // ------------------------------------------
        // Set active language button
        // ------------------------------------------

        const buttons =
            document.querySelectorAll(
                ".language-button"
            );


        buttons.forEach(
            function (button) {

                if (
                    button.getAttribute(
                        "data-language"
                    ) === currentLanguage
                ) {

                    button.classList.add(
                        "active"
                    );

                }
                else {

                    button.classList.remove(
                        "active"/* =========================================================
   TERRAPLUS DASHBOARD
   REAL HARDWARE SERIAL CONTROL
   STEP 18A - LANGUAGE SYSTEM UPDATE
   ========================================================= */


/* =========================================================
   GLOBAL SETTINGS
   ========================================================= */

const SERIAL_BAUD_RATE = 115200;
const SOLENOID_TIME = 10000;

let serialPort = null;
let serialReader = null;
let serialConnected = false;
let serialKeepReading = false;
let serialBuffer = "";

let realTemperature = null;
let realHumidity = null;
let realIRDetected = false;

let currentSolenoid = 0;


/* =========================================================
   NPK VALUES
   ========================================================= */

let nitrogenValue = 180;
let phosphorusValue = 75;
let potassiumValue = 120;


/* =========================================================
   IRRIGATION
   ========================================================= */

let irrigationIsOn = false;


/* =========================================================
   CHARTS
   ========================================================= */

let farmConditionsChart = null;
let temperatureChart = null;
let humidityChart = null;
let npkChart = null;

let temperatureHistory = [];
let humidityHistory = [];
let historyLabels = [];


/* =========================================================
   LANGUAGE
   ========================================================= */

const LANGUAGE_KEY = "terraPlusLanguage";

let currentLanguage =
    localStorage.getItem(LANGUAGE_KEY) || "en";


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

    /* =====================================================
       ENGLISH
       ===================================================== */

    en: {

        dashboard: "Dashboard",
        analytics: "Analytics",
        npk: "NPK",
        irrigation: "Irrigation",
        devices: "Devices",
        settings: "Settings",

        welcome: "Welcome back",
        overview: "Here's what's happening on your farm today.",

        liveMode: "LIVE MODE",
        disconnected: "HARDWARE DISCONNECTED",

        temperature: "Temperature",
        humidity: "Humidity",

        noObject: "No Object",
        objectDetected: "Object Detected",

        nitrogen: "Nitrogen",
        phosphorus: "Phosphorus",
        potassium: "Potassium",

        activateNitrogen:
            "💧 Activate Nitrogen",

        activatePhosphorus:
            "💧 Activate Phosphorus",

        activatePotassium:
            "💧 Activate Potassium",

        valveReady:
            "Solenoid Valve Ready",

        valveActive:
            "Solenoid Valve Active",

        valveOff:
            "Solenoid Valve OFF",

        connectHardware:
            "Connect Hardware",

        disconnectHardware:
            "Disconnect Hardware",

        hardwareConnected:
            "Hardware Connected",

        hardwareDisconnected:
            "Hardware Disconnected",

        irrigationControl:
            "Irrigation Control",

        controlIrrigationMotor:
            "Control the irrigation motor and relay.",

        irrigationSystem:
            "Irrigation System",

        motorOn:
            "Motor is currently ON",

        motorOff:
            "Motor is currently OFF",

        turnOn:
            "Turn ON",

        turnOff:
            "Turn OFF",

        relayStatusLabel:
            "Relay Status",

        on:
            "ON",

        off:
            "OFF",

        devicesPageTitle:
            "Connected Devices",

        monitorConnectedHardware:
            "Monitor your connected TerraPlus hardware.",

        esp8266:
            "ESP8266",

        mainController:
            "Main Controller",

        wifiModule:
            "Wi-Fi Module",

        dht22Sensor:
            "DHT22 Sensor",

        temperatureHumidity:
            "Temperature & Humidity",

        objectDetection:
            "Object Detection",

        irSensor:
            "IR Sensor",

        npkSolenoidValves:
            "NPK Solenoid Valves",

        threeManualValves:
            "3 Manual Valves",

        online:
            "Online",

        ready:
            "Ready",

        settingsPageTitle:
            "Settings",

        configureDashboard:
            "Configure your TerraPlus dashboard.",

        language:
            "Language",

        selectDashboardLanguage:
            "Select dashboard language",

        english:
            "English",

        gujarati:
            "ગુજરાતી",

        hindi:
            "हिन्दी",

        notifications:
            "Notifications",

        receiveFarmAlerts:
            "Receive farm alerts and notifications.",

        notificationOn:
            "Notifications ON",

        notificationOff:
            "Notifications OFF",

        demoModeTitle:
            "Demo Mode",

        sampleSensorValues:
            "Use sample sensor values.",

        currentTime:
            "Current Time",

        systemStatus:
            "System Status",

        connected:
            "Connected",

        notConnected:
            "Not Connected",

        manualNPK:
            "Manual NPK Management",

        nitrogenValue:
            "Nitrogen Value",

        phosphorusValue:
            "Phosphorus Value",

        potassiumValue:
            "Potassium Value",

        mgkg:
            "mg/kg",

        analyticsTitle:
            "Farm Analytics",

        analyticsDescription:
            "Monitor your farm conditions and NPK values.",

        temperatureChart:
            "Temperature",

        humidityChart:
            "Humidity",

        npkChart:
            "NPK Levels",

        logout:
            "Logout",

        notification:
            "Notification",

        systemRunning:
            "TerraPlus system is running.",

        espConnected:
            "ESP8266 connected successfully.",

        espDisconnected:
            "ESP8266 disconnected.",

        connectFirst:
            "Connect ESP8266 first.",

        commandFailed:
            "Could not send command to ESP8266.",

        nitrogenActivated:
            "Nitrogen solenoid activated.",

        phosphorusActivated:
            "Phosphorus solenoid activated.",

        potassiumActivated:
            "Potassium solenoid activated.",

        irrigationOnMessage:
            "Irrigation turned ON in website.",

        irrigationOffMessage:
            "Irrigation turned OFF in website.",

        logoutConfirm:
            "Are you sure you want to logout?",

        serialNotSupported:
            "Web Serial is not supported. Use Google Chrome or Microsoft Edge.",

        serialConnectionError:
            "Could not connect to ESP8266.",

        closeSerialMonitor:
            "Make sure Serial Monitor is CLOSED.",

        correctComPort:
            "Correct COM port is selected.",

        correctBaud:
            "Baud rate is 115200.",

        activeTenSeconds:
            "⏳ Active - 10 seconds"
    },


    /* =====================================================
       GUJARATI
       ===================================================== */

    gu: {

        dashboard: "ડેશબોર્ડ",
        analytics: "વિશ્લેષણ",
        npk: "NPK",
        irrigation: "સિંચાઈ",
        devices: "ઉપકરણો",
        settings: "સેટિંગ્સ",

        welcome: "ફરી સ્વાગત છે",
        overview: "આજે તમારા ખેતરમાં શું થઈ રહ્યું છે તે અહીં જુઓ.",

        liveMode: "લાઇવ મોડ",
        disconnected: "હાર્ડવેર ડિસ્કનેક્ટેડ",

        temperature: "તાપમાન",
        humidity: "ભેજ",

        noObject: "કોઈ વસ્તુ નથી",
        objectDetected: "વસ્તુ મળી",

        nitrogen: "નાઇટ્રોજન",
        phosphorus: "ફોસ્ફરસ",
        potassium: "પોટેશિયમ",

        activateNitrogen:
            "💧 નાઇટ્રોજન સક્રિય કરો",

        activatePhosphorus:
            "💧 ફોસ્ફરસ સક્રિય કરો",

        activatePotassium:
            "💧 પોટેશિયમ સક્રિય કરો",

        valveReady:
            "સોલેનોઇડ વાલ્વ તૈયાર",

        valveActive:
            "સોલેનોઇડ વાલ્વ સક્રિય",

        valveOff:
            "સોલેનોઇડ વાલ્વ બંધ",

        connectHardware:
            "હાર્ડવેર કનેક્ટ કરો",

        disconnectHardware:
            "હાર્ડવેર ડિસ્કનેક્ટ કરો",

        hardwareConnected:
            "હાર્ડવેર કનેક્ટેડ",

        hardwareDisconnected:
            "હાર્ડવેર ડિસ્કનેક્ટેડ",

        irrigationControl:
            "સિંચાઈ નિયંત્રણ",

        controlIrrigationMotor:
            "સિંચાઈ મોટર અને રિલે નિયંત્રિત કરો.",

        irrigationSystem:
            "સિંચાઈ સિસ્ટમ",

        motorOn:
            "મોટર હાલમાં ચાલુ છે",

        motorOff:
            "મોટર હાલમાં બંધ છે",

        turnOn:
            "ચાલુ કરો",

        turnOff:
            "બંધ કરો",

        relayStatusLabel:
            "રિલે સ્થિતિ",

        on:
            "ચાલુ",

        off:
            "બંધ",

        devicesPageTitle:
            "કનેક્ટેડ ઉપકરણો",

        monitorConnectedHardware:
            "તમારા કનેક્ટેડ TerraPlus હાર્ડવેરને મોનિટર કરો.",

        esp8266:
            "ESP8266",

        mainController:
            "મુખ્ય નિયંત્રક",

        wifiModule:
            "Wi-Fi મોડ્યુલ",

        dht22Sensor:
            "DHT22 સેન્સર",

        temperatureHumidity:
            "તાપમાન અને ભેજ",

        objectDetection:
            "વસ્તુ શોધ",

        irSensor:
            "IR સેન્સર",

        npkSolenoidValves:
            "NPK સોલેનોઇડ વાલ્વ",

        threeManualValves:
            "3 મેન્યુઅલ વાલ્વ",

        online:
            "ઓનલાઇન",

        ready:
            "તૈયાર",

        settingsPageTitle:
            "સેટિંગ્સ",

        configureDashboard:
            "તમારું TerraPlus ડેશબોર્ડ ગોઠવો.",

        language:
            "ભાષા",

        selectDashboardLanguage:
            "ડેશબોર્ડની ભાષા પસંદ કરો",

        english:
            "English",

        gujarati:
            "ગુજરાતી",

        hindi:
            "હિન્દી",

        notifications:
            "નોટિફિકેશન",

        receiveFarmAlerts:
            "ખેતરના એલર્ટ અને નોટિફિકેશન મેળવો.",

        notificationOn:
            "નોટિફિકેશન ચાલુ",

        notificationOff:
            "નોટિફિકેશન બંધ",

        demoModeTitle:
            "ડેમો મોડ",

        sampleSensorValues:
            "સેમ્પલ સેન્સર વેલ્યુનો ઉપયોગ કરો.",

        currentTime:
            "વર્તમાન સમય",

        systemStatus:
            "સિસ્ટમ સ્થિતિ",

        connected:
            "કનેક્ટેડ",

        notConnected:
            "કનેક્ટેડ નથી",

        manualNPK:
            "મેન્યુઅલ NPK મેનેજમેન્ટ",

        nitrogenValue:
            "નાઇટ્રોજન મૂલ્ય",

        phosphorusValue:
            "ફોસ્ફરસ મૂલ્ય",

        potassiumValue:
            "પોટેશિયમ મૂલ્ય",

        mgkg:
            "mg/kg",

        analyticsTitle:
            "ખેતર વિશ્લેષણ",

        analyticsDescription:
            "તમારા ખેતરની સ્થિતિ અને NPK મૂલ્યોનું મોનિટરિંગ કરો.",

        temperatureChart:
            "તાપમાન",

        humidityChart:
            "ભેજ",

        npkChart:
            "NPK સ્તર",

        logout:
            "લોગઆઉટ",

        notification:
            "નોટિફિકેશન",

        systemRunning:
            "TerraPlus સિસ્ટમ ચાલી રહી છે.",

        espConnected:
            "ESP8266 સફળતાપૂર્વક કનેક્ટ થયું.",

        espDisconnected:
            "ESP8266 ડિસ્કનેક્ટ થયું.",

        connectFirst:
            "પહેલા ESP8266 કનેક્ટ કરો.",

        commandFailed:
            "ESP8266 ને કમાન્ડ મોકલી શકાયો નથી.",

        nitrogenActivated:
            "નાઇટ્રોજન સોલેનોઇડ સક્રિય કર્યું.",

        phosphorusActivated:
            "ફોસ્ફરસ સોલેનોઇડ સક્રિય કર્યું.",

        potassiumActivated:
            "પોટેશિયમ સોલેનોઇડ સક્રિય કર્યું.",

        irrigationOnMessage:
            "વેબસાઇટમાં સિંચાઈ ચાલુ કરવામાં આવી.",

        irrigationOffMessage:
            "વેબસાઇટમાં સિંચાઈ બંધ કરવામાં આવી.",

        logoutConfirm:
            "શું તમે ખરેખર લોગઆઉટ કરવા માંગો છો?",

        serialNotSupported:
            "Web Serial સપોર્ટેડ નથી. Google Chrome અથવા Microsoft Edge નો ઉપયોગ કરો.",

        serialConnectionError:
            "ESP8266 સાથે કનેક્ટ થઈ શકાયું નથી.",

        closeSerialMonitor:
            "ખાતરી કરો કે Serial Monitor બંધ છે.",

        correctComPort:
            "સાચો COM port પસંદ કર્યો છે.",

        correctBaud:
            "Baud rate 115200 છે.",

        activeTenSeconds:
            "⏳ 10 સેકન્ડ માટે સક્રિય"
    },


    /* =====================================================
       HINDI
       ===================================================== */

    hi: {

        dashboard: "डैशबोर्ड",
        analytics: "विश्लेषण",
        npk: "NPK",
        irrigation: "सिंचाई",
        devices: "उपकरण",
        settings: "सेटिंग्स",

        welcome: "वापसी पर स्वागत है",
        overview: "आज आपके खेत में क्या हो रहा है, यहां देखें।",

        liveMode: "लाइव मोड",
        disconnected: "हार्डवेयर डिस्कनेक्टेड",

        temperature: "तापमान",
        humidity: "नमी",

        noObject: "कोई वस्तु नहीं",
        objectDetected: "वस्तु मिली",

        nitrogen: "नाइट्रोजन",
        phosphorus: "फॉस्फोरस",
        potassium: "पोटैशियम",

        activateNitrogen:
            "💧 नाइट्रोजन सक्रिय करें",

        activatePhosphorus:
            "💧 फॉस्फोरस सक्रिय करें",

        activatePotassium:
            "💧 पोटैशियम सक्रिय करें",

        valveReady:
            "सोलनॉइड वाल्व तैयार",

        valveActive:
            "सोलनॉइड वाल्व सक्रिय",

        valveOff:
            "सोलनॉइड वाल्व बंद",

        connectHardware:
            "हार्डवेयर कनेक्ट करें",

        disconnectHardware:
            "हार्डवेयर डिस्कनेक्ट करें",

        hardwareConnected:
            "हार्डवेयर कनेक्टेड",

        hardwareDisconnected:
            "हार्डवेयर डिस्कनेक्टेड",

        irrigationControl:
            "सिंचाई नियंत्रण",

        controlIrrigationMotor:
            "सिंचाई मोटर और रिले नियंत्रित करें।",

        irrigationSystem:
            "सिंचाई प्रणाली",

        motorOn:
            "मोटर अभी चालू है",

        motorOff:
            "मोटर अभी बंद है",

        turnOn:
            "चालू करें",

        turnOff:
            "बंद करें",

        relayStatusLabel:
            "रिले स्थिति",

        on:
            "चालू",

        off:
            "बंद",

        devicesPageTitle:
            "कनेक्टेड उपकरण",

        monitorConnectedHardware:
            "अपने कनेक्टेड TerraPlus हार्डवेयर की निगरानी करें।",

        esp8266:
            "ESP8266",

        mainController:
            "मुख्य नियंत्रक",

        wifiModule:
            "Wi-Fi मॉड्यूल",

        dht22Sensor:
            "DHT22 सेंसर",

        temperatureHumidity:
            "तापमान और नमी",

        objectDetection:
            "वस्तु पहचान",

        irSensor:
            "IR सेंसर",

        npkSolenoidValves:
            "NPK सोलनॉइड वाल्व",

        threeManualValves:
            "3 मैनुअल वाल्व",

        online:
            "ऑनलाइन",

        ready:
            "तैयार",

        settingsPageTitle:
            "सेटिंग्स",

        configureDashboard:
            "अपना TerraPlus डैशबोर्ड कॉन्फ़िगर करें।",

        language:
            "भाषा",

        selectDashboardLanguage:
            "डैशबोर्ड भाषा चुनें",

        english:
            "English",

        gujarati:
            "ગુજરાતી",

        hindi:
            "हिन्दी",

        notifications:
            "नोटिफिकेशन",

        receiveFarmAlerts:
            "खेत के अलर्ट और नोटिफिकेशन प्राप्त करें।",

        notificationOn:
            "नोटिफिकेशन चालू",

        notificationOff:
            "नोटिफिकेशन बंद",

        demoModeTitle:
            "डेमो मोड",

        sampleSensorValues:
            "सैंपल सेंसर मानों का उपयोग करें।",

        currentTime:
            "वर्तमान समय",

        systemStatus:
            "सिस्टम स्थिति",

        connected:
            "कनेक्टेड",

        notConnected:
            "कनेक्टेड नहीं",

        manualNPK:
            "मैनुअल NPK प्रबंधन",

        nitrogenValue:
            "नाइट्रोजन मान",

        phosphorusValue:
            "फॉस्फोरस मान",

        potassiumValue:
            "पोटैशियम मान",

        mgkg:
            "mg/kg",

        analyticsTitle:
            "फार्म विश्लेषण",

        analyticsDescription:
            "अपने खेत की स्थिति और NPK मानों की निगरानी करें।",

        temperatureChart:
            "तापमान",

        humidityChart:
            "नमी",

        npkChart:
            "NPK स्तर",

        logout:
            "लॉगआउट",

        notification:
            "नोटिफिकेशन",

        systemRunning:
            "TerraPlus सिस्टम चल रहा है।",

        espConnected:
            "ESP8266 सफलतापूर्वक कनेक्ट हुआ।",

        espDisconnected:
            "ESP8266 डिस्कनेक्ट हुआ।",

        connectFirst:
            "पहले ESP8266 कनेक्ट करें।",

        commandFailed:
            "ESP8266 को कमांड नहीं भेजी जा सकी।",

        nitrogenActivated:
            "नाइट्रोजन सोलनॉइड सक्रिय किया गया।",

        phosphorusActivated:
            "फॉस्फोरस सोलनॉइड सक्रिय किया गया।",

        potassiumActivated:
            "पोटैशियम सोलनॉइड सक्रिय किया गया।",

        irrigationOnMessage:
            "वेबसाइट में सिंचाई चालू की गई।",

        irrigationOffMessage:
            "वेबसाइट में सिंचाई बंद की गई।",

        logoutConfirm:
            "क्या आप वाकई लॉगआउट करना चाहते हैं?",

        serialNotSupported:
            "Web Serial समर्थित नहीं है। Google Chrome या Microsoft Edge का उपयोग करें।",

        serialConnectionError:
            "ESP8266 से कनेक्ट नहीं हो सका।",

        closeSerialMonitor:
            "सुनिश्चित करें कि Serial Monitor बंद है।",

        correctComPort:
            "सही COM port चुना गया है।",

        correctBaud:
            "Baud rate 115200 है।",

        activeTenSeconds:
            "⏳ 10 सेकंड के लिए सक्रिय"
    }
};


/* =========================================================
   TRANSLATION HELPER
   ========================================================= */

function translate(key) {

    if (
        translations[currentLanguage] &&
        translations[currentLanguage][key]
    ) {

        return translations[currentLanguage][key];
    }

    if (
        translations.en &&
        translations.en[key]
    ) {

        return translations.en[key];
    }

    return key;
}


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log("================================");
        console.log("TerraPlus Dashboard");
        console.log("REAL HARDWARE CONTROL MODE");
        console.log("================================");


        setupNavigation();

        setupQuickActions();

        setupNPKControls();

        setupIrrigationControls();

        setupLanguage();

        setupNotification();

        setupLogout();

        setupMobileMenu();

        setupSerialButton();

        setupCharts();

        applyTranslations();

        updateSensorDisplay();

        updateNPKDisplay();

        updateIrrigationUI();

        updateHardwareSolenoidStatus();

        updateIRDisplay();

        updateModeStatus();

        updateTime();


        setInterval(
            updateTime,
            1000
        );


        console.log(
            "Click Connect Hardware to connect ESP8266."
        );

    }
);


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {

    const items =
        document.querySelectorAll(
            ".nav-item"
        );


    items.forEach(
        function (item) {

            item.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    const section =
                        this.getAttribute(
                            "data-section"
                        );


                    if (section) {

                        showSection(
                            section
                        );
                    }

                }
            );

        }
    );
}


/* =========================================================
   SHOW SECTION
   ========================================================= */

function showSection(
    sectionName
) {

    const sections =
        document.querySelectorAll(
            ".content-section"
        );


    sections.forEach(
        function (section) {

            section.classList.remove(
                "active-section"
            );

        }
    );


    const target =
        document.getElementById(
            sectionName
        );


    if (target) {

        target.classList.add(
            "active-section"
        );
    }


    const navItems =
        document.querySelectorAll(
            ".nav-item"
        );


    navItems.forEach(
        function (item) {

            item.classList.remove(
                "active"
            );


            if (
                item.getAttribute(
                    "data-section"
                ) === sectionName
            ) {

                item.classList.add(
                    "active"
                );
            }

        }
    );
}


/* =========================================================
   QUICK ACTIONS
   ========================================================= */

function setupQuickActions() {

    const buttons =
        document.querySelectorAll(
            ".quick-action-card"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const target =
                        this.getAttribute(
                            "data-target"
                        );


                    if (target) {

                        showSection(
                            target
                        );
                    }

                }
            );

        }
    );
}


/* =========================================================
   NPK BUTTONS
   ========================================================= */

function setupNPKControls() {

    const buttons =
        document.querySelectorAll(
            ".control-button[data-valve]"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                async function () {

                    const valve =
                        this.getAttribute(
                            "data-valve"
                        );


                    await activateNPKValve(
                        valve,
                        this
                    );

                }
            );

        }
    );


    updateNPKDisplay();
}


/* =========================================================
   ACTIVATE NPK VALVE
   ========================================================= */

async function activateNPKValve(
    valve,
    button
) {

    if (!serialConnected) {

        showNotification(
            translate(
                "connectFirst"
            )
        );

        alert(
            translate(
                "connectFirst"
            ) +
            "\n\n" +
            translate(
                "connectHardware"
            ) +
            "."
        );

        return;
    }


    let command = "";


    if (
        valve === "nitrogen"
    ) {

        command = "N";

    }

    else if (
        valve === "phosphorus"
    ) {

        command = "P";

    }

    else if (
        valve === "potassium"
    ) {

        command = "K";

    }

    else {

        return;
    }


    console.log(
        "Sending command:",
        command
    );


    const success =
        await sendSerialCommand(
            command
        );


    if (!success) {

        showNotification(
            translate(
                "commandFailed"
            )
        );

        return;
    }


    let valveNumber = 0;


    if (
        valve === "nitrogen"
    ) {

        valveNumber = 1;
    }

    else if (
        valve === "phosphorus"
    ) {

        valveNumber = 2;
    }

    else if (
        valve === "potassium"
    ) {

        valveNumber = 3;
    }


    currentSolenoid =
        valveNumber;


    updateHardwareSolenoidStatus();


    if (button) {

        button.disabled = true;

        button.dataset.originalText =
            button.innerHTML;


        button.innerHTML =
            translate(
                "activeTenSeconds"
            );


        setTimeout(
            function () {

                button.disabled = false;

                button.innerHTML =
                    button.dataset.originalText ||
                    getValveButtonText(
                        valve
                    );

            },
            SOLENOID_TIME
        );
    }


    if (
        valve === "nitrogen"
    ) {

        showNotification(
            translate(
                "nitrogenActivated"
            )
        );
    }

    else if (
        valve === "phosphorus"
    ) {

        showNotification(
            translate(
                "phosphorusActivated"
            )
        );
    }

    else if (
        valve === "potassium"
    ) {

        showNotification(
            translate(
                "potassiumActivated"
            )
        );
    }
}


/* =========================================================
   GET VALVE BUTTON TEXT
   ========================================================= */

function getValveButtonText(
    valve
) {

    if (
        valve === "nitrogen"
    ) {

        return translate(
            "activateNitrogen"
        );
    }


    if (
        valve === "phosphorus"
    ) {

        return translate(
            "activatePhosphorus"
        );
    }


    if (
        valve === "potassium"
    ) {

        return translate(
            "activatePotassium"
        );
    }


    return "Activate";
}


/* =========================================================
   SERIAL COMMAND SENDER
   ========================================================= */

async function sendSerialCommand(
    command
) {

    if (
        !serialPort ||
        !serialPort.writable
    ) {

        console.error(
            "Serial port is not writable."
        );

        return false;
    }


    try {

        const writer =
            serialPort.writable.getWriter();


        const encoder =
            new TextEncoder();


        await writer.write(
            encoder.encode(
                command + "\n"
            )
        );


        writer.releaseLock();


        console.log(
            "Command sent:",
            command
        );


        return true;

    }

    catch (error) {

        console.error(
            "Serial write error:",
            error
        );

        return false;
    }
}


/* =========================================================
   STOP SOLENOID
   ========================================================= */

async function stopSolenoid() {

    if (
        !serialConnected
    ) {

        return;
    }


    await sendSerialCommand(
        "S"
    );
}


/* =========================================================
   REAL SOLENOID STATUS
   ========================================================= */

function updateHardwareSolenoidStatus() {

    const buttons =
        document.querySelectorAll(
            ".control-button[data-valve]"
        );


    buttons.forEach(
        function (button) {

            const valve =
                button.getAttribute(
                    "data-valve"
                );


            let valveNumber = 0;


            if (
                valve === "nitrogen"
            ) {

                valveNumber = 1;
            }

            else if (
                valve === "phosphorus"
            ) {

                valveNumber = 2;
            }

            else if (
                valve === "potassium"
            ) {

                valveNumber = 3;
            }


            const card =
                button.closest(
                    ".npk-control-card"
                );


            const status =
                card
                    ? card.querySelector(
                        ".valve-status"
                    )
                    : null;


            if (
                currentSolenoid ===
                valveNumber
            ) {

                button.classList.add(
                    "active"
                );


                if (status) {

                    status.classList.add(
                        "active"
                    );

                    status.innerHTML =
                        '<span class="status-dot"></span> ' +
                        translate(
                            "valveActive"
                        );
                }

            }

            else {

                button.classList.remove(
                    "active"
                );


                if (status) {

                    status.classList.remove(
                        "active"
                    );

                    status.innerHTML =
                        '<span class="status-dot"></span> ' +
                        translate(
                            "valveReady"
                        );
                }
            }

        }
    );
}


/* =========================================================
   NPK DISPLAY
   ========================================================= */

function updateNPKDisplay() {

    const n =
        document.getElementById(
            "nitrogenValue"
        );


    const p =
        document.getElementById(
            "phosphorusValue"
        );


    const k =
        document.getElementById(
            "potassiumValue"
        );


    if (n) {

        n.textContent =
            nitrogenValue;
    }


    if (p) {

        p.textContent =
            phosphorusValue;
    }


    if (k) {

        k.textContent =
            potassiumValue;
    }
}


/* =========================================================
   WEB SERIAL SUPPORT
   ========================================================= */

function isWebSerialSupported() {

    return (
        "serial" in navigator
    );
}


/* =========================================================
   SERIAL BUTTON
   ========================================================= */

function setupSerialButton() {

    let button =
        document.getElementById(
            "terraPlusSerialButton"
        );


    if (!button) {

        button =
            document.createElement(
                "button"
            );


        button.id =
            "terraPlusSerialButton";


        button.style.position =
            "fixed";

        button.style.right =
            "20px";

        button.style.bottom =
            "20px";

        button.style.zIndex =
            "9999";

        button.style.padding =
            "14px 20px";

        button.style.border =
            "none";

        button.style.borderRadius =
            "12px";

        button.style.cursor =
            "pointer";

        button.style.fontWeight =
            "700";

        button.style.boxShadow =
            "0 4px 15px rgba(0,0,0,0.2)";


        document.body.appendChild(
            button
        );
    }


    button.addEventListener(
        "click",
        async function () {

            if (
                serialConnected
            ) {

                await disconnectSerial();

            }

            else {

                await connectSerial();

            }

        }
    );


    updateSerialButton();
}


/* =========================================================
   UPDATE SERIAL BUTTON
   ========================================================= */

function updateSerialButton() {

    const button =
        document.getElementById(
            "terraPlusSerialButton"
        );


    if (!button) {

        return;
    }


    if (
        serialConnected
    ) {

        button.textContent =
            "🔌 " +
            translate(
                "disconnectHardware"
            );


        button.style.background =
            "#dc3545";

        button.style.color =
            "white";

    }

    else {

        button.textContent =
            "🔗 " +
            translate(
                "connectHardware"
            );


        button.style.background =
            "#198754";

        button.style.color =
            "white";
    }
}


/* =========================================================
   CONNECT SERIAL
   ========================================================= */

async function connectSerial() {

    if (
        !isWebSerialSupported()
    ) {

        alert(
            translate(
                "serialNotSupported"
            )
        );

        return;
    }


    try {

        console.log(
            "Opening serial port..."
        );


        serialPort =
            await navigator.serial.requestPort();


        await serialPort.open({
            baudRate:
                SERIAL_BAUD_RATE
        });


        serialConnected =
            true;

        serialKeepReading =
            true;

        serialBuffer =
            "";


        updateSerialButton();

        updateModeStatus();


        showNotification(
            translate(
                "espConnected"
            )
        );


        console.log(
            "ESP8266 connected."
        );


        readSerialData();

    }

    catch (error) {

        console.error(
            "Serial connection error:",
            error
        );


        serialConnected =
            false;

        serialPort =
            null;


        updateSerialButton();

        updateModeStatus();


        alert(
            translate(
                "serialConnectionError"
            ) +
            "\n\n" +
            "1. " +
            translate(
                "closeSerialMonitor"
            ) +
            "\n2. " +
            translate(
                "correctComPort"
            ) +
            "\n3. " +
            translate(
                "correctBaud"
            )
        );
    }
}


/* =========================================================
   READ SERIAL DATA
   ========================================================= */

async function readSerialData() {

    if (
        !serialPort ||
        !serialPort.readable
    ) {

        return;
    }


    try {

        const textDecoder =
            new TextDecoderStream();


        const readableStreamClosed =
            serialPort.readable.pipeTo(
                textDecoder.writable
            );


        serialReader =
            textDecoder.readable.getReader();


        while (
            serialKeepReading
        ) {

            const result =
                await serialReader.read();


            if (
                result.done
            ) {

                break;
            }


            if (
                result.value
            ) {

                serialBuffer +=
                    result.value;

                processSerialBuffer();
            }
        }


        serialReader.releaseLock();

        serialReader = null;


        await readableStreamClosed;

    }

    catch (error) {

        console.error(
            "Serial read error:",
            error
        );


        serialConnected =
            false;


        updateSerialButton();

        updateModeStatus();
    }
}


/* =========================================================
   PROCESS SERIAL BUFFER
   ========================================================= */

function processSerialBuffer() {

    const lines =
        serialBuffer.split(
            /\r?\n/
        );


    serialBuffer =
        lines.pop();


    lines.forEach(
        function (line) {

            processSerialLine(
                line.trim()
            );

        }
    );
}


/* =========================================================
   PROCESS SERIAL LINE
   ========================================================= */

function processSerialLine(
    line
) {

    if (!line) {

        return;
    }


    console.log(
        "ESP8266:",
        line
    );


    /* -----------------------------------------------------
       TEMPERATURE
       ----------------------------------------------------- */

    const temperatureMatch =
        line.match(
            /Temperature:\s*(-?\d+(?:\.\d+)?)\s*C/i
        );


    if (
        temperatureMatch
    ) {

        realTemperature =
            parseFloat(
                temperatureMatch[1]
            );


        updateSensorDisplay();

        addTemperatureReading();
    }


    /* -----------------------------------------------------
       HUMIDITY
       ----------------------------------------------------- */

    const humidityMatch =
        line.match(
            /Humidity:\s*(-?\d+(?:\.\d+)?)\s*%/i
        );


    if (
        humidityMatch
    ) {

        realHumidity =
            parseFloat(
                humidityMatch[1]
            );


        updateSensorDisplay();

        addHumidityReading();
    }


    /* -----------------------------------------------------
       IR DETECTED
       ----------------------------------------------------- */

    if (
        /Obstacle:\s*DETECTED/i.test(
            line
        )
    ) {

        realIRDetected =
            true;


        updateIRDisplay();
    }


    /* -----------------------------------------------------
       IR NOT DETECTED
       ----------------------------------------------------- */

    if (
        /Obstacle:\s*NO OBSTACLE/i.test(
            line
        )
    ) {

        realIRDetected =
            false;


        updateIRDisplay();
    }


    /* -----------------------------------------------------
       SOLENOID NUMBER
       ----------------------------------------------------- */

    const solenoidMatch =
        line.match(
            /Solenoid:\s*(0|1|2|3)/i
        );


    if (
        solenoidMatch
    ) {

        currentSolenoid =
            parseInt(
                solenoidMatch[1]
            );


        updateHardwareSolenoidStatus();
    }


    /* -----------------------------------------------------
       SOLENOID ON
       ----------------------------------------------------- */

    const solenoidOnMatch =
        line.match(
            /Solenoid\s*(1|2|3)\s*ON/i
        );


    if (
        solenoidOnMatch
    ) {

        currentSolenoid =
            parseInt(
                solenoidOnMatch[1]
            );


        updateHardwareSolenoidStatus();
    }


    /* -----------------------------------------------------
       SOLENOID OFF
       ----------------------------------------------------- */

    if (
        /Solenoid:\s*0/i.test(
            line
        )
    ) {

        currentSolenoid =
            0;


        updateHardwareSolenoidStatus();
    }
}


/* =========================================================
   SENSOR DISPLAY
   ========================================================= */

function updateSensorDisplay() {

    const temperatureElement =
        document.getElementById(
            "temperatureValue"
        );


    const humidityElement =
        document.getElementById(
            "humidityValue"
        );


    if (
        temperatureElement &&
        realTemperature !== null
    ) {

        temperatureElement.textContent =
            realTemperature.toFixed(1);
    }


    if (
        humidityElement &&
        realHumidity !== null
    ) {

        humidityElement.textContent =
            realHumidity.toFixed(1);
    }
}


/* =========================================================
   IR DISPLAY
   ========================================================= */

function updateIRDisplay() {

    const value =
        document.getElementById(
            "irValue"
        );


    const status =
        document.getElementById(
            "irStatus"
        );


    if (!value) {

        return;
    }


    if (
        realIRDetected
    ) {

        value.textContent =
            translate(
                "objectDetected"
            );


        if (status) {

            status.textContent =
                "🔴 " +
                translate(
                    "objectDetected"
                );

            status.classList.remove(
                "normal"
            );
        }

    }

    else {

        value.textContent =
            translate(
                "noObject"
            );


        if (status) {

            status.textContent =
                "🟢 " +
                translate(
                    "noObject"
                );

            status.classList.add(
                "normal"
            );
        }
    }
}


/* =========================================================
   MODE STATUS
   ========================================================= */

function updateModeStatus() {

    const elements =
        document.querySelectorAll(
            ".demo-status"
        );


    elements.forEach(
        function (element) {

            if (
                serialConnected
            ) {

                element.innerHTML =
                    '<span class="status-dot"></span> ' +
                    translate(
                        "liveMode"
                    );

            }

            else {

                element.innerHTML =
                    '<span class="status-dot"></span> ' +
                    translate(
                        "disconnected"
                    );
            }

        }
    );
}


/* =========================================================
   DHT HISTORY
   ========================================================= */

function addTemperatureReading() {

    if (
        realTemperature === null
    ) {

        return;
    }


    const now =
        new Date();


    const label =
        now.toLocaleTimeString(
            "en-IN",
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );


    temperatureHistory.push(
        realTemperature
    );


    historyLabels.push(
        label
    );


    if (
        temperatureHistory.length >
        30
    ) {

        temperatureHistory.shift();
    }


    if (
        historyLabels.length >
        30
    ) {

        historyLabels.shift();
    }


    updateCharts();
}


function addHumidityReading() {

    if (
        realHumidity === null
    ) {

        return;
    }


    humidityHistory.push(
        realHumidity
    );


    if (
        humidityHistory.length >
        30
    ) {

        humidityHistory.shift();
    }


    updateCharts();
}


/* =========================================================
   CHART SETUP
   ========================================================= */

function setupCharts() {

    if (
        typeof Chart ===
        "undefined"
    ) {

        console.warn(
            "Chart.js not found."
        );

        return;
    }


    createFarmConditionsChart();

    createTemperatureChart();

    createHumidityChart();

    createNPKChart();
}


/* =========================================================
   FARM CONDITIONS CHART
   ========================================================= */

function createFarmConditionsChart() {

    const canvas =
        document.getElementById(
            "farmConditionsChart"
        );


    if (!canvas) {

        return;
    }


    farmConditionsChart =
        new Chart(
            canvas,
            {

                type: "line",

                data: {

                    labels:
                        historyLabels,

                    datasets: [

                        {

                            label:
                                "Temperature °C",

                            data:
                                temperatureHistory,

                            borderWidth:
                                2,

                            tension:
                                0.35,

                            fill:
                                false
                        },

                        {

                            label:
                                "Humidity %",

                            data:
                                humidityHistory,

                            borderWidth:
                                2,

                            tension:
                                0.35,

                            fill:
                                false
                        }

                    ]

                },

                options: {

                    responsive:
                        true,

                    maintainAspectRatio:
                        false,

                    animation:
                        false,

                    scales: {

                        y: {

                            beginAtZero:
                                false
                        }

                    }

                }

            }
        );
}


/* =========================================================
   TEMPERATURE CHART
   ========================================================= */

function createTemperatureChart() {

    const canvas =
        document.getElementById(
            "temperatureChart"
        );


    if (!canvas) {

        return;
    }


    temperatureChart =
        new Chart(
            canvas,
            {

                type: "line",

                data: {

                    labels:
                        historyLabels,

                    datasets: [

                        {

                            label:
                                "Temperature °C",

                            data:
                                temperatureHistory,

                            borderWidth:
                                2,

                            tension:
                                0.35,

                            fill:
                                false

                        }

                    ]

                },

                options: {

                    responsive:
                        true,

                    maintainAspectRatio:
                        false,

                    animation:
                        false

                }

            }
        );
}


/* =========================================================
   HUMIDITY CHART
   ========================================================= */

function createHumidityChart() {

    const canvas =
        document.getElementById(
            "humidityChart"
        );


    if (!canvas) {

        return;
    }


    humidityChart =
        new Chart(
            canvas,
            {

                type: "line",

                data: {

                    labels:
                        historyLabels,

                    datasets: [

                        {

                            label:
                                "Humidity %",

                            data:
                                humidityHistory,

                            borderWidth:
                                2,

                            tension:
                                0.35,

                            fill:
                                false

                        }

                    ]

                },

                options: {

                    responsive:
                        true,

                    maintainAspectRatio:
                        false,

                    animation:
                        false

                }

            }
        );
}


/* =========================================================
   NPK CHART
   ========================================================= */

function createNPKChart() {

    const canvas =
        document.getElementById(
            "npkChart"
        );


    if (!canvas) {

        return;
    }


    npkChart =
        new Chart(
            canvas,
            {

                type: "line",

                data: {

                    labels: [
                        "N",
                        "P",
                        "K"
                    ],

                    datasets: [

                        {

                            label:
                                "NPK mg/kg",

                            data: [

                                nitrogenValue,

                                phosphorusValue,

                                potassiumValue

                            ],

                            borderWidth:
                                2,

                            tension:
                                0.35,

                            fill:
                                false

                        }

                    ]

                },

                options: {

                    responsive:
                        true,

                    maintainAspectRatio:
                        false

                }

            }
        );
}


/* =========================================================
   UPDATE CHARTS
   ========================================================= */

function updateCharts() {

    if (
        farmConditionsChart
    ) {

        farmConditionsChart.data.labels =
            historyLabels;


        farmConditionsChart.data.datasets[0].data =
            temperatureHistory;


        farmConditionsChart.data.datasets[1].data =
            humidityHistory;


        farmConditionsChart.update(
            "none"
        );
    }


    if (
        temperatureChart
    ) {

        temperatureChart.data.labels =
            historyLabels;


        temperatureChart.data.datasets[0].data =
            temperatureHistory;


        temperatureChart.update(
            "none"
        );
    }


    if (
        humidityChart
    ) {

        humidityChart.data.labels =
            historyLabels;


        humidityChart.data.datasets[0].data =
            humidityHistory;


        humidityChart.update(
            "none"
        );
    }


    if (
        npkChart
    ) {

        npkChart.data.datasets[0].data = [

            nitrogenValue,

            phosphorusValue,

            potassiumValue

        ];


        npkChart.update(
            "none"
        );
    }
}


/* =========================================================
   IRRIGATION
   ========================================================= */

function setupIrrigationControls() {

    const on =
        document.getElementById(
            "irrigationOn"
        );


    const off =
        document.getElementById(
            "irrigationOff"
        );


    if (on) {

        on.addEventListener(
            "click",
            function () {

                irrigationIsOn =
                    true;


                localStorage.setItem(
                    "terraPlusIrrigation",
                    "on"
                );


                updateIrrigationUI();


                showNotification(
                    translate(
                        "irrigationOnMessage"
                    )
                );

            }
        );
    }


    if (off) {

        off.addEventListener(
            "click",
            function () {

                irrigationIsOn =
                    false;


                localStorage.setItem(
                    "terraPlusIrrigation",
                    "off"
                );


                updateIrrigationUI();


                showNotification(
                    translate(
                        "irrigationOffMessage"
                    )
                );

            }
        );
    }
}


/* =========================================================
   IRRIGATION UI
   ========================================================= */

function updateIrrigationUI() {

    const status =
        document.getElementById(
            "irrigationStatus"
        );


    const relay =
        document.getElementById(
            "relayStatus"
        );


    const onButton =
        document.getElementById(
            "irrigationOn"
        );


    const offButton =
        document.getElementById(
            "irrigationOff"
        );


    if (
        irrigationIsOn
    ) {

        if (status) {

            status.textContent =
                translate(
                    "motorOn"
                );
        }


        if (relay) {

            relay.textContent =
                translate(
                    "on"
                );
        }


        if (onButton) {

            onButton.classList.add(
                "active"
            );
        }


        if (offButton) {

            offButton.classList.remove(
                "active"
            );
        }

    }

    else {

        if (status) {

            status.textContent =
                translate(
                    "motorOff"
                );
        }


        if (relay) {

            relay.textContent =
                translate(
                    "off"
                );
        }


        if (onButton) {

            onButton.classList.remove(
                "active"
            );
        }


        if (offButton) {

            offButton.classList.add(
                "active"
            );
        }
    }
}


/* =========================================================
   LANGUAGE SETUP
   ========================================================= */

function setupLanguage() {

    const selectors =
        document.querySelectorAll(
            "#languageSelector, .language-selector select"
        );


    selectors.forEach(
        function (selector) {

            selector.value =
                currentLanguage;


            selector.addEventListener(
                "change",
                function () {

                    changeLanguage(
                        this.value
                    );

                }
            );

        }
    );


    applyTranslations();
}


/* =========================================================
   CHANGE LANGUAGE
   ========================================================= */

function changeLanguage(
    language
) {

    if (
        !translations[language]
    ) {

        language = "en";
    }


    currentLanguage =
        language;


    localStorage.setItem(
        LANGUAGE_KEY,
        currentLanguage
    );


    document.documentElement.lang =
        currentLanguage;


    document.querySelectorAll(
        "#languageSelector, .language-selector select"
    ).forEach(
        function (selector) {

            selector.value =
                currentLanguage;

        }
    );


    applyTranslations();


    updateTranslatedButtons();

    updateIRDisplay();

    updateHardwareSolenoidStatus();

    updateModeStatus();

    updateSerialButton();

    updateIrrigationUI();

    updateNPKDisplay();


    showNotification(
        getLanguageChangedMessage()
    );
}


/* =========================================================
   WHOLE WEBSITE TRANSLATION
   ========================================================= */

function applyTranslations() {

    document.documentElement.lang =
        currentLanguage;


    /* -----------------------------------------------------
       TEXT ELEMENTS
       ----------------------------------------------------- */

    const elements =
        document.querySelectorAll(
            "[data-translate]"
        );


    elements.forEach(
        function (element) {

            const key =
                element.getAttribute(
                    "data-translate"
                );


            if (
                !key
            ) {

                return;
            }


            const translated =
                translate(
                    key
                );


            if (
                translated
            ) {

                element.textContent =
                    translated;
            }

        }
    );


    /* -----------------------------------------------------
       ALTERNATIVE DATA-I18N SUPPORT
       ----------------------------------------------------- */

    const i18nElements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    i18nElements.forEach(
        function (element) {

            const key =
                element.getAttribute(
                    "data-i18n"
                );


            if (
                !key
            ) {

                return;
            }


            const translated =
                translate(
                    key
                );


            if (
                translated
            ) {

                element.textContent =
                    translated;
            }

        }
    );


    /* -----------------------------------------------------
       PLACEHOLDERS
       ----------------------------------------------------- */

    const placeholderElements =
        document.querySelectorAll(
            "[data-translate-placeholder]"
        );


    placeholderElements.forEach(
        function (element) {

            const key =
                element.getAttribute(
                    "data-translate-placeholder"
                );


            if (
                key
            ) {

                element.placeholder =
                    translate(
                        key
                    );
            }

        }
    );


    /* -----------------------------------------------------
       TITLE ATTRIBUTES
       ----------------------------------------------------- */

    const titleElements =
        document.querySelectorAll(
            "[data-translate-title]"
        );


    titleElements.forEach(
        function (element) {

            const key =
                element.getAttribute(
                    "data-translate-title"
                );


            if (
                key
            ) {

                element.title =
                    translate(
                        key
                    );
            }

        }
    );


    updateTranslatedButtons();

    updateIRDisplay();

    updateHardwareSolenoidStatus();

    updateModeStatus();

    updateSerialButton();

    updateIrrigationUI();
}


/* =========================================================
   TRANSLATED BUTTONS
   ========================================================= */

function updateTranslatedButtons() {

    const buttons =
        document.querySelectorAll(
            ".control-button[data-valve]"
        );


    buttons.forEach(
        function (button) {

            const valve =
                button.getAttribute(
                    "data-valve"
                );


            if (
                button.disabled
            ) {

                return;
            }


            button.textContent =
                getValveButtonText(
                    valve
                );

        }
    );
}


/* =========================================================
   LANGUAGE CHANGED MESSAGE
   ========================================================= */

function getLanguageChangedMessage() {

    if (
        currentLanguage === "gu"
    ) {

        return "ભાષા સફળતાપૂર્વક બદલાઈ.";
    }


    if (
        currentLanguage === "hi"
    ) {

        return "भाषा सफलतापूर्वक बदल दी गई।";
    }


    return "Language changed successfully.";
}


/* =========================================================
   NOTIFICATION
   ========================================================= */

function setupNotification() {

    const button =
        document.getElementById(
            "notificationButton"
        );


    if (button) {

        button.addEventListener(
            "click",
            function () {

                showNotification(
                    translate(
                        "systemRunning"
                    )
                );

            }
        );
    }
}


function showNotification(
    message
) {

    const popup =
        document.getElementById(
            "notificationPopup"
        );


    const messageElement =
        document.getElementById(
            "notificationMessage"
        );


    if (
        !popup ||
        !messageElement
    ) {

        console.log(
            "TerraPlus:",
            message
        );

        return;
    }


    messageElement.textContent =
        message;


    popup.classList.add(
        "show"
    );


    setTimeout(
        function () {

            popup.classList.remove(
                "show"
            );

        },
        3000
    );
}


/* =========================================================
   LOGOUT
   ========================================================= */

function setupLogout() {

    const button =
        document.getElementById(
            "logoutButton"
        );


    if (!button) {

        return;
    }


    button.addEventListener(
        "click",
        function () {

            const confirmLogout =
                confirm(
                    translate(
                        "logoutConfirm"
                    )
                );


            if (
                confirmLogout
            ) {

                window.location.href =
                    "index.html";
            }

        }
    );
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

    const toggle =
        document.getElementById(
            "menuToggle"
        );


    const sidebar =
        document.querySelector(
            ".sidebar"
        );


    if (
        toggle &&
        sidebar
    ) {

        toggle.addEventListener(
            "click",
            function () {

                sidebar.classList.toggle(
                    "open"
                );

            }
        );
    }
}


/* =========================================================
   CURRENT TIME
   ========================================================= */

function updateTime() {

    const element =
        document.getElementById(
            "currentTime"
        );


    if (!element) {

        return;
    }


    const now =
        new Date();


    let locale =
        "en-IN";


    if (
        currentLanguage === "gu"
    ) {

        locale =
            "gu-IN";
    }

    else if (
        currentLanguage === "hi"
    ) {

        locale =
            "hi-IN";
    }


    element.textContent =
        now.toLocaleString(
            locale,
            {

                weekday:
                    "long",

                day:
                    "2-digit",

                month:
                    "long",

                year:
                    "numeric",

                hour:
                    "2-digit",

                minute:
                    "2-digit",

                second:
                    "2-digit"

            }
        );
}


/* =========================================================
   CAPITALIZE
   ========================================================= */

function capitalize(
    text
) {

    if (!text) {

        return "";
    }


    return (
        text.charAt(0).toUpperCase() +
        text.slice(1)
    );
}


/* =========================================================
   SERIAL DISCONNECT
   ========================================================= */

async function disconnectSerial() {

    try {

        serialKeepReading =
            false;


        if (
            serialReader
        ) {

            try {

                await serialReader.cancel();

            }

            catch (error) {

                console.log(
                    "Reader cancel:",
                    error
                );
            }

            serialReader =
                null;
        }


        if (
            serialPort
        ) {

            try {

                await serialPort.close();

            }

            catch (error) {

                console.log(
                    "Port close:",
                    error
                );
            }
        }

    }

    catch (error) {

        console.error(
            "Disconnect error:",
            error
        );

    }


    serialConnected =
        false;

    serialPort =
        null;

    currentSolenoid =
        0;


    updateSerialButton();

    updateModeStatus();

    updateHardwareSolenoidStatus();


    showNotification(
        translate(
            "espDisconnected"
        )
    );
}


/* =========================================================
   BROWSER DISCONNECT EVENT
   ========================================================= */

if (
    "serial" in navigator
) {

    navigator.serial.addEventListener(
        "disconnect",
        function () {

            serialConnected =
                false;

            serialPort =
                null;

            currentSolenoid =
                0;

            updateSerialButton();

            updateModeStatus();

            updateHardwareSolenoidStatu/* =========================================================
   TERRAPLUS - DEVICES PAGE
   Step 6

   Works in:
   1. Demo Mode
   2. Live ESP8266 Mode

   ESP8266 API:
   http://10.251.21.182/api/data

   Expected JSON:
   {
       "device": "TerraPlus ESP8266-12E",
       "temperature": 30.7,
       "humidity": 60.9,
       "irDetected": false,
       "irStatus": "No Object",
       "wifi": "connected"
   }
   ========================================================= */


/* =========================================================
   CONFIGURATION
   ========================================================= */

const ESP8266_IP = "10.251.21.182";
const ESP8266_API = `http://${ESP8266_IP}/api/data`;

const LANGUAGE_KEY = "terraPlusLanguage";
const DEMO_MODE_KEY = "terraPlusDemoMode";
const NOTIFICATIONS_KEY = "terraPlusNotifications";


/* =========================================================
   GLOBAL STATE
   ========================================================= */

let currentLanguage =
    localStorage.getItem(LANGUAGE_KEY) || "en";

let demoModeEnabled =
    localStorage.getItem(DEMO_MODE_KEY) !== "false";

let notificationsEnabled =
    localStorage.getItem(NOTIFICATIONS_KEY) !== "false";


/* =========================================================
   DEMO SENSOR VARIABLES
   ========================================================= */

let demoTemperature = 28.6;
let demoHumidity = 64;
let demoIrDetected = false;


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

    en: {

        mainMenu: "MAIN MENU",
        dashboard: "Dashboard",
        analytics: "Analytics",
        npk: "NPK",
        irrigation: "Irrigation",
        devices: "Devices",
        settings: "Settings",
        logout: "Logout",

        smartFarmingDashboard:
            "Smart Farming Dashboard",

        english: "English",
        gujarati: "ગુજરાતી",
        hindi: "हिन्दी",

        terraPlusUser:
            "TerraPlus User",

        devicesPageTitle:
            "Connected Devices",

        monitorConnectedHardware:
            "Monitor and manage your TerraPlus hardware.",

        esp8266:
            "ESP8266",

        dht22Sensor:
            "DHT22 Sensor",

        temperatureHumidity:
            "Temperature & Humidity",

        irSensor:
            "IR Sensor",

        objectDetection:
            "Object Detection",

        irrigationRelay:
            "Irrigation Relay",

        relay5v2ch:
            "5V 2-Channel Relay Module",

        arduinoUno:
            "Arduino UNO",

        mainController:
            "Main Controller",

        npkSolenoidValves:
            "NPK Solenoid Valves",

        threeManualValves:
            "Three manual fertilizer valves",

        ready:
            "Ready",

        terraPlusNotification:
            "TerraPlus Notification",

        systemRunningNormally:
            "System running normally."
    },


    gu: {

        mainMenu: "મુખ્ય મેનુ",
        dashboard: "ડેશબોર્ડ",
        analytics: "વિશ્લેષણ",
        npk: "NPK",
        irrigation: "સિંચાઈ",
        devices: "ડિવાઇસ",
        settings: "સેટિંગ્સ",
        logout: "લૉગઆઉટ",

        smartFarmingDashboard:
            "સ્માર્ટ ફાર્મિંગ ડેશબોર્ડ",

        english: "English",
        gujarati: "ગુજરાતી",
        hindi: "हिन्दी",

        terraPlusUser:
            "TerraPlus વપરાશકર્તા",

        devicesPageTitle:
            "કનેક્ટેડ ડિવાઇસ",

        monitorConnectedHardware:
            "તમારા TerraPlus હાર્ડવેરનું નિરીક્ષણ અને સંચાલન કરો.",

        esp8266:
            "ESP8266",

        dht22Sensor:
            "DHT22 સેન્સર",

        temperatureHumidity:
            "તાપમાન અને ભેજ",

        irSensor:
            "IR સેન્સર",

        objectDetection:
            "વસ્તુ શોધ",

        irrigationRelay:
            "સિંચાઈ રિલે",

        relay5v2ch:
            "5V 2-ચેનલ રિલે મોડ્યુલ",

        arduinoUno:
            "Arduino UNO",

        mainController:
            "મુખ્ય કંટ્રોલર",

        npkSolenoidValves:
            "NPK સોલેનોઇડ વાલ્વ",

        threeManualValves:
            "ત્રણ મેન્યુઅલ ખાતર વાલ્વ",

        ready:
            "તૈયાર",

        terraPlusNotification:
            "TerraPlus સૂચના",

        systemRunningNormally:
            "સિસ્ટમ સામાન્ય રીતે ચાલી રહી છે."
    },


    hi: {

        mainMenu: "मुख्य मेनू",
        dashboard: "डैशबोर्ड",
        analytics: "विश्लेषण",
        npk: "NPK",
        irrigation: "सिंचाई",
        devices: "डिवाइस",
        settings: "सेटिंग्स",
        logout: "लॉगआउट",

        smartFarmingDashboard:
            "स्मार्ट फार्मिंग डैशबोर्ड",

        english: "English",
        gujarati: "ગુજરાતી",
        hindi: "हिन्दी",

        terraPlusUser:
            "TerraPlus उपयोगकर्ता",

        devicesPageTitle:
            "कनेक्टेड डिवाइस",

        monitorConnectedHardware:
            "अपने TerraPlus हार्डवेयर की निगरानी और प्रबंधन करें।",

        esp8266:
            "ESP8266",

        dht22Sensor:
            "DHT22 सेंसर",

        temperatureHumidity:
            "तापमान और आर्द्रता",

        irSensor:
            "IR सेंसर",

        objectDetection:
            "वस्तु पहचान",

        irrigationRelay:
            "सिंचाई रिले",

        relay5v2ch:
            "5V 2-चैनल रिले मॉड्यूल",

        arduinoUno:
            "Arduino UNO",

        mainController:
            "मुख्य कंट्रोलर",

        npkSolenoidValves:
            "NPK सोलनॉइड वाल्व",

        threeManualValves:
            "तीन मैनुअल उर्वरक वाल्व",

        ready:
            "तैयार",

        terraPlusNotification:
            "TerraPlus सूचना",

        systemRunningNormally:
            "सिस्टम सामान्य रूप से चल रहा है।"
    }
};


/* =========================================================
   TRANSLATE FUNCTION
   ========================================================= */

function translate(key) {

    if (
        translations[currentLanguage] &&
        translations[currentLanguage][key]
    ) {
        return translations[currentLanguage][key];
    }

    return translations.en[key] || key;
}


/* =========================================================
   APPLY TRANSLATIONS
   ========================================================= */

function applyTranslations() {

    document
        .querySelectorAll("[data-translate]")
        .forEach(element => {

            const key =
                element.getAttribute("data-translate");

            element.textContent =
                translate(key);
        });


    const languageSelector =
        document.getElementById(
            "languageSelector"
        );

    if (languageSelector) {

        languageSelector.value =
            currentLanguage;
    }


    updateModeDisplay();
}


/* =========================================================
   LANGUAGE SELECTOR
   ========================================================= */

function setupLanguage() {

    const selector =
        document.getElementById(
            "languageSelector"
        );

    if (!selector) {
        return;
    }


    selector.value =
        currentLanguage;


    selector.addEventListener(
        "change",
        function () {

            currentLanguage =
                this.value;


            localStorage.setItem(
                LANGUAGE_KEY,
                currentLanguage
            );


            applyTranslations();


            let message =
                "Language changed.";

            if (currentLanguage === "gu") {

                message =
                    "ભાષા બદલાઈ ગઈ છે.";

            } else if (currentLanguage === "hi") {

                message =
                    "भाषा बदल दी गई है.";
            }


            showNotification(message);
        }
    );
}


/* =========================================================
   DEMO SENSOR SIMULATION
   ========================================================= */

function simulateDemoData() {

    const temperatureChange =
        (Math.random() - 0.5) * 1.2;


    const humidityChange =
        (Math.random() - 0.5) * 4;


    demoTemperature +=
        temperatureChange;


    demoHumidity +=
        humidityChange;


    demoTemperature =
        Math.max(
            24,
            Math.min(
                36,
                demoTemperature
            )
        );


    demoHumidity =
        Math.max(
            45,
            Math.min(
                90,
                demoHumidity
            )
        );


    /*
       Occasionally change IR state.
    */

    if (Math.random() < 0.18) {

        demoIrDetected =
            !demoIrDetected;
    }


    updateSensorDisplay(
        demoTemperature,
        demoHumidity,
        demoIrDetected,
        demoIrDetected
            ? "Object Detected"
            : "No Object"
    );
}


/* =========================================================
   UPDATE SENSOR DISPLAY
   ========================================================= */

function updateSensorDisplay(
    temperature,
    humidity,
    irDetected,
    irStatus
) {

    const temperatureElement =
        document.getElementById(
            "deviceTemperature"
        );


    const humidityElement =
        document.getElementById(
            "deviceHumidity"
        );


    const irValueElement =
        document.getElementById(
            "deviceIrValue"
        );


    const irOverviewElement =
        document.getElementById(
            "irOverviewValue"
        );


    if (temperatureElement) {

        temperatureElement.textContent =
            `${Number(temperature).toFixed(1)} °C`;
    }


    if (humidityElement) {

        humidityElement.textContent =
            `${Number(humidity).toFixed(1)} %`;
    }


    const displayedIrStatus =
        irStatus ||
        (
            irDetected
                ? "Object Detected"
                : "No Object"
        );


    if (irValueElement) {

        irValueElement.textContent =
            displayedIrStatus;
    }


    if (irOverviewElement) {

        irOverviewElement.textContent =
            displayedIrStatus;
    }


    updateLastUpdate();
}


/* =========================================================
   ESP8266 LIVE DATA
   ========================================================= */

async function fetchESP8266Data() {

    /*
       Do not contact ESP8266 while Demo Mode
       is enabled.
    */

    if (demoModeEnabled) {

        return;
    }


    try {

        const response =
            await fetch(
                ESP8266_API,
                {
                    method: "GET",
                    cache: "no-store"
                }
            );


        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );
        }


        const data =
            await response.json();


        const temperature =
            Number(data.temperature);


        const humidity =
            Number(data.humidity);


        const irDetected =
            Boolean(data.irDetected);


        const irStatus =
            data.irStatus ||
            (
                irDetected
                    ? "Object Detected"
                    : "No Object"
            );


        if (
            !Number.isNaN(temperature) &&
            !Number.isNaN(humidity)
        ) {

            updateSensorDisplay(
                temperature,
                humidity,
                irDetected,
                irStatus
            );
        }


        updateESPStatus(
            true,
            data
        );


    } catch (error) {

        console.warn(
            "ESP8266 data unavailable:",
            error
        );


        updateESPStatus(false);


        updateLastUpdate();
    }
}


/* =========================================================
   ESP8266 STATUS
   ========================================================= */

function updateESPStatus(
    connected,
    data = null
) {

    const espStatus =
        document.getElementById(
            "espStatus"
        );


    const espConnection =
        document.getElementById(
            "espConnection"
        );


    const espWifi =
        document.getElementById(
            "espWifi"
        );


    const espIp =
        document.getElementById(
            "espIp"
        );


    const espOverviewValue =
        document.getElementById(
            "espOverviewValue"
        );


    const espOverviewStatus =
        document.getElementById(
            "espOverviewStatus"
        );


    /*
       DEMO MODE
    */

    if (demoModeEnabled) {

        if (espStatus) {

            espStatus.textContent =
                "Demo";

            espStatus.className =
                "device-status active";
        }


        if (espConnection) {

            espConnection.textContent =
                "Simulation";
        }


        if (espWifi) {

            espWifi.textContent =
                "Demo Mode";
        }


        if (espIp) {

            espIp.textContent =
                "Demo Mode";
        }


        if (espOverviewValue) {

            espOverviewValue.textContent =
                "Simulation";
        }


        if (espOverviewStatus) {

            espOverviewStatus.className =
                "status-pill demo";

            espOverviewStatus.innerHTML =
                '<span class="status-dot"></span>Demo Mode';
        }


        return;
    }


    /*
       LIVE MODE + CONNECTED
    */

    if (connected) {

        if (espStatus) {

            espStatus.textContent =
                "Online";

            espStatus.className =
                "device-status ready";
        }


        if (espConnection) {

            espConnection.textContent =
                "Connected";
        }


        if (espWifi) {

            espWifi.textContent =
                data && data.wifi
                    ? data.wifi
                    : "Connected";
        }


        if (espIp) {

            espIp.textContent =
                ESP8266_IP;
        }


        if (espOverviewValue) {

            espOverviewValue.textContent =
                "Connected";
        }


        if (espOverviewStatus) {

            espOverviewStatus.className =
                "status-pill online";

            espOverviewStatus.innerHTML =
                '<span class="status-dot"></span>Live';
        }

    }

    /*
       LIVE MODE + OFFLINE
    */

    else {

        if (espStatus) {

            espStatus.textContent =
                "Offline";

            espStatus.className =
                "device-status offline";
        }


        if (espConnection) {

            espConnection.textContent =
                "Offline";
        }


        if (espWifi) {

            espWifi.textContent =
                "Unavailable";
        }


        if (espIp) {

            espIp.textContent =
                ESP8266_IP;
        }


        if (espOverviewValue) {

            espOverviewValue.textContent =
                "Offline";
        }


        if (espOverviewStatus) {

            espOverviewStatus.className =
                "status-pill offline";

            espOverviewStatus.innerHTML =
                '<span class="status-dot"></span>Offline';
        }
    }
}


/* =========================================================
   DEMO / LIVE MODE
   ========================================================= */

function updateModeDisplay() {

    const sidebarText =
        document.getElementById(
            "sidebarModeText"
        );


    const systemValue =
        document.getElementById(
            "systemOverviewValue"
        );


    const systemStatus =
        document.getElementById(
            "systemOverviewStatus"
        );


    if (demoModeEnabled) {

        if (sidebarText) {

            sidebarText.textContent =
                "DEMO MODE";
        }


        if (systemValue) {

            systemValue.textContent =
                "Demo Mode";
        }


        if (systemStatus) {

            systemStatus.className =
                "status-pill demo";

            systemStatus.innerHTML =
                '<span class="status-dot"></span>Simulation';
        }


        updateESPStatus(false);

    } else {

        if (sidebarText) {

            sidebarText.textContent =
                "LIVE MODE";
        }


        if (systemValue) {

            systemValue.textContent =
                "Live Mode";
        }


        if (systemStatus) {

            systemStatus.className =
                "status-pill online";

            systemStatus.innerHTML =
                '<span class="status-dot"></span>Hardware';
        }
    }
}


/* =========================================================
   NPK VALVE STATE
   ========================================================= */

function readNpkState() {

    return {

        nitrogen:
            localStorage.getItem(
                "terraPlusNitrogenValve"
            ) === "active",


        phosphorus:
            localStorage.getItem(
                "terraPlusPhosphorusValve"
            ) === "active",


        potassium:
            localStorage.getItem(
                "terraPlusPotassiumValve"
            ) === "active"
    };
}


/* =========================================================
   UPDATE NPK DISPLAY
   ========================================================= */

function updateNpkDisplay() {

    const state =
        readNpkState();


    updateValve(
        "nitrogenDeviceState",
        state.nitrogen
    );


    updateValve(
        "phosphorusDeviceState",
        state.phosphorus
    );


    updateValve(
        "potassiumDeviceState",
        state.potassium
    );


    const overall =
        document.getElementById(
            "npkOverallStatus"
        );


    const activeCount =
        Object.values(state)
            .filter(Boolean)
            .length;


    if (overall) {

        if (activeCount > 0) {

            overall.textContent =
                `${activeCount} Active`;

            overall.className =
                "device-status active";

        } else {

            overall.textContent =
                "Ready";

            overall.className =
                "device-status ready";
        }
    }
}


/* =========================================================
   UPDATE INDIVIDUAL VALVE
   ========================================================= */

function updateValve(
    elementId,
    active
) {

    const element =
        document.getElementById(
            elementId
        );


    if (!element) {

        return;
    }


    if (active) {

        element.textContent =
            "Active";

        element.className =
            "valve-state active";

    } else {

        element.textContent =
            "Ready";

        element.className =
            "valve-state ready";
    }
}


/* =========================================================
   IRRIGATION STATE
   ========================================================= */

function updateIrrigationDisplay() {

    const motorState =
        localStorage.getItem(
            "terraPlusIrrigation"
        ) === "on";


    const motorElement =
        document.getElementById(
            "deviceMotorState"
        );


    const relayElement =
        document.getElementById(
            "deviceRelayState"
        );


    const relayStatus =
        document.getElementById(
            "irrigationRelayStatus"
        );


    if (motorElement) {

        motorElement.textContent =
            motorState
                ? "ON"
                : "OFF";
    }


    if (relayElement) {

        relayElement.textContent =
            motorState
                ? "ON"
                : "OFF";
    }


    if (relayStatus) {

        if (motorState) {

            relayStatus.textContent =
                "Active";

            relayStatus.className =
                "device-status active";

        } else {

            relayStatus.textContent =
                "Ready";

            relayStatus.className =
                "device-status ready";
        }
    }
}


/* =========================================================
   LAST UPDATE TIME
   ========================================================= */

function updateLastUpdate() {

    const element =
        document.getElementById(
            "lastDeviceUpdate"
        );


    if (!element) {

        return;
    }


    const now =
        new Date();


    element.textContent =
        now.toLocaleTimeString();
}


/* =========================================================
   NOTIFICATION
   ========================================================= */

function showNotification(message) {

    if (!notificationsEnabled) {

        return;
    }


    const popup =
        document.getElementById(
            "notificationPopup"
        );


    const messageElement =
        document.getElementById(
            "notificationMessage"
        );


    if (!popup || !messageElement) {

        return;
    }


    messageElement.textContent =
        message;


    popup.classList.add("show");


    clearTimeout(
        window.terraPlusNotificationTimer
    );


    window.terraPlusNotificationTimer =
        setTimeout(
            function () {

                popup.classList.remove(
                    "show"
                );

            },
            3500
        );
}


/* =========================================================
   NOTIFICATION SETUP
   ========================================================= */

function setupNotification() {

    const closeButton =
        document.getElementById(
            "closeNotification"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function () {

                const popup =
                    document.getElementById(
                        "notificationPopup"
                    );


                if (popup) {

                    popup.classList.remove(
                        "show"
                    );
                }
            }
        );
    }


    const notificationButton =
        document.getElementById(
            "notificationButton"
        );


    if (notificationButton) {

        notificationButton.addEventListener(
            "click",
            function () {

                showNotification(
                    translate(
                        "systemRunningNormally"
                    )
                );
            }
        );
    }
}


/* =========================================================
   LOGOUT
   ========================================================= */

function setupLogout() {

    const logoutButton =
        document.getElementById(
            "logoutButton"
        );


    if (!logoutButton) {

        return;
    }


    logoutButton.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "terraPlusLoggedIn"
            );


            window.location.href =
                "index.html";
        }
    );
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

    const button =
        document.getElementById(
            "mobileMenuButton"
        );


    const sidebar =
        document.querySelector(
            ".sidebar"
        );


    if (!button || !sidebar) {

        return;
    }


    button.addEventListener(
        "click",
        function () {

            sidebar.classList.toggle(
                "active"
            );
        }
    );
}


/* =========================================================
   REFRESH SHARED STATES
   ========================================================= */

function refreshSharedStates() {

    updateNpkDisplay();

    updateIrrigationDisplay();


    if (demoModeEnabled) {

        updateESPStatus(false);

    } else {

        fetchESP8266Data();
    }
}


/* =========================================================
   STORAGE EVENT
   ========================================================= */

window.addEventListener(
    "storage",
    function (event) {

        /*
           NPK
        */

        if (
            event.key ===
            "terraPlusNitrogenValve" ||

            event.key ===
            "terraPlusPhosphorusValve" ||

            event.key ===
            "terraPlusPotassiumValve"
        ) {

            updateNpkDisplay();
        }


        /*
           Irrigation
        */

        if (
            event.key ===
            "terraPlusIrrigation"
        ) {

            updateIrrigationDisplay();
        }


        /*
           Demo Mode
        */

        if (
            event.key ===
            DEMO_MODE_KEY
        ) {

            demoModeEnabled =
                event.newValue !== "false";


            updateModeDisplay();


            refreshSharedStates();
        }


        /*
           Notifications
        */

        if (
            event.key ===
            NOTIFICATIONS_KEY
        ) {

            notificationsEnabled =
                event.newValue !== "false";
        }


        /*
           Language
        */

        if (
            event.key ===
            LANGUAGE_KEY
        ) {

            currentLanguage =
                event.newValue || "en";


            applyTranslations();
        }
    }
);


/* =========================================================
   PERIODIC REFRESH
   ========================================================= */

setInterval(
    function () {

        updateNpkDisplay();

        updateIrrigationDisplay();


        if (demoModeEnabled) {

            simulateDemoData();

        } else {

            fetchESP8266Data();
        }

    },
    5000
);


/* =========================================================
   PAGE INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "TerraPlus Devices Page Loaded"
        );


        setupLanguage();

        setupNotification();

        setupLogout();

        setupMobileMenu();


        applyTranslations();


        updateNpkDisplay();

        updateIrrigationDisplay();

        updateModeDisplay();


        if (demoModeEnabled) {

            simulateDemoData();

        } else {

            fetchESP8266Data();
        }


        updateLastUpdate();
    }
);s();

            showNotification(
                translate(// ==========================================
// TERRAPLUS - NPK CONTROL
// ==========================================
//
// DEMO MODE
// ---------
// This file currently controls the NPK page
// without requiring ESP8266 hardware.
//
// Later, ESP8266 API commands can be added
// inside sendValveCommand().
//
// ==========================================


// ==========================================
// DEMO MODE
// ==========================================

const NPK_DEMO_MODE = true;


// ==========================================
// VALVE STATES
// ==========================================
//
// Each valve works independently.
//
// Multiple valves can be ON at the same time.
//
// ==========================================

const valveStates = {
    nitrogen:
        localStorage.getItem(
            "terraPlusNitrogenValve"
        ) === "active",

    phosphorus:
        localStorage.getItem(
            "terraPlusPhosphorusValve"
        ) === "active",

    potassium:
        localStorage.getItem(
            "terraPlusPotassiumValve"
        ) === "active"
};


// ==========================================
// VALVE INFORMATION
// ==========================================

const valveInfo = {

    nitrogen: {
        name: "Nitrogen",
        icon: "🌿"
    },

    phosphorus: {
        name: "Phosphorus",
        icon: "🌱"
    },

    potassium: {
        name: "Potassium",
        icon: "🌾"
    }

};


// ==========================================
// PAGE INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("TerraPlus NPK page loaded.");

    initializeNPKPage();

});


// ==========================================
// INITIALIZE NPK PAGE
// ==========================================

function initializeNPKPage() {

    updateAllValveUI();

    updateActiveValveList();

    setupLanguageSelector();

    setupNotificationButton();

    loadSavedUser();

    console.log("NPK controls initialized.");

}


// ==========================================
// TOGGLE VALVE
// ==========================================

function toggleValve(valve) {

    // Make sure the valve exists
    if (!Object.prototype.hasOwnProperty.call(valveStates, valve)) {

        console.error("Unknown valve:", valve);

        return;
    }


    // Reverse valve state
    valveStates[valve] = !valveStates[valve];


    // Save the shared valve state so Dashboard and Devices
    // can display the same status.
    localStorage.setItem(
        "terraPlus" +
        valve.charAt(0).toUpperCase() +
        valve.slice(1) +
        "Valve",
        valveStates[valve]
            ? "active"
            : "inactive"
    );


    // Update visual interface
    updateValveUI(valve);

    // Update active valve summary
    updateActiveValveList();


    // Send command
    sendValveCommand(
        valve,
        valveStates[valve]
    );


    // Activity message
    const stateText =
        valveStates[valve]
            ? "activated"
            : "deactivated";


    console.log(
        `${valveInfo[valve].name} valve ${stateText}.`
    );


    showNPKNotification(
        `${valveInfo[valve].name} valve ${stateText}.`
    );

}


// ==========================================
// UPDATE ALL VALVE UI
// ==========================================

function updateAllValveUI() {

    Object.keys(valveStates).forEach(function (valve) {

        updateValveUI(valve);

    });

}


// ==========================================
// UPDATE INDIVIDUAL VALVE UI
// ==========================================

function updateValveUI(valve) {

    const button =
        document.getElementById(
            valve + "Button"
        );

    const dot =
        document.getElementById(
            valve + "Dot"
        );

    const status =
        document.getElementById(
            valve + "Status"
        );


    // Safety check
    if (!button || !dot || !status) {

        console.warn(
            "NPK UI elements not found for:",
            valve
        );

        return;
    }


    // ======================================
    // VALVE ON
    // ======================================

    if (valveStates[valve]) {

        button.classList.add("active");

        button.innerHTML =
            "🟢 VALVE ACTIVE";

        dot.classList.add("active");

        status.classList.add("active");

        status.innerHTML =
            "Valve ON";

    }


    // ======================================
    // VALVE OFF
    // ======================================

    else {

        button.classList.remove("active");

        button.innerHTML =
            "ACTIVATE VALVE";

        dot.classList.remove("active");

        status.classList.remove("active");

        status.innerHTML =
            "Valve OFF";

    }

}


// ==========================================
// ACTIVE VALVE SUMMARY
// ==========================================

function updateActiveValveList() {

    const list =
        document.getElementById(
            "activeValveList"
        );


    if (!list) {

        return;
    }


    const activeValves = [];


    // Nitrogen
    if (valveStates.nitrogen) {

        activeValves.push(
            "🌿 Nitrogen Valve"
        );

    }


    // Phosphorus
    if (valveStates.phosphorus) {

        activeValves.push(
            "🌱 Phosphorus Valve"
        );

    }


    // Potassium
    if (valveStates.potassium) {

        activeValves.push(
            "🌾 Potassium Valve"
        );

    }


    // ======================================
    // NO ACTIVE VALVES
    // ======================================

    if (activeValves.length === 0) {

        list.innerHTML =
            `
            <span class="none-active">
                No valves are currently active.
            </span>
            `;

        return;
    }


    // ======================================
    // ACTIVE VALVES
    // ======================================

    list.innerHTML =
        activeValves
            .map(function (valve) {

                return `
                    <span class="active-chip">
                        🟢 ${valve} ON
                    </span>
                `;

            })
            .join("");

}


// ==========================================
// ESP8266 VALVE COMMAND
// ==========================================
//
// For now this only runs in DEMO MODE.
//
// Later we can connect this function to
// the ESP8266 API.
//
// ==========================================

function sendValveCommand(valve, state) {

    console.log(
        "Valve command:",
        valve,
        state ? "ON" : "OFF"
    );


    // ======================================
    // DEMO MODE
    // ======================================

    if (NPK_DEMO_MODE) {

        console.log(
            "DEMO MODE: ESP8266 command not sent."
        );

        return;
    }


    // ======================================
    // FUTURE ESP8266 CONNECTION
    // ======================================
    //
    // Example location for future API:
    //
    // fetch(...)
    //
    // We are intentionally not connecting
    // to hardware yet.
    //
    // ======================================

}


// ==========================================
// NOTIFICATION
// ==========================================

function showNPKNotification(message) {

    console.log(
        "NPK Notification:",
        message
    );


    /*
     * If the page has a notification
     * element, briefly show the message.
     */

    const notification =
        document.querySelector(
            ".notification"
        );


    if (!notification) {

        return;
    }


    const originalText =
        notification.innerHTML;


    notification.innerHTML =
        "✅";


    notification.title =
        message;


    setTimeout(function () {

        notification.innerHTML =
            originalText;

        notification.title =
            "Notifications";

    }, 1800);

}


// ==========================================
// NOTIFICATION BUTTON
// ==========================================

function setupNotificationButton() {

    const notification =
        document.querySelector(
            ".notification"
        );


    if (!notification) {

        return;
    }


    notification.style.cursor =
        "pointer";


    notification.addEventListener(
        "click",
        function () {

            showNPKNotification(
                "No new notifications."
            );

        }
    );

}


// ==========================================
// LANGUAGE SELECTOR
// ==========================================

function setupLanguageSelector() {

    const language =
        document.querySelector(
            ".language"
        );


    if (!language) {

        return;
    }


    language.addEventListener(
        "change",
        function () {

            console.log(
                "Language selected:",
                language.value
            );

            showNPKNotification(
                "Language selection saved."
            );

        }
    );

}


// ==========================================
// LOAD SAVED USER
// ==========================================

function loadSavedUser() {

    const userNameElement =
        document.querySelector(
            ".user-name"
        );


    if (!userNameElement) {

        return;
    }


    const savedName =
        localStorage.getItem(
            "farmerName"
        );


    if (savedName) {

        userNameElement.textContent =
            savedName;

    }

}


// ==========================================
// OPTIONAL GLOBAL FUNCTION
// ==========================================
//
// This allows the HTML button:
//
// onclick="toggleValve('nitrogen')"
//
// to continue working.
//
// ==========================================

window.toggleValve =
    toggleValve;


// ==========================================
// INITIAL DEBUG INFORMATION
// ==========================================

console.log(
    "TerraPlus NPK Demo Mode:",
    NPK_DEMO_MODE
);

// ==========================================
// CROSS-PAGE VALVE STATE SYNC
// ==========================================

window.addEventListener(
    "storage",
    function (event) {

        if (
            event.key ===
            "terraPlusNitrogenValve"
        ) {

            valveStates.nitrogen =
                event.newValue === "active";

        }


        if (
            event.key ===
            "terraPlusPhosphorusValve"
        ) {

            valveStates.phosphorus =
                event.newValue === "active";

        }


        if (
            event.key ===
            "terraPlusPotassiumValve"
        ) {

            valveStates.potassium =
                event.newValue === "active";

        }


        if (
            event.key ===
            "terraPlusNitrogenValve" ||

            event.key ===
            "terraPlusPhosphorusValve" ||

            event.key ===
            "terraPlusPotassiumValve"
        ) {

            updateAllValveUI();

            updateActiveValveList();

        }


        if (
            event.key ===
            "terraPlusLanguage"
        ) {

            const selector =
                document.querySelector(
                    ".language"
                );

            if (selector) {

                selector.value =
                    event.newValue || "en";

            }

        }

    }
);


console.log(
    "Initial valve states:",
    valveStates
);
                    "espDisconnected"
                )
            );

        }
    );
}
                    );

                }

            }
        );

    }
);
