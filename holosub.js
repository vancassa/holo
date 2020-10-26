const axios = require("axios");

const getSubscribers = async () => {
  const res = await axios.get("https://api.holotools.app/v1/channels?offset=0&limit=50");
  const res2 = await axios.get("https://api.holotools.app/v1/channels?offset=50&limit=50");
  const channels = res.data.channels.concat(res2.data.channels);
  channels.sort((a, b) =>
    a.subscriber_count > b.subscriber_count ? -1 : a.subscriber_count < b.subscriber_count ? 1 : 0
  );

  const result = channels.map((x) => ({
    profileImg: x.photo,
    name: x.name,
    subCount: x.subscriber_count,
  }));

  return result;
};

module.exports = { getSubscribers };
