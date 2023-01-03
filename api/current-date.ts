import { VercelRequest, VercelResponse } from "@vercel/node";
import { getDateForTimezone } from "./_utils";

export default (req: VercelRequest, res: VercelResponse) => {
  const date = getDateForTimezone(req.query.tz as string);

  return res.send(String((req.query.mockDate as string) || date.getDate()));
};
