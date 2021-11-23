function initMap() {
    const myLatLon = {
        lat: 37.782293,
        lon: -122.391240
    }
    const map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: myLatLon,
            scrollwheel: false,
            zoom: 18
        }
    );
    const marker = new google.maps.Marker({
        position: myLatLon,
        map: map,
        title: 'GitHub'
    });
}