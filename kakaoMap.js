function kakaoMap() {
    var mapContainer = document.getElementById('map'),
        mapOption = {
            center: new kakao.maps.LatLng(37.5012, 127.0396),
            level: 3
        };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커
    var markerPosition = new kakao.maps.LatLng(37.5012, 127.0396);
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    marker.setMap(map);

    // 인포윈도우
    var iwContent = '<div style="padding:5px;font-size:12px;">더채플 웨딩홀</div>';
    var infowindow = new kakao.maps.InfoWindow({
        content: iwContent
    });
    infowindow.open(map, marker);
}

$(function() {
    kakaoMap();
});
