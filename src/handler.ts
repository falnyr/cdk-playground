import {toSvg} from "jdenticon";

export const handler = async (event: any = {}) : Promise <any> => {
  console.log(event);
  // TODO: https://webpack.js.org/
  const svgString = toSvg("Suella", 300)

  return { statusCode: 200, body: svgString };
};
