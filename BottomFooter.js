import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const BottomFooter = ({
  dimensions,
  dimensions1,
  dimensions2,
  dimensions3,
  propZIndex,
  propCursor,
  propCursor1,
  onButtonSecondaryWithIconLeClick,
  onButtonSecondaryWithIconLe1Click,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      ...getStyleValue("zIndex", propZIndex),
    };
  }, [propZIndex]);

  const buttonSecondaryWithIconLeStyle = useMemo(() => {
    return {
      ...getStyleValue("cursor", propCursor),
    };
  }, [propCursor]);

  const buttonSecondaryWithIconLe1Style = useMemo(() => {
    return {
      ...getStyleValue("cursor", propCursor1),
    };
  }, [propCursor1]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "20px",
        zIndex: "3",
        textAlign: "left",
        fontSize: "9.94px",
        color: "#252a31",
        fontFamily: "Vollkorn",
        ...frameDivStyle,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "18.74px",
        }}
      >
        <div
          style={{
            borderRadius: "2.13px",
            backgroundColor: "#e8edf1",
            boxShadow: "0px 1.419798731803894px 2.84px rgba(0, 0, 0, 0.25)",
            height: "31.24px",
            display: "flex",
            flexDirection: "row",
            padding: "7.098992824554443px 0px",
            boxSizing: "border-box",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "5.68px",
            ...buttonSecondaryWithIconLeStyle,
          }}
          onClick={onButtonSecondaryWithIconLeClick}
        >
          <div style={{ position: "relative", width: "4px", height: "24px" }} />
          <img
            style={{
              position: "relative",
              width: "17.04px",
              height: "17.04px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src={dimensions}
          />
          <div
            style={{
              position: "relative",
              lineHeight: "14.2px",
              fontWeight: "500",
            }}
          >
            New Hand
          </div>
          <div style={{ position: "relative", width: "8px", height: "24px" }} />
        </div>
        <div
          style={{
            borderRadius: "2.13px",
            backgroundColor: "#e8edf1",
            boxShadow: "0px 1.419798731803894px 2.84px rgba(0, 0, 0, 0.25)",
            height: "31.24px",
            display: "flex",
            flexDirection: "row",
            padding: "7.098992824554443px 0px",
            boxSizing: "border-box",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "5.68px",
            ...buttonSecondaryWithIconLe1Style,
          }}
          onClick={onButtonSecondaryWithIconLe1Click}
        >
          <div style={{ position: "relative", width: "4px", height: "24px" }} />
          <img
            style={{
              position: "relative",
              width: "17.04px",
              height: "17.04px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src={dimensions1}
          />
          <div
            style={{
              position: "relative",
              lineHeight: "14.2px",
              fontWeight: "500",
            }}
          >
            Saved hands
          </div>
          <div style={{ position: "relative", width: "8px", height: "24px" }} />
        </div>
        <div
          style={{
            borderRadius: "2.13px",
            backgroundColor: "#e8edf1",
            boxShadow: "0px 1.419798731803894px 2.84px rgba(0, 0, 0, 0.25)",
            height: "31.24px",
            display: "flex",
            flexDirection: "row",
            padding: "7.098992824554443px 0px",
            boxSizing: "border-box",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "5.68px",
          }}
        >
          <div style={{ position: "relative", width: "4px", height: "24px" }} />
          <img
            style={{
              position: "relative",
              width: "14.2px",
              height: "14.2px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src={dimensions2}
          />
          <div
            style={{
              position: "relative",
              lineHeight: "14.2px",
              fontWeight: "500",
            }}
          >
            End Session
          </div>
          <div style={{ position: "relative", width: "8px", height: "24px" }} />
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          height: "42px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12.07px",
          color: "#808080",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              flex: "1",
              borderRadius: "3.02px",
              border: "0.8px solid #aeb3b7",
              display: "flex",
              flexDirection: "row",
              padding: "6.03636360168457px 12.07272720336914px",
              alignItems: "center",
              justifyContent: "center",
              gap: "7.55px",
            }}
          >
            <div
              style={{ flex: "1", position: "relative", lineHeight: "150%" }}
            >
              Tell me your hand
            </div>
            <img
              style={{
                position: "relative",
                width: "18.11px",
                height: "18.11px",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src={dimensions3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
