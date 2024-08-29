import React, { useEffect } from "react";

type Props = {};

const Box = (props: Props) => {
  useEffect(() => {
    const box = document.querySelector(".box") as HTMLElement;
    let isDragging = false;
    let startX: number, startY: number;
    let currentX = -30;
    let currentY = -45;

    box?.addEventListener("mousedown", (e: any) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      box.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - startX;
      const deltaY = startY - e.clientY;

      currentX += deltaY * 0.2;
      currentY += deltaX * 0.2;

      if (box && box.style) {
        box.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
      }

      startX = e.clientX;
      startY = e.clientY;
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      box.style.cursor = "grab";
    });

    const openBtn = document.getElementById("openBtn");

    openBtn?.addEventListener("click", () => {
      box.classList.toggle("open");
    });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="box">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
      <button id="openBtn">Open</button>
    </div>
  );
};

export default Box;
