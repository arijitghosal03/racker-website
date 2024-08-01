const AIResponseContainer = ({
  dimensionsText,
  dimensionsCode,
  dimensions15Text,
  dimensions1557Text,
}) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        borderRadius: "12.82px",
        backgroundColor: "#f2f2f2",
        boxShadow: "0px 0px 6.84px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column",
        padding:
          "17.09682846069336px 13.677462577819824px 13.677462577819824px 15px",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        position: "relative",
        gap: "25px",
        zIndex: "1",
        textAlign: "left",
        fontSize: "13.68px",
        color: "#0d1a26",
        fontFamily: "Vollkorn",
      }}
    >
      <img
        style={{
          position: "absolute",
          margin: "0",
          top: "13.68px",
          left: "13.68px",
          width: "42.74px",
          height: "42.74px",
          zIndex: "0",
        }}
        alt=""
        src={dimensionsText}
      />
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          padding: "0px 0px 0px 50px",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "17px",
          zIndex: "1",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            letterSpacing: "0.01em",
            lineHeight: "20.52px",
            fontWeight: "600",
          }}
        >
          Is this summary of the above hand correct?
        </div>
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            fontSize: "14px",
            letterSpacing: "0.01em",
            lineHeight: "20.52px",
          }}
        >
          <p style={{ margin: "0" }}>sjdf isjrfn sifjisd sijflsj sddifj</p>
          <p
            style={{ margin: "0" }}
          >{`ssjkdnfk iuerjf sdofu sdjg adfgjdifagh adfuga `}</p>
          <p style={{ margin: "0" }}>dfihgksj suhgks suhfs rus sfgj</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "20px",
          zIndex: "2",
          fontSize: "10.53px",
          color: "#252a31",
        }}
      >
        <div
          style={{
            borderRadius: "2.26px",
            backgroundColor: "#e8edf1",
            boxShadow: "0px 1.5038560628890991px 3.01px rgba(0, 0, 0, 0.25)",
            height: "33.08px",
            display: "flex",
            flexDirection: "row",
            padding: "7.519280433654785px 0px",
            boxSizing: "border-box",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "6.02px",
          }}
        >
          <div style={{ position: "relative", width: "4px", height: "24px" }} />
          <img
            style={{
              position: "relative",
              width: "18.05px",
              height: "18.05px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src={dimensionsCode}
          />
          <div
            style={{
              position: "relative",
              lineHeight: "15.04px",
              fontWeight: "500",
            }}
          >
            Correct
          </div>
          <div style={{ position: "relative", width: "8px", height: "24px" }} />
        </div>
        <div
          style={{
            borderRadius: "2.26px",
            backgroundColor: "#e8edf1",
            boxShadow: "0px 1.5038560628890991px 3.01px rgba(0, 0, 0, 0.25)",
            height: "33.08px",
            display: "flex",
            flexDirection: "row",
            padding: "7.519280433654785px 0px",
            boxSizing: "border-box",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "6.02px",
          }}
        >
          <div style={{ position: "relative", width: "4px", height: "24px" }} />
          <img
            style={{
              position: "relative",
              width: "15.04px",
              height: "15.04px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src={dimensions15Text}
          />
          <div
            style={{
              position: "relative",
              lineHeight: "15.04px",
              fontWeight: "500",
            }}
          >
            Edit
          </div>
          <div style={{ position: "relative", width: "8px", height: "24px" }} />
        </div>
        <div
          style={{
            borderRadius: "2.26px",
            backgroundColor: "#e8edf1",
            boxShadow: "0px 1.5038560628890991px 3.01px rgba(0, 0, 0, 0.25)",
            height: "33.08px",
            display: "flex",
            flexDirection: "row",
            padding: "7.519280433654785px 0px",
            boxSizing: "border-box",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "6.02px",
          }}
        >
          <div style={{ position: "relative", width: "4px", height: "24px" }} />
          <img
            style={{
              position: "relative",
              width: "15.57px",
              height: "15.57px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src={dimensions1557Text}
          />
          <div
            style={{
              position: "relative",
              lineHeight: "15.04px",
              fontWeight: "500",
            }}
          >
            Save to Drafts
          </div>
          <div style={{ position: "relative", width: "8px", height: "24px" }} />
        </div>
      </div>
    </div>
  );
};

export default AIResponseContainer;
