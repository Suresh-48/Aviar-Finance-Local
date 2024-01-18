import { Button } from "react-bootstrap";

export const SaveButton = (props) => {
  const type1 = props.type ? { ...props.type } : "";
  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>
      <Button variant="flat" size="xxl" {...props} {...type1}>
        flat button
      </Button>
    </>
  );
};
