import { useEffect } from "react";

const LeftDrawer = ({ onClose }) => {
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
    <div
      style={{
        position: "relative",
        backgroundColor: "#f9f9f9",
        borderRight: "0.5px solid #000",
        boxSizing: "border-box",
        width: "271px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "33px 5px",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "10px",
        opacity: "0",
        maxWidth: "90%",
        overflow: "auto",
        textAlign: "left",
        fontSize: "20px",
        color: "#000",
        fontFamily: "Vollkorn",
      }}
      data-animate-on-scroll
    >
      <h2
        style={{
          margin: "0",
          position: "relative",
          fontSize: "inherit",
          fontWeight: "400",
          fontFamily: "inherit",
        }}
      >
        Menu
      </h2>
      <img
        style={{
          alignSelf: "stretch",
          position: "relative",
          maxWidth: "100%",
          overflow: "hidden",
          height: "20px",
          flexShrink: "0",
        }}
        alt=""
        src="/divider.svg"
      />
    </div>
  );
};

export default LeftDrawer;
