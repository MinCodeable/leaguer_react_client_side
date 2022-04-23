import { devicesSizes } from "./DevicesSize";

export const devices = {
    mobileS: `screen and (min-width: ${devicesSizes.mobileS})`,
    mobileM: `screen and (min-width: ${devicesSizes.mobileM})`,
    mobileL: `screen and (min-width: ${devicesSizes.mobileL})`,
    tablet: `screen and (min-width: ${devicesSizes.tablet})`,
    laptop: `screen and  (min-width: ${devicesSizes.laptop})`,
    laptopL: `screen and (min-width: ${devicesSizes.laptopL})`,
    desktop: `screen and (min-width: ${devicesSizes.desktop})`,
    desktopL: `screen and (min-width: ${devicesSizes.desktop})`
};
