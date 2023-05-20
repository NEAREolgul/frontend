import React, { useEffect, useRef, useState } from 'react';
import Thumbnail from './Thumbnail';
import html2canvas from 'html2canvas';

const MintModal = ({ modal, close, submit, content }) => {
  /* Router */
  /* State */
  const canvasRef = useRef();
  const [img, setImg] = useState();
  const [isValidate, setIsValidate] = useState(false);
  /* Functions */
  const handleMint = () => {};

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

  const dataURItoBlob = (dataURI) => {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    //Old Code
    //write the ArrayBuffer to a blob, and you're done
    //var bb = new BlobBuilder();
    //bb.append(ab);
    //return bb.getBlob(mimeString);

    //New Code
    return new Blob([ab], { type: mimeString });
  };

  const handleSubmit = async () => {
    // const file1 = new File(img, 'img1.png', { type: 'image/png' });
    // const file2 = new File(img, 'img1.png', { type: 'image/png' });
    const f1 = dataURItoBlob(img);
    const contentInfo = [f1, f1];
    const result = await submit(contentInfo);
    if (result) {
      setIsValidate(result);
      return true;
    }
    return false;
  };
  /* Hooks */
  useEffect(() => {
    if (content) {
      createThumbnail();
    }
  }, [content]);

  /* Render */
  return (
    modal &&
    content && (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: '9999',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{ width: '1200px', height: '650px', borderRadius: '10px' }}
          className="bg-white p-3"
        >
          <div className="h3 mb-5">Minting Masterpiece</div>
          <div
            className="w-full pb-10 flex justify-between"
            style={{ height: '450px' }}
          >
            <pre
              style={{
                display: 'block',
                width: '48%',
                height: '100%',
                padding: ' 10px 30px',
                margin: '0',
                overflow: 'scroll',
                border: '1px solid lightgray',
              }}
            >
              {JSON.stringify(JSON.parse(content.content_paint), null, 2)}
            </pre>
            <div
              style={{
                display: 'block',
                width: '48%',
                height: '100%',
                padding: ' 10px 30px',
                margin: '0',
                border: '1px solid lightgray',
              }}
            >
              <img src={img} />
              <canvas
                ref={canvasRef}
                style={{ position: 'fixed', top: '-100%' }}
              />
            </div>
          </div>
          {isValidate ? (
            <>
              <button
                className="btn-sm text-white bg-blue-500 hover:bg-blue-600 shadow-sm m-6"
                onClick={handleMint}
              >
                Mint Near Face Token
              </button>
              <span className="h3">
                similarity: {100 - isValidate.distance}%
              </span>
            </>
          ) : (
            <button
              className="btn-sm text-white bg-blue-500 hover:bg-blue-600 shadow-sm m-6"
              onClick={handleSubmit}
            >
              AI Validator
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default MintModal;
