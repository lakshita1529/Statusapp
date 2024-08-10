import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Link, useNavigate } from "react-router-dom";
import { useNote } from "../component/shared/navbar/index";

type NoteProps = {
  onDelete: (id: string) => void;
};

export function Note({ onDelete }: NoteProps) {
  const note = useNote();
  const navigate = useNavigate();

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
          <p className="text-muted">
            Created on: {new Date(note.creationDate).toLocaleDateString()} at{" "}
            {new Date(note.creationDate).toLocaleTimeString()}
          </p>
          {note.tags.length > 0 && (
            <Stack gap={2} className="align-items-center justify-content-center h-100">
              <Stack
                gap={1}
                direction="horizontal"
                className="justify-content-center align-items-center"
              >
                {note.tags.map((tag) => (
                  <Badge className="text-truncate" key={tag.id}>
                    {tag.label}
                  </Badge>
                ))}
              </Stack>
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack direction="horizontal" gap={2}>
            <Link to={`/${note.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button
              onClick={() => {
                onDelete(note.id);
                navigate("..");
              }}
              variant="outline-danger"
            >
              Delete
            </Button>
            <Link to={"/"}>
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </>
  );
}
