import NoLocationInfo from "@/components/NoLocationInfo"
import TemperatureComponent from "@/components/TemperatureComponent"
import { getResolvedLatLong } from "@/lib/location-info"

const TemperaturePage = async ({params:{location},searchParams:{latitude,longitude}}) => {
  const resolve= await getResolvedLatLong(location,latitude,longitude)

  if(resolve?.lat && resolve.lon){
    return <TemperatureComponent lat={resolve.lat} lon={resolve.lon}/>

  }else{
    return <NoLocationInfo/>
  }
  
}

export default TemperaturePage