import { useDraggable } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Disc = ({ id, color }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: color,
    width: "400px",
    height: "50px",

    borderRadius: "50px",
    margin: "10px",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}></div>
  );
};
export default Disc;
