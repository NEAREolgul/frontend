import html2canvas from 'html2canvas';
import React, { useEffect, useRef, useState } from 'react';

const Thumbnail = ({ content, width, height, getImg }) => {
  /* Router */
  /* State */
  const canvasRef = useRef();
  const [img, setImg] = useState();
  /* Functions */
  const createThumbnail = async () => {
    const canvas = canvasRef.current;
    const { content_width, content_height, content_paint } = content;
    canvas.width = content_width;
    canvas.height = content_height;
    const context = canvas.getContext('2d');
    if (!context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
    const path = JSON.parse(content_paint);
    // const path = content_paint;
    path.forEach((item) => {
      context.beginPath();
      context.moveTo(item[0].x, item[0].y);
      for (let i = 1; i < item.length; i++) {
        context.lineWidth = item[i].lineWidth;
        context.strokeStyle = item[i].strokeStyle;
        context.lineJoin = item[i].lineJoin;
        context.globalCompositeOperation = item[i].globalCompositeOperation;
        context.lineTo(item[i].x, item[i].y);
      }
      context.stroke();
    });
    html2canvas(canvas).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      setImg(imgData);
    });
  };
  /* Hooks */
  useEffect(() => {
    if (content) {
      createThumbnail();
    }
  }, [content]);

  /* Render */
  return (
    <div>
      <img src={img} style={{ width: '100%', heigh: '100%' }} />
      <canvas ref={canvasRef} style={{ position: 'fixed', top: '-100%' }} />
    </div>
  );
};

export default Thumbnail;
