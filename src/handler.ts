import {toSvg} from "jdenticon";

export const handler = async (event: any = {}) : Promise <any> => {
  console.log(event);
  const svgString = toSvg("Suella", 300)

  return { statusCode: 200, body: svgString };
};
