import { getPOAPsWithUsername, getPOAPsWithAddress } from "./getPOAPs";
import prettify from "html-prettify";

const generateMarkdownCodeWithUsername = async (username) => {
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

    return prettify(elementsArray.join("\n").trim());
  } catch (error) {
    console.log(error);
    return false;
  }
};

const generateMarkdownCodeWithAddress = async (address) => {
  try {
    const poaps = await getPOAPsWithAddress(address);

    if (poaps.length == 0) {
      return false;
    }

    const elementsArray = ["## My [GitPOAPs](https://www.gitpoap.io/)", "<p>"];

    for (const poap of poaps) {
      const ele = `<a href="https://www.gitpoap.io/gp/${poap?.gitPoapEventId}"><img src="${poap?.imageUrl}"  alt="${poap?.name}" height="100" width="100"></a>`;
      elementsArray.push(ele);
    }

    elementsArray.push("</p>");

    return prettify(elementsArray.join("\n").trim());
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { generateMarkdownCodeWithUsername, generateMarkdownCodeWithAddress };
