import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import MarkerClusterGroup from 'react-leaflet-cluster';
import "./Map.css";
import './Search.css';
const axios = require('axios').default;
const Map = () => {
    const [leadData, setLeadData] = useState([])
    const [isLoading, setLoading] = useState(true)

    //Custom Icons for cluster icons
    const customIcon = new L.Icon({
        iconUrl: require("./location.svg").default,
        iconSize: new L.Point(30, 35)
    });

    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get('https://leadpipe-api.azurewebsites.net/map/')
            setLeadData(res.data)
        }
        fetchData()
            .catch(console.error)
            .finally(() => {
            setLoading(false)
            });
    }, [])
    return (
        <div className="mapholder">
            <MapContainer
              center={[41.571701, -87.69449150000003]}
              zoom={15}
              scrollWheelZoom={true}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                 {isLoading ? 
                 (<div>Loading..</div>):
                 (<MarkerClusterGroup 
                    chunkedLoading >
                    {leadData.map((data) => (
                        <Marker 
                            icon={customIcon}
                            key={data.id}
                            position={[data.latitude, data.longitude]}
                            title={data.est_year}>
                            <Popup closeButton={false}>
                                Year Built: {data.est_year}
                            </Popup>
                        </Marker>
                    ))}
                 </MarkerClusterGroup>
                 )}
            </MapContainer>
        </div>
    );
}

export default Map