var mapDiv = document.getElementById('map'); mapDiv.style.height = '270px'; mapDiv.style.width = '100%'; ymaps.ready(function () { var myMap = new ymaps.Map('map', { center: [55.751574, 37.573856], zoom: 16 }, { searchControlProvider: 'yandex#search' }), MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'), myPlacemark = new ymaps.Placemark([55.751574, 37.573856], { iconLayout: 'default#image', iconImageHref: 'https://i.imgur.com/gmyd9Fi.png', iconImageSize: [32, 32], iconImageOffset: [-5, -38] }); myMap.behaviors.disable('scrollZoom'); myMap.geoObjects.add(myPlacemark); });