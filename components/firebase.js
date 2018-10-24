class FireBase {
    constructor(){
    firebase.initializeApp(this.config);
    this.database = firebase.database();
    this.ref = this.database.ref('coordinates');
}
     config = {
        
    };




    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }


    showPosition(position) {
         let data = {
                latitude: "Latitude",
                latitudeGeo: position.coords.latitude,
                longitude: "Longitude",
                longitudeGeo: position.coords.longitude
            };
        this.ref.push(data);
        console.log(data.latitude);
        console.log(data.latitudeGeo)
    }
}

export default  FireBase;