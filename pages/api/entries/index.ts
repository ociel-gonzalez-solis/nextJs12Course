import { dataBase } from "@/database";
import { Entry, IEntry } from "@/models";
import { StatusCodes } from "http-status-codes";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | { message: string }
  | IEntry[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getEntries(res);

    default:
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Endpoint no existe" });
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await dataBase.connect();
  const entries = await Entry.find().sort({ createdAt: "asc" });

  await dataBase.disconnect();

  return res.status(StatusCodes.OK).json(entries);
};
