import React, { useState, useEffect} from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import SearchAddress from './SearchAddress';
import "./Map.css";
const axios = require('axios').default;
const Map = () => {
    const [leadData, setLeadData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const leadPrediction = {
        1:'Assumed Non-Lead',
        2:'Unlikely Lead',
        3:'Maybe Lead',
        4:'Likely Lead',
        5:'Assumed Lead'
    }

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

      <>
        <div className="searchform">
          <SearchAddress leadData={leadData}/>
        </div>
        <div className="mapholder">
          {/* <div>
          {/* <button onClick={handleClick} type="button">
            Share
          </button> */}

          <MapContainer
            center={[41.571701, -87.69449150000003]}
            zoom={15}
            scrollWheelZoom={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {isLoading ? (
              <div>Loading..</div>
            ) : (
              <MarkerClusterGroup
                chunkedLoading
                // onClick={(e) => console.log("onClick", e)}
                // iconCreateFunction={createClusterCustomIcon}
                // maxClusterRadius={150}
                // spiderfyOnMaxZoom={true}
                // polygonOptions={{
                //   fillColor: "#ffffff",
                //   color: "#ffffff",
                //   weight: 5,
                //   opacity: 1,
                //   fillOpacity: 0.8
                // }}
                // showCoverageOnHover={true}
              >
                {leadData.map((data) => (
                  <Marker
                    icon={customIcon}
                    key={data.id}
                    position={[data.latitude, data.longitude]}
                    title={data.est_year}
                  >
                    <Popup>Year Built: {data.est_year}</Popup>
                  </Marker>
                ))}
              </MarkerClusterGroup>
            )}
          </MapContainer>
        </div>
      </>

    );
}

export default Map