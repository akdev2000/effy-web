import SimpleMap from "@/components/MapLocation";
import { Root } from "@/components/Root";
import { useGet } from "@/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function company() {
  const companies = useGet("/company");
  const router = useRouter();

  useEffect(() => {
    (async () => {
      await companies.fetchData(`/${router.query.id}`);
    })();
  }, [router.isReady]);
  return (
    <Root>
      <div className="flex flex-col item-center space-y-2">
        <div>
          <h2 className="text-xl">
            Company Name : {companies.data?.data.name}
          </h2>
          <h3 className="text-lg">
            Company Address : {companies.data?.data.address}
          </h3>
          <h4 className="text-base">
            Latitude : {companies.data?.data.lat}
            <br />
            Longtitude : {companies.data?.data.long}
          </h4>
          <h4 className="text-base font-bold">Map Location</h4>
        </div>
        <SimpleMap
          lat={companies.data?.data.lat}
          long={companies.data?.data.long}
          address={companies.data?.data.address}
        />
      </div>
    </Root>
  );
}
