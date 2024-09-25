import React,{useState} from "react";
import Select from "./Select.js";


function Form(){
    
  const [t,setT] = useState(0.00);
  const [f,setF] = useState("");
  const [to,setTo] = useState("");
  const [res,setRes] = useState("empty");
  
  
  function handleChange(event){
    setRes("empty");
    const y = event.target.value;
    if(event.target.name==="from-unit"){
      setF(y);

    } else if(event.target.name==="to-unit"){
      setTo(y);
    } else if(event.target.name==="GivenTemp"){
      setT(y);
    }
    
  }

  
  const canConvert = (t!==0.00 && f.length!==0 && to.length!==0);
  function calculate(event){
    event.preventDefault();
    var x = 0;
    var n = Number(t);
    if(f==="Celsius"){
      if(to==="Kelvin"){
        x = n + 273.15;
      } else{
        x = (9/5)*n+32;
      }
    } else if(f==="Fahrenheit"){
      if(to==="Kelvin"){
        x = (5/9)*(n - 32) + 273.15;
      } else{
        x =  (5/9)*(n - 32);
      }
    } else if(f==="Kelvin"){
      if(to==="Celsius"){
        x = n - 273.15;
      } else{
        x =  (9/5) *(n - 273.15) + 32;
      }
    }
    setRes(x.toFixed(2)); 
  }
    
    
    return(
        <div>
        <form onSubmit={calculate}>
          <input type="number" name="GivenTemp" placeholder="0.00" class="box" id="temp" onChange={handleChange}></input>

          <Select name="from-unit" handle={handleChange}/>
          <Select name="to-unit" handle={handleChange}/>
       
          {(canConvert)? 
          <input type="submit" value="Convert" 
            class="box" id="convert"
          ></input> : <input type="submit" value="Convert" 
          class="box" disabled id="convert"
        ></input>
          }
        </form>
         {(res!=="empty")?(<p style={{color:"darkorange"}}>{t} {f} is {res} {to}</p>):null}
         </div>
    )
}

export default Form;