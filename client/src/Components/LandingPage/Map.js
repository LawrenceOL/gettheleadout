import React, { useState, useEffect } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import SearchAddress from "./SearchAddress";
import "./Map.css";
const axios = require("axios").default;

const Map = () => {
  const [leadData, setLeadData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isSearched, setIsSearched] = useState(false);
  const [searchedData, setSearchedData] = useState();
  const [selectedAddress, setSelectedAddress] = useState([]);

  const updateData = (childData) => {
    setSearchedData(childData);
  };

  let displayedAddresses = searchedData && searchedData.slice(0,5)

   const onAddressClick = (id) => {
     setIsSearched(true);
     setSelectedAddress(id)
     console.log(isSearched)
   };

   console.log(leadData[selectedAddress])

  const displayed = displayedAddresses && displayedAddresses.map((address) => (
            <p className="searchedaddress" key={address.id} onClick={() => onAddressClick(address.id)}>{address.property_address}</p>
  ))


  const leadPrediction = {
    1: "Assumed Non-Lead",
    2: "Unlikely Lead",
    3: "Maybe Lead",
    4: "Likely Lead",
    5: "Assumed Lead",
  };
  
  const getColor = (leadInfo) => {
    const colors = ['assumed-nonlead', 'unlikely-lead', 'maybe-lead', 'likely-lead','assumed-lead'];
    const cur_color = colors[leadInfo - 1]
    return cur_color
  }
  const customIcon = (leadInfo) => {
    const color = getColor(leadInfo)
    // const cur_color = colors[leadInfo - 1]
    return new L.Icon({
    iconUrl: require("./map_marker.svg").default,
    iconSize: new L.Point(30, 35),
    className: color
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://leadpipe-api.azurewebsites.net/map/"
      );
      setLeadData(res.data);
    };
    fetchData()
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="searchform">
        <SearchAddress leadData={leadData} updateData={updateData} />
      </div>
      {searchedData && searchedData.length >= 1 ? (
        <div className="searchdropdown">{displayed}</div>
      ) : (
        ""
      )}
      <div className="mapholder">
        <MapContainer
          center={[41.571701, -87.69449150000003]}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* {isLoading ? (
            <div>Loading..</div>
          ) : (
            <MarkerClusterGroup chunkedLoading>
              {leadData.map((data) => (
                <Marker
                  icon={customIcon(data.our_pred)}
                  key={data.id}
                  position={[data.latitude, data.longitude]}
                  title={data.est_year}
                >
                  <Popup>
                    <p>Year Built: {data.est_year}</p>
                    <p>Lead Info: {leadPrediction[data.our_pred]}</p>
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          )} */}
          {isLoading ? (
            <div>Loading...</div>
            ) : 
            !isSearched ? (
            <MarkerClusterGroup chunkedLoading>
              {leadData.map((data) => (
                <Marker
                  icon={customIcon(data.our_pred)}
                  key={data.id}
                  position={[data.latitude, data.longitude]}
                  title={data.est_year}
                >
                  <Popup>
                    <p className="address">{data.property_address}</p>
                    <p className="header">
                      Probability of service line: <br/>
                      <span className={getColor(data.our_pred)}><span id="square">■</span> {leadPrediction[data.our_pred]}</span>
                    </p>
                    <p className="header">House Built: <br/>{data.est_year}</p>
                    <div className="popup-buttons">
                      <button className="bluebutton-m">
                        How to check your pipes
                      </button>
                      <button className="whitebutton-m">
                        Lead pipe exist? Click here
                      </button>
                    </div>
                    
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          ) : (
            <Marker
              icon={customIcon(leadData[selectedAddress].our_pred)}
              key={leadData[selectedAddress].id}
              position={[leadData[selectedAddress].latitude, leadData[selectedAddress].longitude]}
              title={leadData[selectedAddress].est_year}
            >
              <Popup>
                <p>Year Built: {leadData[selectedAddress].est_year}</p>
                <p>Lead Info: {leadData[selectedAddress].our_pred}</p>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
