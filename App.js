import react from "react";
import Title from "compoenets/Titles";
import form from "compoenets/Form";
import weather from "compoenets/weather";

Const API_KEY="c0c97585c2mshf72be85af0bb3e6p172e9bjsn962caac36c37";

class App extends React.Component{

getweather = asnyc () =>{
  const api_call=await fetch('https://api.openweathermap.org/data/2.5/weather?q=mancherster,uk&appid=${API_KEY&}&units=metrics');
  const data=await api_call.json();
  const City =e.target.element.city.value;
  const Country=.e.target.element.Country.value;
  console.log(data);
  this.state({
    Temparture:data.main.temp,
    City.data.name,
    country.data.sys.country,
    humdity:.data.main.
    description: data.weather[0]description,
    error:"";
  });
}

  render(){
    return(
      <div>
         </title>
       <Form getweather={This.getweather}/>
         </weather
         Temparture={this.state.Temparture}
         City={this.state.City}
         Country={thsi.state.Country}
         humdity={this.state.humdity}
        description={this.state.description}
        error={this.state.error}
         >
      </div>
    );
  }
};

export default App;
