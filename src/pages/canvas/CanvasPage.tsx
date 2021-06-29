import { useEffect, useRef } from "react";

const CanvasPage = () => {
  const canvasRef = useRef(null);

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;
    return canvas?.getContext("2d");
  };

  const images = [
    "https://molcar-anime.com/wp-content/themes/molcar-anime/images/top/chara/chara-01.png",
    "https://molcar-anime.com/wp-content/themes/molcar-anime/images/top/chara/chara-02.png",
    "https://molcar-anime.com/wp-content/themes/molcar-anime/images/top/chara/chara-03.png",
    "https://molcar-anime.com/wp-content/themes/molcar-anime/images/top/chara/chara-04.png",
    "https://molcar-anime.com/wp-content/themes/molcar-anime/images/top/chara/chara-05.png",
  ];

  useEffect(() => {
    var count = 0;
    const ctx: CanvasRenderingContext2D = getContext();
    const interval = (v: any) => {
      if (ctx === null) {
        return;
      }
      const img = new Image();
      img.src = images[count];
      count = (count + 1) % images.length;
      img.onload = () => {
        ctx.fillStyle = "#cccccc";
        ctx.fillRect(0, 0, 200, 200);
        ctx.drawImage(img, 0, 0, 100, 100);
        ctx.save();
      };
    };
    setInterval(interval, 1000 / 60);
  });

  return <canvas ref={canvasRef}></canvas>;
};

export default CanvasPage;
