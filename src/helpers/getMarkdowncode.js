import { getPOAPsWithUsername, getPOAPsWithAddress } from "./getPOAPs";

const generateMarkdownCode = async (username, address) => {
  try {
    const poaps = await getPOAPsWithUsername(username);

    if (poaps.length == 0) {
      return false;
    }

    const elementsArray = ["## My [GitPOAPs](https://www.gitpoap.io/)", "<p>"];

    for (const poap of poaps) {
      const ele = `<a href="https://www.gitpoap.io/gp/${poap?.gitPoapEventId}"><img src="${poap?.imageUrl}"  alt="${poap?.name}" height="100" width="100"></a>`;
      elementsArray.push(ele);
    }

    elementsArray.push("</p>");

    console.log(elementsArray);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { generateMarkdownCode };
