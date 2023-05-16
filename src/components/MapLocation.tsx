import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import { Tooltip } from "@mui/material";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

interface Props {
  lat: number;
  long: number;
  address: string;
}
export default function SimpleMap({ lat = 0, long = 0, address="" }: Props) {
  return (
    <div style={{ height: "80vh", width: "100%", paddingBottom: 5 }}>
      {lat && long ? (
        <GoogleMapReact
          // bootstrapURLKeys={{ key: "" }}
          defaultCenter={{
            lat,
            lng: long,
          }}
          defaultZoom={15}
        >
          <div className="text-white">
            <Tooltip title={address}>
              <WhereToVoteIcon fontSize="large" />
            </Tooltip>
          </div>
        </GoogleMapReact>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}
