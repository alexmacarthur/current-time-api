import { VercelRequest, VercelResponse } from "@vercel/node";
import leftPad from "left-pad";

export default (req: VercelRequest, res: VercelResponse) => {
  const timeZone = (req.query.tz as string) || "America/Chicago";
  const dateString = new Date().toLocaleString("en-US", { timeZone });
  const date = new Date(dateString);
  const year = req.query.mockYear || date.getFullYear();

  return res.send(leftPad(year, 4));
};
