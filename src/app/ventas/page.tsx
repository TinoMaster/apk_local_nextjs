"use client";
import React, { useEffect, useRef } from "react";

export default function Ventas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "red";
      ctx.fillRect(0, 50, 100, 100);
      ctx.strokeStyle = "blue";
      ctx.strokeRect(0, 0, 100, 100);
      ctx.beginPath();
      ctx.moveTo(100, 100);
      ctx.lineTo(200, 200);
      ctx.lineTo(200, 100);
      ctx.closePath();
    }
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <canvas ref={canvasRef} width={400} height={400}></canvas>
    </div>
  );
}
