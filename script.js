
var timer = setInterval(displayWorldTime,  1000);

var cities = [
        {name: "Istanbul", utcOffset: 3, flag: "Turkey.png"},
        {name: "New York City", utcOffset: -5, flag: "United-States-of-America.png"},
        {name: "Tokyo", utcOffset: 9, flag: "Japan.png"},
        {name: "Moscow", utcOffset: 3, flag: "Russia.png"},
        {name: "Rio De Janeiro", utcOffset: -3, flag: "Brazil.png"},
        {name: "Sydney", utcOffset: 11, flag: "Australia.png"},
        {name: "Vancouver", utcOffset: -8, flag: "Canada.png"},
        {name: "Beijing", utcOffset: 8, flag: "China.png"},
        {name: "Accra", utcOffset: 0, flag: "Ghana.png"},
        {name: "Addis Ababa", utcOffset: 3, flag: "Ethiopia.png"},
        {name: "Melbourne", utcOffset: 10, flag: "Australia.png"},
        {name: "Algiers", utcOffset: 1, flag: "Algeria.png"},
        {name: "Almaty", utcOffset: 6, flag: "Kazakhstan.png"},
        {name: "Amman", utcOffset: 3, flag: "Jordan.png"},
        {name: "Amsterdam", utcOffset: 2, flag: "Netherlands.png"},
        {name: "Anadyr", utcOffset: 12, flag: "Russia.png"},
        {name: "Anchorage", utcOffset: -8, flag: "United-States-of-America.png"},
        {name: "Ankara", utcOffset: 3, flag: "Turkey.png"},
        {name: "Antananarivo", utcOffset: 3, flag: "Madagascar.png"},
        {name: "Asuncion", utcOffset: -4, flag: "Paraguay.png"},
        {name: "Athens", utcOffset: 3, flag: "Grecee.png"},
        {name: "Atlanta", utcOffset: -4, flag: "United-States-of-America.png"},
        {name: "Auckland", utcOffset: 12, flag: "New-Zealand.png"},
        {name: "Baghdad", utcOffset: 3, flag: "Iraq.png"},
        {name: "Bangkok", utcOffset: 7, flag: "Thailand.png"},
        {name: "Barcelona", utcOffset: 2, flag: "Spain.png"},
        {name: "Beirut", utcOffset: 3, flag: "Lebanon.png"},
        {name: "Belgrade", utcOffset: 2, flag: "Serbia.png"},
        {name: "Berlin", utcOffset: 2, flag: "Germany.png"},
        {name: "Bogota", utcOffset: -5, flag: "Colombia.png"},
        {name: "Boston", utcOffset: -4, flag: "United-States-of-America.png"},
        {name: "Brasilia", utcOffset: -3, flag: "Brazil.png"},
        {name: "Brisbane", utcOffset: 10, flag: "Australia.png"},
        {name: "Brussels", utcOffset: 2, flag: "Belgium.png"},
        {name: "Bucharest", utcOffset: -8, flag: "Romania.png"},
        {name: "Budapest", utcOffset: 2, flag: "Hungary.png"},
        {name: "Buenos Aires", utcOffset: -3, flag: "Argentina.png"},
        {name: "Cairo", utcOffset: 3, flag: "Egypt.png"},
        {name: "Calgary", utcOffset: -6, flag: "Canada.png"},
        {name: "Canberra", utcOffset: 10, flag: "Australia.png"},
        {name: "Cape Town", utcOffset: 2, flag: "South-Africa.png"},
        {name: "Caracas", utcOffset: -4, flag: "Venezuela.png"},
        {name: "Casablanca", utcOffset: 1, flag: "Morocco.png"},
        {name: "Chicago", utcOffset: -5, flag: "United-States-of-America.png"},
        {name: "Copenhagen", utcOffset: 2, flag: "Denmark.png"},
        {name: "Dallas", utcOffset: -5, flag: "United-States-of-America.png"},
        {name: "Dar es Salaam", utcOffset: 3, flag: "Tanzania.png"},
        {name: "Denver", utcOffset: -6, flag: "United-States-of-America.png"},
        {name: "Detroit", utcOffset: -4, flag: "United-States-of-America.png"},
        {name: "Dhaka", utcOffset: 6, flag: "Bangladesh.png"},
        {name: "Doha", utcOffset: 3, flag: "Qatar.png"},
        {name: "Dubai", utcOffset: 4, flag: "United-Arab-Emirates.png"},
        {name: "Dublin", utcOffset: 1, flag: "Ireland.png"},
        {name: "Edmonton", utcOffset: -6, flag: "Canada.png"},
        {name: "Frankfurt", utcOffset: 2, flag: "Germany.png"},
        {name: "Guatemala City", utcOffset: -6, flag: "Guatemala.png"},
        {name: "Halifax", utcOffset: -3, flag: "Canada.png"},
        {name: "Hanoi", utcOffset: 7, flag: "Vietnam.png"},
        {name: "Harare", utcOffset: 2, flag: "Zimbabwe.png"},
        {name: "Havana", utcOffset: -4, flag: "Cuba.png"},
        {name: "Helsinki", utcOffset: 3, flag: "Finland.png"},
        {name: "Honolulu", utcOffset: -10, flag: "United-States-of-America.png"},
        {name: "Houston", utcOffset: -5, flag: "United-States-of-America.png"},
        {name: "Idianapolis", utcOffset: -4, flag: "United-States-of-America.png"},
        {name: "Islamabad", utcOffset: 5, flag: "Pakistan.png"},
        {name: "Jakarta", utcOffset: 7, flag: "Indonesia.png"},
        {name: "Jerusalem", utcOffset: 3, flag: "Israel.png"},
        {name: "Johannesburg", utcOffset: 2, flag: "South-Africa.png"},
        {name: "Khartoum", utcOffset: 2, flag: "Sudan.png"},
        {name: "Kiev", utcOffset: 3, flag: "Ukraine.png"},
        {name: "Kingston", utcOffset: -5, flag: "Jamaica.png"},
        {name: "Kinshasa", utcOffset: 1, flag: "Congo-(Democratic).png"},
        {name: "Kiritimati", utcOffset: 14, flag: "Kiribati.png"},
        {name: "Kuala Lumpar", utcOffset: 8, flag: "Malaysia.png"},
        {name: "Kuwait City", utcOffset: 3, flag: "Kuwait.png"},
        {name: "La Paz", utcOffset: -4, flag: "Bolivia.png"},
        {name: "Lagos", utcOffset: 1, flag: "Nigeria.png"},
        {name: "Lahore", utcOffset: 5, flag: "Pakistan.png"},
        {name: "Las Vegas", utcOffset: -7, flag: "United-States-of-America.png"},
        {name: "Lima", utcOffset: -5, flag: "Peru.png"},
        {name: "Lisbon", utcOffset: 1, flag: "Portugal.png"},
        {name: "London", utcOffset: 1, flag: "United-Kingdom.png"},
        {name: "Los Angeles", utcOffset: -7, flag: "United-States-of-America.png"},
        {name: "Madrid", utcOffset: 2, flag: "Spain.png"},
        {name: "Managua", utcOffset: -6, flag: "Nicaragua.png"},
        {name: "Manila", utcOffset: 8, flag: "Philippines.png"},
        {name: "Mexico City", utcOffset: -6, flag: "Mexico.png"},
        {name: "Miami", utcOffset: -4, flag: "United-States-of-America.png"},
        {name: "Minneapolis", utcOffset: -5, flag: "United-States-of-America.png"},
        {name: "Minsk", utcOffset: 3, flag: "Belarus.png"},
        {name: "Montevideo", utcOffset: -3, flag: "Uruguay.png"},
        {name: "Nairobi", utcOffset: 3, flag: "Kenya.png"},
        {name: "Nassau", utcOffset: -4, flag: "Bahamas.png"},
        {name: "New Orleans", utcOffset: -5, flag: "United-States-of-America.png"},
        {name: "Oslo", utcOffset: 2, flag: "Norway.png"},
        {name: "Ottawa", utcOffset: -4, flag: "Canada.png"},
        {name: "Paris", utcOffset: 2, flag: "France.png"},
        {name: "Perth", utcOffset: 8, flag: "Australia.png"},
        {name: "Prague", utcOffset: 2, flag: "Czech-Republic.png"},
        {name: "Reykjavik", utcOffset: 0, flag: "Iceland.png"},
        {name: "Riyadh", utcOffset: 3, flag: "Saudi-Arabia.png"},
        {name: "Rome", utcOffset: 2, flag: "Italy.png"},
        {name: "San Franciso", utcOffset: -7, flag: "United-States-of-America.png"},
        {name: "San Salvador", utcOffset: -6, flag: "El-Salvador.png"},
        {name: "San Tiago", utcOffset: -4, flag: "Chile.png"},
        {name: "Santo Domingo", utcOffset: -4, flag: "Dominican-Republic.png"},
        {name: "Sao Paulo", utcOffset: -3, flag: "Brazil.png"},
        {name: "Seoul", utcOffset: 9, flag: "Korea,-South.png"},
        {name: "Shanghai", utcOffset: 8, flag: "China.png"},
        {name: "Singapore", utcOffset: 8, flag: "Singapore.png"},
        {name: "Sofia", utcOffset: 3, flag: "Bulgaria.png"},
        {name: "Stockholm", utcOffset: 2, flag: "Sweden.png"},
        {name: "Suva", utcOffset: 12, flag: "fiji.png"},
        {name: "Taipei", utcOffset: 8, flag: "Taiwan.png"},
        {name: "Tallinn", utcOffset: 3, flag: "Estonia.png"},
        {name: "Tashkent", utcOffset: 5, flag: "Uzbekistan.png"},
        {name: "Tegucigalpa", utcOffset: -6, flag: "Honduras.png"},
        {name: "Toronto", utcOffset: -4, flag: "Canada.png"},
        {name: "Vienna", utcOffset: 2, flag: "Austria.png"},
        {name: "Warsaw", utcOffset: 2, flag: "Poland.png"},
        {name: "Washington DC", utcOffset: -4, flag: "United-States-of-America.png"},
        {name: "Winnipeg", utcOffset: -5, flag: "Canada.png"},
        {name: "Zagreb", utcOffset: 2, flag: "Croatia.png"},
        {name: "Zurich", utcOffset: 2, flag: "Switzerland.png"},
    ]
;

cities.sort(compare);

function compare(a, b){
    var cityA = a.name;
    var cityB = b.name;
    
    var comparison = 0;
    if(cityA>cityB){
        comparison = 1;
    } else if (cityA<cityB){
        comparison = -1;
    }
    return comparison;
}

function getUtcTime(){
    var dt = new Date();
    var utcOffset = dt.getTimezoneOffset() * 60000;
    var utcTime = new Date(dt.getTime() + utcOffset);
    return utcTime.getTime();
}

function getCurrentTime(utcOffset){
    var mil = 1000 * 60 * 60;
    var time = new Date(getUtcTime() + utcOffset * mil);
    return time.toLocaleTimeString();
}

function displayWorldTime(){
    var dt = new Date();
    document.getElementById("local").innerHTML = "Local time : " + dt.toLocaleTimeString();
    
    var output =`<table id="cities">`;
        output += `<tr>
                    <th class="col1">
                    </th><th class="col2">
                    </th><th></th>
                </tr>
        `;

    for (a=0; a<cities.length; a++){
        output += `
                <tr>
                <td><img src="img/${cities[a].flag}"/></td>
                <td>${cities[a].name}</td>
                <td>${getCurrentTime(cities[a].utcOffset)}</td>
    `;
    
}
    output +=`</table>`;
    document.getElementById("output").innerHTML = output;
}
