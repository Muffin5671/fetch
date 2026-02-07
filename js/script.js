async function fetchGeode() {
  // GET obj list
  const data = await fetch('https://api.geode-sdk.org/v1/mods');
  // convert into real data
  const response = await data.json();
  return response;
}

async function getGeode() {
  const json = await fetchGeode();
  return json;
}

async function readGeode() {
  let objList = await getGeode();
}
