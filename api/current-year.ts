import { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => {
  const timeZone = (req.query.tz as string) || "America/Chicago";
  const dateString = new Date().toLocaleString("en-US", { timeZone });
  const date = new Date(dateString);

  return res.send(date.getFullYear());
};
