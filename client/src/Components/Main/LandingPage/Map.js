import React, {useState, useEffect} from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker} from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-cluster';
import "./Map.css";
const axios = require('axios').default;
const Map = () => {
    const [leadData, setLeadData] = useState([])
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/map/')
        .then(function(res) {
            setLeadData(res.data)
        })
        .catch(function (err) {
            console.log(err);
        });
    }, [])

    //Custom Icons for cluster icons
    const customIcon = new L.Icon({
        iconUrl: require("./location.svg").default,
        iconSize: new L.Point(40, 47)
      });

    return (
        <>
      <div className="mapholder">
        {/* <div>
          {/* <button onClick={handleClick} type="button">
            Share
          </button> */}
          
            <MapContainer
              center={[41.571701, -87.69449150000003]}
              zoom={15}
              scrollWheelZoom={true}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                 <MarkerClusterGroup chunkedLoading>
                    {leadData.map((data) => (
                        <Marker 
                            icon={customIcon}
                            key={data.id}
                            position={[data.latitude, data.longitude]}
                            title={data.est_year}
                        ></Marker>
                    ))}
                 </MarkerClusterGroup>
            </MapContainer>
      </div>
      </>
    );
}

export default Map