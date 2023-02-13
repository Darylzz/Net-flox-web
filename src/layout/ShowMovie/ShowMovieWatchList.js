import { useState } from "react";

export default function ShowMovieWatchList({ watchListTrailer, watchListName, watchListImage }) {
    const [watchListShowMovie, setWatchListShowMovie] = useState(false)
  return (
    <>
      <div>
        {watchListShowMovie ? (
            <>
        <iframe
          width="320"
          height="180"
          src={watchListTrailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
            </>
        ) : (
            <img src={process.env.REACT_APP_URL + watchListImage} alt="" />
        )}
      </div>
      <div style={{width: "200px", display: "flex", gap: "60px", paddingTop: "1rem"}}>
      <p style={{color: "#fff"}}>{watchListName}</p>
      <button style={{fontSize: "16px", color: "#fff", background: "transparent", border: "none", cursor: "pointer"}} onClick={() => setWatchListShowMovie(!watchListShowMovie)}>Show trailer</button>
      </div>
    </>
  );
}
