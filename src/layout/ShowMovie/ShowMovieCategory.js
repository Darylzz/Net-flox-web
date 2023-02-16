import { useState } from "react";

export default function ShowMovieCategory({ categoryIframe, categoryImage, categoryName}) {
    const [toggleShowMovieCategory, setToggleShowMovieCategory] = useState(false)
  return (
    <>
      <div>
        {toggleShowMovieCategory ? (
            <iframe
              width="320"
              height="180"
              src={categoryIframe}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
        ) : (
            <img src={process.env.REACT_APP_URL + categoryImage} alt="" />
        )}
      </div>
      <div style={{width: "200px", display: "flex", gap: "60px", paddingTop: "1rem"}}>
      <p style={{color: "#fff"}}>{categoryName}</p>
      <button style={{fontSize: "20px", border: "none", color: "#fff", background: "transparent", cursor: "pointer"}} onClick={() => setToggleShowMovieCategory(!toggleShowMovieCategory)}>Show trailer</button>
      </div>
    </>
  );
}
