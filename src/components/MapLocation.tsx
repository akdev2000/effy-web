import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

interface Props {
  lat: number;
  long: number;
}
export default function SimpleMap({ lat = 0, long = 0 }: Props) {
  const defaultProps = {
    center: {
      lat,
      lng: long,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "40vh", width: "700px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
