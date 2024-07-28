"use client";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Disc from "@/components/Disc/Disc";

const Bin = () => {
  const [createBinDiscs, setCreateBinDiscs] = useState([]);
  const [deleteBinDiscs, setDeleteBinDiscs] = useState([]);

  const handleAddDisc = () => {
    setCreateBinDiscs([...createBinDiscs, `disc-${Date.now()}`]);
  };

  const handleDeleteDisc = () => {
    setDeleteBinDiscs([]);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = createBinDiscs.indexOf(active.id);
      const newIndex = deleteBinDiscs.indexOf(over.id);

      if (newIndex === -1) {
        setCreateBinDiscs((items) =>
          items.filter((item) => item !== active.id)
        );
        setDeleteBinDiscs((items) => [...items, active.id]);
      } else {
        setDeleteBinDiscs((items) => arrayMove(items, oldIndex, newIndex));
      }
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ backgroundColor: "lightblue", padding: "10px" }}>
          <h2>Create Bin</h2>
          <button
            className="my-3 bg-blue-800 text-white px-5 py-1 rounded-lg text-sm"
            onClick={handleAddDisc}
          >
            +
          </button>
          <SortableContext
            items={createBinDiscs}
            strategy={verticalListSortingStrategy}
          >
            {createBinDiscs.map((id) => (
              <Disc key={id} id={id} color="blue" />
            ))}
          </SortableContext>
        </div>
        <div style={{ backgroundColor: "lightcoral", padding: "10px" }}>
          <h2>Delete Bin</h2>
          <button
            className="my-3 bg-red-800 text-white px-5 py-1 rounded-lg text-sm"
            onClick={handleDeleteDisc}
          >
            -
          </button>
          <SortableContext
            items={deleteBinDiscs}
            strategy={verticalListSortingStrategy}
          >
            {deleteBinDiscs.map((id) => (
              <Disc key={id} id={id} color="red" />
            ))}
          </SortableContext>
        </div>
      </div>
    </DndContext>
  );
};

export default Bin;
