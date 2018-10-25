class FireBase {
    constructor(){
    firebase.initializeApp(this.config);
    this.database = firebase.database();
    this.ref = this.database.ref('coordinates');

}
     config = {
        apiKey: "SORRY BUT YOU NEED YOUR OWN",
        authDomain: "SORRY BUT YOU NEED YOUR OWN",
        databaseURL: "SORRY BUT YOU NEED YOUR OWN",
        projectId: "SORRY BUT YOU NEED YOUR OWN",
        storageBucket: "SORRY BUT YOU NEED YOUR OWN",
        messagingSenderId: "SORRY BUT YOU NEED YOUR OWN"
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
