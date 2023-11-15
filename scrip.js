const apiKey = 'd3c39f57206d5904890771c822ffaac3';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';



function img (mainm){
    switch (mainm) {
        case 'Clouds':
          return 'images/clouds.png';
        case 'Clear':
          return 'images/clear.png';
        case 'Rain':
          return 'images/rain.png';
        case 'Drizzle':
          return 'images/drizzle.png';
        case 'Mist':
          return 'images/mist.png';
        default:
          return 'images/default.png';
      }
}





document.addEventListener ('DOMContentLoaded', function(){
    const searh=document.querySelector('.search input');
    const btn_searh=document.querySelector('.search button');
    const clima=document.querySelector('.weather');
    const error=document.querySelector('.error');
    const imgclima=document.querySelector('.weather-icon');
    const tmp=document.querySelector('.temp');
    const ciudad=document.querySelector('.city');
    const humedad=document.querySelector('.humidity');
    const vien=document.querySelector('.wind');



    btn_searh.addEventListener('click',function(){

        const searchedciudad= searh.value.trim();

        if (searchedciudad !==''){

            const url=`${apiUrl}${searchedciudad}&appid=${apiKey}`;
            axios.get(url).then (function(response){
                const datos=response.data;
                clima.style.display = 'block';
                error.style.display = 'none';
                const mainm= datos.weather[0].main;
                imagenclima (mainm);
                
                const tmpe= Math.round(datos.main.temp);
                tmp.textContent=`${tmpe}°C`;
                const nomcuidad=datos.name;
                ciudad.textContent= nomcuidad;
                const hum= datos.main.humidity;
                humedad.textContent = `${hum}%`;
                const wsped= datos.wind.speed;
                vien.textContent = `${wsped} km/h`;
            })
             
            
            .catch (function (error){
                clima.style.display = 'none';
                error.style.display = 'block';
            });
            
        }
    }); 
    
function imagenclima (mainm){
    const iconPath= img (mainm);
    imgclima.src=iconPath;
}

    
    
       

        
        });
    

   
    

    
   
   



