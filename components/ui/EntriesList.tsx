import { List, Paper } from "@mui/material";
import { EntriesCard } from "./EntriesCard";
import { EntryStatus } from "@/interfaces";
import { FC, useContext, useMemo, DragEvent } from "react";
import { EntriesContext } from "@/context/entries";

interface Props {
  status: EntryStatus;
}

export const EntriesList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);

  const allowDrop = (e: DragEvent) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    console.log("🚀 ~ file: EntriesList.tsx:17 ~ allowDrop ~ id:", id);
  };

  const onDropEntry = (e: DragEvent) => {
    console.log("🚀 ~ file: EntriesList.tsx:15 ~ onDropEntry ~ e:", e);
  };

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  return (
    <div onDrop={onDropEntry} onDragOver={allowDrop}>
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          "&::-webkit-scrollbar": { display: "none" },
          padding: "1px 5px",
        }}
      >
        <>
          <List sx={{ opacity: 1 }}>
            {entriesByStatus.map((entry, key) => (
              <EntriesCard key={entry._id} myKey={key} entry={entry} />
            ))}
          </List>
        </>
      </Paper>
    </div>
  );
};
