import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const MapWithNoSSR = (props) => {
  return (
    <MapContainer
      center={props.latLng}
      zoom={3}
      style={{ width: '100%', height: 300 }}
      dragging={true}
      touchZoom={true}
      zoomControl={true}
      scrollWheelZoom={true}
      doubleClickZoom={false}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmJhbGJpIiwiYSI6ImNrbWwzOXlobjAwYWUycnVvY2VnZmZvbXQifQ.eon__K918DV5oy3D0BJjMQ`}
      />
      <Marker position={props.latLng} interactive={false} />
    </MapContainer>
  );
};

export default MapWithNoSSR;
