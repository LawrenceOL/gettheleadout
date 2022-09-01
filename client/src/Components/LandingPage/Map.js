import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import SearchAddress from "./SearchAddress";
import ShareButton from "./ShareButton";
import "./Map.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";

const axios = require("axios").default;
// function SetViewOnClick({ animateRef }) {
//   const map = useMapEvent("click", (e) => {
//     map.setView(e.latlng, map.getZoom(), {
//       animate: animateRef.current || false,
//     });
//   });

//   return null;
// }


const Map = () => {
  const [leadData, setLeadData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [address, setAddress] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  const [displaySearch, setDisplaySearch] = useState("")
  const [selectedAddress, setSelectedAddress] = useState([]);
  const [mapCenter, setMapCenter] = useState([41.571701, -87.69449150000003]);
  const [sharingIsClicked, setSharingIsClicked] = useState(false);

  const [searchedLatLon, setSearchedLatLon] = useState([]);
  // function handleOnFlyTo() {
  //   const { current = {} } = mapRef;
  //   const { leafletElement: map } = current;

  //   map.flyTo(searchedLatLon, 14, {
  //     duration: 2,
  //   });
  // }

  const mapRef = useRef(null);

  // const animateRef = useRef(false)

  /**
   * Closes all popups open in the MapContainer component
   * @returns {null} Null if no reference to map
   */
  const closePopup = () => {
    if (!mapRef.current) return;
    mapRef.current.closePopup();
  };

  const updateData = (childData) => {
    setSearchedData(childData);
    console.log(searchedData)
  };

  const updateSharing = () => {
    setSharingIsClicked(false);
  };

  let displayedAddresses = searchedData && searchedData.slice(0, 5);


  const panToAddress = () => {
    if (!mapRef.current) return;
    mapRef.current.setView(new L.LatLng([leadData[selectedAddress].latitude,
      leadData[selectedAddress].longitude]));
  };

  const onAddressClick = (id) => {
    setIsSearched(true);
    setSelectedAddress(id);
    setAddress("")
    setSearchedData()
    
  };

//   if (selectedAddress) {
//     console.log([
//       leadData[selectedAddress].latitude,
//       leadData[selectedAddress].longitude,
//     ]);

//     setSearchedLatLon([
//     leadData[selectedAddress].latitude,
//     leadData[selectedAddress].longitude,
//   ])
// };

// const panToAddress = () => {
//   if (!mapRef.current) return;
//   mapRef.current.setView(new L.LatLng(searchedLatLon));
// };

  const displayed =
    displayedAddresses &&
    displayedAddresses.map((address) => (
      <p
        className="searchedaddress"
        key={address.id}
        onClick={() => onAddressClick(address.id)}
      >
        {address.property_address}
      </p>
    ));

  const leadPrediction = {
    1: "Assumed Non-Lead",
    2: "Unlikely Lead",
    3: "Maybe Lead",
    4: "Likely Lead",
    5: "Assumed Lead",
  };

  /**
   * Gets selected lead data based off number
   * @param {Number} leadInfo
   * @returns {String} cur_color
   */
  const getColor = (leadInfo) => {
    const colors = [
      "assumed-nonlead",
      "unlikely-lead",
      "maybe-lead",
      "likely-lead",
      "assumed-lead",
    ];
    const cur_color = colors[leadInfo - 1];
    return cur_color;
  };

  /**
   * gets custom icons for map marker
   * @param {Number} leadInfo lead prediction number
   * @return {L.Icon}  customized icon
   */
  const customIcon = (leadInfo) => {
    const color = getColor(leadInfo);
    return new L.Icon({
      iconUrl: require("./map_marker.svg").default,
      iconSize: new L.Point(30, 35),
      className: color,
    });
  };

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
        <SearchAddress
          address={address}
          setAddress={setAddress}
          leadData={leadData}
          updateData={updateData}
        />
      </div>
      {searchedData && searchedData.length >= 1 && address.length >= 1 ? (
        <div className="searchdropdown">{displayed}</div>
      ) : (
        ""
      )}

      <div className="mapholder">
        <MapContainer
          center={mapCenter}
          zoom={15}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {isLoading ? (
            <div>Loading...</div>
          ) : !isSearched ? (
            <MarkerClusterGroup chunkedLoading>
              {leadData.map((data) => (
                <Marker
                  icon={customIcon(data.our_pred)}
                  key={data.id}
                  position={[data.latitude, data.longitude]}
                  title={data.est_year}
                >
                  <Popup closeButton={false}>
                    <button className="closebutton" onClick={closePopup}>
                      ×
                    </button>
                    <p className="address">{data.property_address}</p>
                    <p className="header">
                      Probability of service line: <br />
                      <span className={getColor(data.our_pred)}>
                        <span id="square">■</span>{" "}
                        {leadPrediction[data.our_pred]}
                      </span>
                    </p>
                    <p className="header">
                      House Built: <br />
                      {data.est_year}
                    </p>
                    <div className="popup-buttons">
                      <Link to="/howtocheckpipes">
                        <button className="bluebutton-m">
                          How to check your pipes
                        </button>
                      </Link>
                      <Link to="/getinvolved">
                        <button className="whitebutton-m">
                          Lead pipe exist? Click here
                        </button>
                      </Link>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          ) : (
            <Marker
              icon={customIcon(leadData[selectedAddress].our_pred)}
              key={leadData[selectedAddress].id}
              position={[
                leadData[selectedAddress].latitude,
                leadData[selectedAddress].longitude,
              ]}
              title={leadData[selectedAddress].est_year}
            >
              <Popup>
                <p>Year Built: {leadData[selectedAddress].est_year}</p>
                <p>Lead Info: {leadData[selectedAddress].our_pred}</p>
              </Popup>
            </Marker>
          )}

          <button
            className="sharebutton"
            onClick={() => setSharingIsClicked(true)}
          >
            <FontAwesomeIcon className="shareicon" icon={faShareFromSquare} />
          </button>
          {sharingIsClicked ? (
            <div className="sharebuttoncontainer">
              <ShareButton updateSharing={updateSharing} />
            </div>
          ) : (
            ""
          )}
        </MapContainer>

      
      </div>
    </>
  );
};

export default Map;
