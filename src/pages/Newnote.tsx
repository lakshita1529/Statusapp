import { Col, Form, Row, Stack } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "./App";
import NoteForm from "../component/base/NoteForm/index";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export default function NewNote({
  onSubmit,
  onAddTag,
  availableTags,
}: NewNoteProps) {
  
  const currentHour = new Date().getHours();


  const noteType = currentHour >= 6 && currentHour < 18 ? "SOD" : "EOD";

  return (
    <>
      <h1 className="mb-4">Enter {noteType}</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
}
