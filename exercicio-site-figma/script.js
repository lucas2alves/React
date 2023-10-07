if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
}

function showLocation(postion) {
    const long = postion.coords.longitude;
    const lat = postion.coords.latitude;

    const url = `https://maps.google.com/maps?width=600&height=400&hl=&q=${lat},${long}&ie=UTF8&t=p&z=14&iwloc=B&output=embed`;

    window.open(url, 'map')
}