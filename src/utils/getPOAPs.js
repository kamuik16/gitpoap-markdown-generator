import axios from "axios";

const getPOAPsWithUsername = async (username) => {
  try {
    const poapsClaimed = (
      await axios.get(
        `https://public-api.gitpoap.io/v1/github/user/${username}/gitpoaps?status=claimed`
      )
    )?.data;
    const poapsUnclaimed = (
      await axios.get(
        `https://public-api.gitpoap.io/v1/github/user/${username}/gitpoaps?status=unclaimed`
      )
    )?.data;
    const poapsFromUsername = poapsClaimed.concat(poapsUnclaimed);
    return poapsFromUsername;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getPOAPsWithAddress = async (address) => {
  try {
    const poapsFromAddress = (
      await axios.get(
        `https://public-api.gitpoap.io/v1/address/${address}/gitpoaps`
      )
    )?.data;
    return poapsFromAddress;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { getPOAPsWithUsername, getPOAPsWithAddress };
