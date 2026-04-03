const apiKey = "YOUR_API_KEY";

let chart;

const getWeather = async () => {

const city = document.getElementById("city").value;

if(city===""){
alert("Enter city name");
return;
}

try{

const res = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
);

const data = await res.json();

const temp = data.main.temp;
const humidity = data.main.humidity;
const wind = data.wind.speed;

document.getElementById("result").innerHTML = `
Temperature: ${temp} °C <br>
Humidity: ${humidity}% <br>
Wind Speed: ${wind} m/s
`;

drawChart(temp, humidity, wind);

}catch{

document.getElementById("result").innerHTML = "Error fetching data";

}

};

const drawChart = (t,h,w) => {

const ctx = document.getElementById("chart");

if(chart) chart.destroy();

chart = new Chart(ctx,{
type:'bar',
data:{
labels:['Temperature','Humidity','Wind'],
datasets:[{
label:'Weather Data',
data:[t,h,w]
}]
}
});

};
