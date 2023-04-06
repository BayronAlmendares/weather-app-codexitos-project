import React, {useState} from 'react';
import axios, { Axios } from 'axios';

function App():JSX.Element {

  const [data, setData] = useState<any>({});
  const [location, setLocation]= useState<string>('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f2056349f688ab93cf615626f8a40725`

  const searchLocation=(event:any)=>{
   if(event.key === 'Enter'){
      axios.get(url).then( (response) => {
        setData(response.data);
        console.log(response.data);
      })
   }
  }

  return (
    <div className="App">
      
      <div className='search'>
        <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyDown ={searchLocation}
          placeholder='Enter Location'
          type='text'
        />
      </div>

      <div className='container'>

          <div className='top'>
            <div className='location'>
              <p>{data.name}</p>
            </div>
            <div className='temp'>
              {data.main ? <h1>{data.main.temp}°C</h1> : null }
              {/* <h1>{data.main.temp}</h1> */}
            </div>
            {/* {data.weather ? <div className='description'>{data.weather[0].description}</div> : null} */}
          </div>

      {/* {data.main ? 
                <div className='bottom'>
                  <div className='feels'>
                    {data.main ? <p className='bold'>{data.main.feels_like}°C</p> : null}
                      <p>Feels Like</p>
                  </div>
                  <div className='humidity'>
                  {data.main ? <p>{data.main.humidity}</p> : null}
                    <p>Humidity</p>
                  </div>
                  <div className='wind'>
                    {data.wind?<p>{data.wind.speed} Kph</p>:null}
                    <p>Wind Speed</p>
                  </div>
                </div>
       :null }  */}

      </div>
    </div>
  );
}

export default App;
