"use client";
import Rhombus from "@/components/Rhombus/rhombus";
import Slider from "@/components/Slider/Slider";
import { useState } from "react";

const Shape = () => {
  const [angle, setAngle] = useState(90);

  return (
    <div className="flex justify-evenly mt-5">
      <Rhombus angle={angle} />
      <Slider value={angle} onChange={setAngle} />
    </div>
  );
};

export default Shape;
