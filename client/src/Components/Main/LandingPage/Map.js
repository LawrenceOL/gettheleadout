import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import "./Map.css"
const axios = require('axios').default;

const Map = () => {
    const [leadData, setLeadData] = useState([])
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/map/')
        .then(function(res) {
            setLeadData(res.data)
            console.log(res.data);
        })
        .catch(function (err) {
            console.log(err);
        });
    }, [])

    return (
        <>
      <div className="mapholder">
        {/* <div>
          {/* <button onClick={handleClick} type="button">
            Share
          </button> */}
          
            <MapContainer
              center={[41.5833827612176, -87.6711596591997]}
              zoom={17}
              zoomControl={true}
              scrollWheelZoom={true}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                 <ZoomControl position="bottomleft" />
                <Marker position={[41.5833827612176, -87.6711596591997]}></Marker>
                {
                leadData.map((data) => (
                    <Marker position = {[data.latitude, data.longitude]}></Marker>
                ))}
            </MapContainer>

            {/* <a href="www.lawrenceol.dev">www.gettheleadout.com</a> */}
          {/* </div>
        </div> */}
      </div>
      </>
    );
}

export default Map