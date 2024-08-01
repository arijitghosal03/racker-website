import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const AIResponseForm = ({
  dimensions,
  dimensionsText,
  dimensions1557,
  sessionNameInputTop,
  propCursor,
  onButtonSecondaryWithIconLeClick,
}) => {
  const roundOnlyLogoStyle = useMemo(() => {
    return {
      ...getStyleValue("top", sessionNameInputTop),
    };
  }, [sessionNameInputTop]);

  const buttonSecondaryWithIconLe2Style = useMemo(() => {
    return {
      ...getStyleValue("cursor", propCursor),
    };
  }, [propCursor]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        borderRadius: "13.72px",
        backgroundColor: "#f2f2f2",
        boxShadow: "0px 0px 7.32px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column",
        padding:
          "18.291261672973633px 14.633009910583496px 14.633009910583496px 70px",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        position: "relative",
        gap: "18.29px",
        zIndex: "0",
        textAlign: "left",
        fontSize: "14.63px",
        color: "#0d1a26",
        fontFamily: "Vollkorn",
      }}
    >
      <img
        alt=""
        src={dimensions}
        style={{
          position: "absolute",
          margin: "0",
          top: "34.66px",
          left: "14.63px",
          width: "45.73px",
          height: "45.73px",
          zIndex: "0",
          ...roundOnlyLogoStyle,
        }}
      />
      <div
        style={{
          alignSelf: "stretch",
          position: "relative",
          letterSpacing: "0.01em",
          lineHeight: "21.95px",
          fontWeight: "600",
          zIndex: "1",
        }}
      >
        Please fill in the hand details.
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "10px",
          zIndex: "2",
          fontSize: "12.8px",
          color: "#304050",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "6.6px",
            }}
          >
            <label
              style={{
                cursor: "default",
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "150%",
              }}
              htmlFor="BlindsInputField"
            >
              Number of players in hand
            </label>
            <input
              style={{
                border: "0.6px solid #dcdee0",
                fontFamily: "Vollkorn",
                fontSize: "10.97px",
                backgroundColor: "transparent",
                alignSelf: "stretch",
                borderRadius: "2.2px",
                display: "flex",
                flexDirection: "column",
                padding: "4.402517795562744px 8.805035591125488px",
                alignItems: "center",
                justifyContent: "center",
              }}
              type="text"
              placeholder="25/50"
              maxLength
              minLength
              id="BlindsInput"
            />
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "18px",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "6.6px",
            }}
          >
            <label
              style={{
                cursor: "default",
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "150%",
              }}
              htmlFor="BlindsInputField"
            >
              My Position
            </label>
            <input
              style={{
                border: "0.6px solid #dcdee0",
                fontFamily: "Vollkorn",
                fontSize: "10.97px",
                backgroundColor: "transparent",
                alignSelf: "stretch",
                borderRadius: "2.2px",
                display: "flex",
                flexDirection: "column",
                padding: "4.402517795562744px 8.805035591125488px",
                alignItems: "center",
                justifyContent: "center",
              }}
              type="text"
              placeholder="25/50"
              maxLength
              minLength
              id="BlindsInput"
            />
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "6.6px",
            }}
          >
            <label
              style={{
                cursor: "default",
                alignSelf: "stretch",
                position: "relative",
                lineHeight: "150%",
              }}
              htmlFor="BlindsInputField"
            >
              My Cards
            </label>
            <input
              style={{
                border: "0.6px solid #dcdee0",
                fontFamily: "Vollkorn",
                fontSize: "10.97px",
                backgroundColor: "transparent",
                alignSelf: "stretch",
                borderRadius: "2.2px",
                display: "flex",
                flexDirection: "column",
                padding: "4.402517795562744px 8.805035591125488px",
                alignItems: "center",
                justifyContent: "center",
              }}
              type="text"
              placeholder="25/50"
              maxLength
              minLength
              id="BlindsInput"
            />
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "6.6px",
          }}
        >
          <label
            style={{
              cursor: "default",
              alignSelf: "stretch",
              position: "relative",
              lineHeight: "150%",
            }}
            htmlFor="SessionNameInput"
          >
            Stack Info
          </label>
          <input
            style={{
              border: "0.6px solid #dcdee0",
              fontFamily: "Vollkorn",
              fontSize: "10.97px",
              backgroundColor: "transparent",
              alignSelf: "stretch",
              borderRadius: "2.2px",
              display: "flex",
              flexDirection: "column",
              padding: "4.402517795562744px 8.805035591125488px",
              alignItems: "center",
              justifyContent: "center",
            }}
            type="text"
            placeholder="John’s Private Game"
            maxLength
            minLength
            required
            id="SessionNameInput"
          />
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "6.6px",
          }}
        >
          <label
            style={{
              cursor: "default",
              alignSelf: "stretch",
              position: "relative",
              lineHeight: "150%",
            }}
            htmlFor="SessionNameInput"
          >
            Hand Info
          </label>
          <input
            style={{
              border: "0.6px solid #dcdee0",
              fontFamily: "Vollkorn",
              fontSize: "10.97px",
              backgroundColor: "transparent",
              alignSelf: "stretch",
              borderRadius: "2.2px",
              display: "flex",
              flexDirection: "column",
              padding: "4.402517795562744px 8.805035591125488px",
              alignItems: "center",
              justifyContent: "center",
            }}
            type="text"
            placeholder="John’s Private Game"
            maxLength
            minLength
            required
            id="SessionNameInput"
          />
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            padding: "0px 0px 0px 7.075329303741455px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "28.3px",
            fontSize: "9.91px",
            color: "#252a31",
          }}
        >
          <div
            style={{
              borderRadius: "2.12px",
              backgroundColor: "#e8edf1",
              boxShadow: "0px 1.415065884590149px 2.83px rgba(0, 0, 0, 0.25)",
              height: "31.13px",
              display: "flex",
              flexDirection: "row",
              padding: "7.075329303741455px 0px",
              boxSizing: "border-box",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "5.66px",
              ...buttonSecondaryWithIconLe2Style,
            }}
            onClick={onButtonSecondaryWithIconLeClick}
          >
            <div
              style={{ position: "relative", width: "4px", height: "24px" }}
            />
            <img
              style={{
                position: "relative",
                width: "16.98px",
                height: "16.98px",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src={dimensionsText}
            />
            <div
              style={{
                position: "relative",
                lineHeight: "14.15px",
                fontWeight: "500",
              }}
            >
              Add Hand
            </div>
            <div
              style={{ position: "relative", width: "8px", height: "24px" }}
            />
          </div>
          <div
            style={{
              borderRadius: "2.12px",
              backgroundColor: "#e8edf1",
              boxShadow: "0px 1.415065884590149px 2.83px rgba(0, 0, 0, 0.25)",
              height: "31.13px",
              display: "flex",
              flexDirection: "row",
              padding: "7.075329303741455px 0px",
              boxSizing: "border-box",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "5.66px",
            }}
          >
            <div
              style={{ position: "relative", width: "4px", height: "24px" }}
            />
            <img
              style={{
                position: "relative",
                width: "15.57px",
                height: "15.57px",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src={dimensions1557}
            />
            <div
              style={{
                position: "relative",
                lineHeight: "14.15px",
                fontWeight: "500",
              }}
            >
              Save to Drafts
            </div>
            <div
              style={{ position: "relative", width: "8px", height: "24px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIResponseForm;
