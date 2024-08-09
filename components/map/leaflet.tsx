"use client";

import "leaflet/dist/leaflet.css";

import { Box } from "@mantine/core";
import { LatLngExpression } from "leaflet";
import {
  Suspense,
  useCallback,
  useMemo,
  useRef,
  useState
} from "react";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

interface ILeafletProps {
  latitude: number;
  longitude: number;
}

export const LeafletComponent = (props: ILeafletProps) => {
  const { latitude, longitude } = props;
  const [destination, setDestination] = useState<LatLngExpression>([
    latitude,
    longitude,
  ]);

  const handleMapClick = (e: any) => {
    const { lat, lng } = e.latlng;
    alert(`Clicked at: ${lat}, ${lng}`);
  };

  const MapPlaceholder = () => {
    return (
      <p>
        Map of London.{" "}
        <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>
    );
  };

  return (
    <Box className="min-h-screen">
      <MapContainer
        center={destination}
        zoom={13}
        className="min-h-[85vh]"
        placeholder={<MapPlaceholder />}
      >
        <Suspense>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <MapEventsHandler handleMapClick={handleMapClick} /> */}
          <DraggableMarker
            destination={destination}
            handleMapClick={handleMapClick}
          />
        </Suspense>
      </MapContainer>
    </Box>
  );
};

const MapEventsHandler = ({
  handleMapClick,
}: {
  handleMapClick: (e: any) => void;
}) => {
  useMapEvents({
    click: (e) => handleMapClick(e),
  });
  return null;
};

function DraggableMarker({
  destination,
  handleMapClick,
}: {
  destination: any;
  handleMapClick: (e: any) => void;
}) {
  const [draggable, setDraggable] = useState(false);
  const [position, setPosition] = useState(destination);

  // Dragger marker
  const markerRef = useRef<any>(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  // Event click
  const map = useMapEvents({
    click(e) {
      map.locate();
      handleMapClick(e);
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
}

// const POSITION_CLASSES = {
//   bottomleft: "leaflet-bottom leaflet-left",
//   bottomright: "leaflet-bottom leaflet-right",
//   topleft: "leaflet-top leaflet-left",
//   topright: "leaflet-top leaflet-right",
// };

// const BOUNDS_STYLE = { weight: 1 };

// function MinimapBounds({ parentMap, zoom }: { parentMap: Map; zoom: number }) {
//   const minimap = useMap();

//   // Clicking a point on the minimap sets the parent's map center
//   const onClick = useCallback(
//     (e) => {
//       parentMap.setView(e.latlng, parentMap.getZoom());
//     },
//     [parentMap]
//   );
//   useMapEvent("click", onClick);

//   // Keep track of bounds in state to trigger renders
//   const [bounds, setBounds] = useState(parentMap.getBounds());
//   const onChange = useCallback(() => {
//     setBounds(parentMap.getBounds());
//     // Update the minimap's view to match the parent map's center and zoom
//     minimap.setView(parentMap.getCenter(), zoom);
//   }, [minimap, parentMap, zoom]);

//   // Listen to events on the parent map
//   const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), []);
//   useEventHandlers({ instance: parentMap }, handlers);

//   return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />;
// }

// function MinimapControl({
//   position,
//   zoom,
// }: {
//   position: string;
//   zoom: number;
// }) {
//   const parentMap = useMap();
//   const mapZoom = zoom || 0;

//   // Memoize the minimap so it's not affected by position changes
//   const minimap = useMemo(
//     () => (
//       <MapContainer
//         style={{ height: 80, width: 80 }}
//         center={parentMap.getCenter()}
//         zoom={mapZoom}
//         dragging={false}
//         doubleClickZoom={false}
//         scrollWheelZoom={false}
//         attributionControl={false}
//         zoomControl={false}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
//       </MapContainer>
//     ),
//     []
//   );

//   const positionClass =
//     (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;
//   return (
//     <div className={positionClass}>
//       <div className="leaflet-control leaflet-bar">{minimap}</div>
//     </div>
//   );
// }
