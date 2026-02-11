import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Location data matching the reference image
const locations = [
  { name: "Dovv", position: [3.822498, 11.472071], color: "#A78BFA" }, // Purple
  { name: "Marko fufu", position: [3.832888, 11.488788], color: "#FB923C" }, // Orange
  { name: "Correct Chop", position: [3.844101, 11.501519], color: "#FCD34D" }, // Yellow
  { name: "TopNotch Aroma", position: [3.804704, 11.471883], color: "#34D399" }, // Green/Teal
  {
    name: "Milies Restaurant",
    position: [3.843643, 11.491016],
    color: "#93C5FD",
  }, // Blue
  {
    name: "Mama's Kitchen",
    position: [3.838515, 11.490044],
    color: "#34D399",
  }, // Green
];

// Custom marker icon function
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        background-color: ${color};
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      "></div>
    `,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });
};

const RestaurantMap = () => {
  return (
    <MapContainer
      center={[3.824, 11.487]}
      zoom={14}
      style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location, index) => (
        <Marker
          key={index}
          position={location.position as [number, number]}
          icon={createCustomIcon(location.color)}
        >
          <Popup>
            <div className="text-center font-semibold">{location.name}</div>
          </Popup>
        </Marker>
      ))}

      {/* Area labels overlay */}
      {locations.map((location, index) => (
        <Marker
          key={`label-${index}`}
          position={location.position as [number, number]}
          icon={L.divIcon({
            className: "custom-label",
            html: `
              <div style="
                background-color: ${location.color};
                color: #000;
                padding: 4px 12px;
                border-radius: 8px;
                font-weight: 600;
                font-size: 13px;
                white-space: nowrap;
                border: 2px solid rgba(0,0,0,0.2);
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                margin-left: 24px;
                margin-top: -8px;
              ">
                ${location.name}
              </div>
            `,
            iconSize: [150, 30],
            iconAnchor: [-10, 8],
          })}
        />
      ))}
    </MapContainer>
  );
};

export default RestaurantMap;
