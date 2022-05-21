import React from "react";
import {
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  MapContainer as LeafletMap,
} from "react-leaflet";
import "./Maps.css";
import "leaflet/dist/leaflet.css";
import { iconEshamy } from "./IconMarker";
import logoImg from "../../assets/img/chan-dung-edit.png";

const Map = () => {
  const position = [30.978031, 31.174718];
  const zoom = 9;
  return (
    <div className="map">
      <LeafletMap center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={iconEshamy}>
          <Popup>
            <div className="info-container">
              <div className="info__logo">
                <img src={logoImg} alt="logo" />
              </div>
              <div className="info__name">Dr Mohamed Elshamy</div>
              <div className="info__address">
                Address: Elmahala-Elkoubra city, Gharbia, Egypt
              </div>
            </div>
          </Popup>
          <Tooltip>Dr Mohamed Elshamy</Tooltip>
        </Marker>
      </LeafletMap>
    </div>
  );
};

export default Map;
