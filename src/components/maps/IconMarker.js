import L from "leaflet";
// import iconUrl from "../../../assets/img/logo-web-white.png";
import iconUrl from "../../assets/img/avatar.webp";

const iconEshamy = new L.Icon({
  iconUrl: iconUrl,
  iconSize: [64, 64],
  iconAnchor: [64, 64],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

export { iconEshamy };
