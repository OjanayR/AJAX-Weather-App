
function getData(evt) {
  evt.preventDefault()

  const search = $("#search").val()

  const data = $.ajax(
    {url:`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=61263e3662d38150eec51e92385c1a25`}
  )
  .then(
    (data)=>{
      console.log(data)
      $('#city').text(data.name)
      $('#temp').text(`${data.main.temp}° F`)
      $('#feels').text(`${data.main.feels_like}° F`)
      $('#weather').text(data.weather[0].description)
    },
    (error)=> {
      console.log("bad request: ",error)
    }
  )
}
$('form').on('submit', getData)