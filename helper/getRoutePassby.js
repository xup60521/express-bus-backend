import { get_access_token } from "./get_access_token.js";

export async function getRoutePassBy(city, stopName) {
  const access_token_res = await get_access_token();
  const access_token = access_token_res.access_token;
  const res = await fetch(
    `https://tdx.transportdata.tw/api/basic/v2/Bus/EstimatedTimeOfArrival/City/${city}?$filter=StopName/Zh_tw eq '${stopName}'&$select=Direction,RouteName,NextBusTime,EstimateTime&$format=JSON`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  ).then((res) => {
    return res;
  });
  const data = (await res.json())
  return data;
}
