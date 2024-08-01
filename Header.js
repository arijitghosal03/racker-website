const Header = ({ dimensions }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        borderBottom: "0.5px solid #000",
        boxSizing: "border-box",
        height: "70px",
        display: "flex",
        flexDirection: "row",
        padding: "14px 15px",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "left",
        fontSize: "21.68px",
        color: "#141414",
        fontFamily: "Volkhov",
      }}
    >
      <div
        style={{
          width: "132.28px",
          height: "39px",
          display: "flex",
          flexDirection: "row",
          padding: "0px 0px 0.01285666786134243px",
          boxSizing: "border-box",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "3.1px",
        }}
      >
        <img
          style={{ position: "relative", width: "50.72px", height: "39.46px" }}
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
          padding: "10px 30px 10px 10px",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "6.5px 2.1666667461395264px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ position: "relative", width: "21.67px", height: "13px" }}
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
