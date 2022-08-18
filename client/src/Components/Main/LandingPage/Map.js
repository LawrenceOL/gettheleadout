import React from 'react'
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import "./Map.css"

const Map = () => {
    return (
        <>
      <div className="mapholder">
        {/* <div>
          {/* <button onClick={handleClick} type="button">
            Share
          </button> */}
          
            <MapContainer
              center={[38.8977, -77.0365]}
              zoom={17}
              zoomControl={false}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <ZoomControl position="bottomleft" />
              <Marker position={[38.8977, -77.0365]}></Marker>
            </MapContainer>

            {/* <a href="www.lawrenceol.dev">www.gettheleadout.com</a> */}
          {/* </div>
        </div> */}
      </div>
      </>
    );
}

export default Map