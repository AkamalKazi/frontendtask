"use client";
import { useEffect, useRef } from "react";

const Rhombus = ({ angle }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      const size = canvas.width / 2;
      const radians = (angle * Math.PI) / 180;
      const halfDiagonal = size / Math.cos(radians / 2);
      const offset = Math.sqrt(halfDiagonal ** 2 - size ** 2);

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.moveTo(size, 0);
      context.lineTo(size + offset, size);
      context.lineTo(size, size * 2);
      context.lineTo(size - offset, size);
      context.closePath();
      context.strokeStyle = "black";
      context.stroke();
    }
  }, [angle]);

  return (
    <div className="flex justify-center items-center ">
      <canvas ref={canvasRef} width="300" height="300"></canvas>
    </div>
  );
};

export default Rhombus;
