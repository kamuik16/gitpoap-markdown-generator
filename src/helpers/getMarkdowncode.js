import { getPOAPsWithUsername, getPOAPsWithAddress } from './getPOAPs';
import { isAddress } from 'web3-validator';

const generateMarkdownCodeWithUsername = async (username) => {
  try {
    const poaps = await getPOAPsWithUsername(username);

    if (poaps.length === 0) {
      return { result: 'No GitPOAPs associated with this GitHub account!' };
    }

    poaps.sort((a, b) => new Date(b.earnedAt) - new Date(a.earnedAt));

    const elementsArray = ['## My [GitPOAPs](https://www.gitpoap.io/)', '<p>'];

    for (const poap of poaps) {
      const ele = `<a href="https://www.gitpoap.io/gp/${poap?.gitPoapEventId}"><img src="${poap?.imageUrl}"  alt="${poap?.name}" height="100" width="100"></a>`;
      elementsArray.push(ele);
    }

    elementsArray.push('</p>');

    return { result: elementsArray.join('\r\n').trim() };
  } catch (error) {
    console.log(error);
    return { error: 'Error fetching data!' };
  }
};

const generateMarkdownCodeWithAddress = async (address) => {
  try {
    const isValidAddress = isAddress(address);
    if (!isValidAddress) {
      return { error: 'Uh-oh! Invalid Ethereum Address!' };
    }

    const poaps = await getPOAPsWithAddress(address);

    if (poaps.length === 0) {
      return { result: 'No GitPOAPs associated with this address!' };
    }

    poaps.sort((a, b) => new Date(b.earnedAt) - new Date(a.earnedAt));

    const elementsArray = ['## My [GitPOAPs](https://www.gitpoap.io/)', '<p>'];

    for (const poap of poaps) {
      const ele = `<a href="https://www.gitpoap.io/gp/${poap?.gitPoapEventId}"><img src="${poap?.imageUrl}"  alt="${poap?.name}" height="100" width="100"></a>`;
      elementsArray.push(ele);
    }

    elementsArray.push('</p>');

    return { result: elementsArray.join('\r\n').trim() };
  } catch (error) {
    console.log(error);
    return { error: 'Error fetching data!' };
  }
};

export { generateMarkdownCodeWithUsername, generateMarkdownCodeWithAddress };
