import { Entry } from "@/interfaces";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { DragEvent, FC } from "react";

interface Props {
  entry: Entry;
  myKey: number;
}

export const EntriesCard: FC<Props> = ({ entry }) => {
  const onDragStart = (event: DragEvent) => {
    console.log("🚀 ~ file: EntriesCard.tsx:18 ~ onDragStart ~ event:", event);
    event.dataTransfer.setData("text", entry._id);
  };
  const onDragEnd = (event: DragEvent) => {};

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent sx={{ whiteSpace: "pre-line" }}>
          {entry.description}
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
        >
          <Typography variant="body2">Hace 30min</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
