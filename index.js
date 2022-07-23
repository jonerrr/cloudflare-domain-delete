const axios = require("axios").default;
const prompt = require("prompt-sync")();

const params = {
  headers: {
    "X-Auth-Key": "",
    "X-Auth-Email": "",
    "Content-type": "application/json",
  },
};

const del = async (domain) => {
  const zones = await axios({
    ...params,
    baseURL: `https://api.cloudflare.com/client/v4/zones?name=${domain}`,
    method: "GET",
  });

  await axios({
    ...params,
    baseURL: `https://api.cloudflare.com/client/v4/zones/${zones.data.result[0].id}`,
    method: "DELETE",
  });
  console.log("Domain Deleted");
};

del(String(prompt("Enter domain name: ")));
