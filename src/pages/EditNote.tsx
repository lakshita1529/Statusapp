import { Col, Form, Row, Stack } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "./App";
import NoteForm from "../component/base/NoteForm";
import { useNote } from "../component/shared/navbar/NoteLayout";

type EditNoteProps = {
    onSubmit: (id: string , data: NoteData) => void,
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

export default function EditNote({ onSubmit, onAddTag, availableTags }: EditNoteProps) {
    const note = useNote();
    return (
        <>
            <h1 className="mb-4">Edit Note</h1>
            <NoteForm
                title={note.title}
                markdown={note.markdown}
                tags={note.tags} 
                onSubmit={data=>  onSubmit(note.id , data)} onAddTag={onAddTag} availableTags={availableTags} />
        </>
    )
};

