import { useState } from "react";

export default function ShowMovieAll({ allIframe, allImage, allName}) {
    const [toggleShowAllMovie, setToggleShowAllMovie] = useState(false)
  return (
    <>
      <div>
        {toggleShowAllMovie ? (
            <iframe
              width="320"
              height="180"
              src={allIframe}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
        ) : (
            <img src={process.env.REACT_APP_URL + allImage} alt="" />
        )}
      </div>
      <div style={{width: "200px", display: "flex", gap: "60px", paddingTop: "1rem"}}>
      <p style={{color: "#fff"}}>{allName}</p>
      <button style={{fontSize: "16px", border: "none", color: "#fff", background: "transparent", cursor: "pointer"}} onClick={() => setToggleShowAllMovie(!toggleShowAllMovie)}>Show trailer</button>
      </div>
    </>
  );
}
