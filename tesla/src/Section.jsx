import downArrow from "./assets/images/down-arrow.svg";

function Section({ carName, leftBtn, rightBtn, tagline, photo, arrow }) {
  return (
    <section
      className="h-screen flex flex-col items-center justify-between"
      style={{
        backgroundImage: `url(${photo})`, //TEMPLATE LITERAL
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="top pt-28 text-center">
        <h2 className="font-bold text-5xl mb-2">{carName}</h2>
        <p>{tagline}</p>
      </div>
      <div className="bottom flex justify-center items-center flex-col">
        <div className="cta pb-24">
          <button
            className="rounded-2xl mx-2 px-10 py-3 w-64 text-white text-xs uppercase"
            style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          >
            {leftBtn}
          </button>
          {rightBtn ? (
            <button
              className="rounded-2xl mx-2 px-10 py-3 w-64 text-xs uppercase"
              style={{ backgroundColor: "rgba(255,255,255,0.75)" }}
            >
              {rightBtn}
            </button>
          ) : (
            ""
          )}
        </div>
        {arrow ? <img src={downArrow} alt="" className="w-10 absolute bottom-4 animate-bounce" /> : ""}
      </div>
    </section>
  );
}
export default Section;
