import Hls from "hls.js";
import { useEffect } from "react";

const HlsjsPage = () => {
  useEffect(() => {
    if (Hls.isSupported()) {
      const video = document.getElementById("video") as HTMLMediaElement;
      const src = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      // 読み込み時再生
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
      });
    }
  });
  return <video id="video" controls={true}></video>;
};

export default HlsjsPage;
