import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/allhandspageselected-handmobile");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/allhandspageselected-handmobile");
  }, [navigate]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "20px",
        zIndex: "0",
        textAlign: "left",
        fontSize: "18.02px",
        color: "#000",
        fontFamily: "Vollkorn",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0px 0px 20px",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "3.75px",
        }}
      >
        <b style={{ position: "relative", lineHeight: "150%" }}>Saved Hands</b>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            fontSize: "15.01px",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              padding: "7.507315158843994px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "75.07px",
            }}
          >
            <div style={{ position: "relative", lineHeight: "150%" }}>
              My Hand
            </div>
            <div style={{ position: "relative", lineHeight: "150%" }}>Flop</div>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              padding: "7.507315158843994px",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "75.07px",
              cursor: "pointer",
            }}
            onClick={onFrameContainer1Click}
          >
            <div style={{ position: "relative", lineHeight: "150%" }}>
              A♣ A♥
            </div>
            <div style={{ position: "relative", lineHeight: "150%" }}>
              9♦ T♠ J♥
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              padding: "7.507315158843994px",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "75.07px",
              cursor: "pointer",
            }}
            onClick={onFrameContainer2Click}
          >
            <div style={{ position: "relative", lineHeight: "150%" }}>
              6♠ T♥
            </div>
            <div style={{ position: "relative", lineHeight: "150%" }}>
              2♣ 5♥ 7♣
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "18.74px",
          fontSize: "9.94px",
          color: "#252a31",
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
          }}
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
            src="/plus--24--outline1.svg"
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
          }}
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
            src="/justify-alignment--24--outline11.svg"
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
            src="/minus--24--outline11.svg"
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
              src="/paper-plane--24--outline11.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
