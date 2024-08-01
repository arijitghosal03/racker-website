import { useEffect } from "react";

const MainHeader = ({ dimensions }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <nav
      style={{
        alignSelf: "stretch",
        borderBottom: "0.5px solid rgba(0, 0, 0, 0.5)",
        boxSizing: "border-box",
        height: "70.5px",
        display: "flex",
        flexDirection: "row",
        padding: "14px 30px",
        alignItems: "flex-start",
        justifyContent: "center",
        textAlign: "left",
        fontSize: "21.69px",
        color: "#141414",
        fontFamily: "Volkhov",
      }}
    >
      <div
        style={{
          width: "134px",
          height: "39.51px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "3.1px",
          opacity: "0",
        }}
        data-animate-on-scroll
      >
        <img
          style={{ position: "relative", width: "50.75px", height: "39.49px" }}
          alt=""
          src={dimensions}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative" }}>Racker.</div>
        </div>
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "row",
          padding: "0px 10px",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "6px 2px",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              border: "none",
              padding: "10px",
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: "0",
            }}
            data-animate-on-scroll
          >
            <img
              style={{
                position: "relative",
                width: "20px",
                height: "12px",
                opacity: "1",
              }}
              alt=""
              src="/vector31.svg"
              data-animate-on-scroll
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
