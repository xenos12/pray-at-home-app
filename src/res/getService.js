import getSmallCompline from './getSmallCompline'

const getService = (nameOnService) => {

  switch (nameOnService) {
    case "small-compline":
      return {
        title: "Малая павечерница",
        getText: getSmallCompline
      }

    default:
      break;
  }

}

export default getService