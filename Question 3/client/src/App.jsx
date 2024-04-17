import React, {useState, useEffect} from 'react'
import './App.css'
import Axios from "axios";
import Card from "./components/card";

function App() {

    const baseUrl = "http://localhost:3001"

    const [values, setValues] = useState();
    const [activity, setActivity] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    const handleClickButton = () => {
        Axios.post(`${baseUrl}/register`, {
            name: values.name,
            cost: values.cost,
            category: values.category,
        }).then((response) =>{
            console.log(response)
        });
    }

    useEffect(() => {
        Axios.get(`${baseUrl}/activity`)
            .then((response)=>{
            setActivity(response.data)
        })
        }
    )


  return (
    <div className="App">
      <div className="container">
          <h1 className="title">Activity Shop</h1>
          <h3>Add an Activity</h3>
          <div className="register-box">
              <input className="register-input" type="text" name="name" placeholder="Title" onChange={handleChangeValues} />
              <input className="register-input" type="text" name="cost" placeholder="Cost" onChange={handleChangeValues} />
              <input className="register-input" type="text" name="category" placeholder="Category" onChange={handleChangeValues} />
              <button className="register-button" onClick={handleClickButton}>Add</button>
          </div>
          <br/>
          <div className="cards">
              {typeof activity !== 'undefined' &&
                  activity.map((activity) => {
                      return <Card
                          key={activity.id}
                          id={activity.id}
                          name={activity.name}
                          cost={activity.cost}
                          category={activity.category}

                      >
                      </Card>;
                  })}
          </div>
      </div>
    </div>
  )
}

export default App
