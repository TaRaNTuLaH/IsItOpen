class FireBase {
    constructor(){
    firebase.initializeApp(this.config);
    this.database = firebase.database();
    this.ref = this.database.ref('coordinates');

}
     config = {
        apiKey: "AIzaSyAXyugUk6GTppEmhoAndjGWGaLWOmCv9WQ",
        authDomain: "isitopen-project.firebaseapp.com",
        databaseURL: "https://isitopen-project.firebaseio.com",
        projectId: "isitopen-project",
        storageBucket: "isitopen-project.appspot.com",
        messagingSenderId: "341865480957"
    };



    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }



    getData( callback ){
        this.ref.once("value").then(function(data) {
            callback(data.val() );
        },function (error) {
            console.log("Error: " + error.code);
        });
    }
    showPosition(position) {
         this.data = {
                latitude: "Latitude",
                latitudeGeo: position.coords.latitude,
                longitude: "Longitude",
                longitudeGeo: position.coords.longitude
            };
        this.ref.push(this.data);
        console.log(this.data.latitude);
        console.log(this.data.latitudeGeo)
    }
}

export default  FireBase;