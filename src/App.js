import { useState, useEffect } from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import ParkingForm from "./components/ParkingForm";

const App = () => {
  const [parkingList, setParkingList] = useState([])
  const [parkingType, setParkingType] = useState([])

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/parking/parkingspecializedplaces')
        const data = await res.json()
        const parkingsFiltered = await data.filter(parking => parkingType.includes(parking.properties.PLASPE_TYPE_NOM))
        setParkingList(parkingsFiltered)
      } catch (err) {
        console.error(err)
      }
    }

    fetchEvent()
    
  }, [parkingType])

  const handleChange = (e) => {
    const checked = e.target.checked
    if (checked) {
      setParkingType([ ...parkingType, e.target.name])
    } else {
      setParkingType(parkingType.filter(type => type !== e.target.name))
    }
    console.log(parkingType)
    console.log(e.target.name)
  }

  const handleSubmit = (e) => {
    
  }

  return (
    <> 
      <Header />
      <main className="main">
        <ParkingForm 
          className="parking-form"
          handleChange={handleChange}
        />
        <Map 
          parkingList={parkingList}
        /> 
      </main>      
    </>
  );
}

export default App;
