import { useCallback } from "react";

const SessionsContainer = () => {
  const onButtonContainerClick = useCallback(() => {
    window.open("/newsessionpagemobile");
  }, []);

  return (
    <div
      style={{
        margin: "0",
        position: "absolute",
        top: "90px",
        left: "75px",
        width: "280px",
        height: "229.81px",
        display: "flex",
        flexDirection: "column",
        padding: "40px 0px 0px",
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "12.93px",
        opacity: "0.9",
        minWidth: "280px",
        zIndex: "0",
        textAlign: "left",
        fontSize: "16px",
        color: "#000",
        fontFamily: "Vollkorn",
      }}
    >
      <b style={{ position: "relative", lineHeight: "150%" }}>Sessions</b>
      <div
        style={{
          borderRadius: "2.59px",
          border: "0.6px solid #dcdee0",
          display: "flex",
          flexDirection: "row",
          padding: "5.172380447387695px 10.34476089477539px",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: "12.93px",
          color: "#0d1a26",
        }}
        onClick={onButtonContainerClick}
      >
        <div
          style={{
            position: "relative",
            width: "12.93px",
            height: "12.93px",
            overflow: "hidden",
            flexShrink: "0",
            display: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            lineHeight: "150%",
            fontWeight: "500",
          }}
        >
          + New Session
        </div>
        <div
          style={{
            position: "relative",
            width: "12.93px",
            height: "12.93px",
            overflow: "hidden",
            flexShrink: "0",
            display: "none",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "2.59px",
          fontSize: "15px",
        }}
      >
        <b style={{ position: "relative", lineHeight: "150%" }}>June 2023</b>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "5px",
            fontSize: "12px",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              padding:
                "5.170755863189697px 0px 5.170755863189697px 10.341511726379395px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "10.34px",
            }}
          >
            <div style={{ position: "relative", lineHeight: "150%" }}>
              20th, Tue
            </div>
            <div
              style={{ position: "relative", lineHeight: "150%" }}
            >{`15th, Thu `}</div>
            <div style={{ position: "relative", lineHeight: "150%" }}>
              11th, Sun
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              padding:
                "5.170755863189697px 36.195289611816406px 5.170755863189697px 0px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "10.34px",
            }}
          >
            <div
              style={{ position: "relative", lineHeight: "150%" }}
            >{`Aria Casino with Phil `}</div>
            <div style={{ position: "relative", lineHeight: "150%" }}>
              Big Daddy Casino with Tom
            </div>
            <div style={{ position: "relative", lineHeight: "150%" }}>
              Doyle’s home game
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              padding: "5.170755863189697px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "10.34px",
            }}
          >
            <div style={{ position: "relative", lineHeight: "150%" }}>
              30/60
            </div>
            <div style={{ position: "relative", lineHeight: "150%" }}>
              50/100
            </div>
            <div style={{ position: "relative", lineHeight: "150%" }}>
              50/100/ ante 50
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              padding: "5.170755863189697px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "10.34px",
              color: "#339b30",
            }}
          >
            <div style={{ position: "relative", lineHeight: "150%" }}>
              +9,500
            </div>
            <div
              style={{
                position: "relative",
                lineHeight: "150%",
                color: "#d60606",
              }}
            >
              -3,000
            </div>
            <div style={{ position: "relative", lineHeight: "150%" }}>
              +11,500
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionsContainer;
