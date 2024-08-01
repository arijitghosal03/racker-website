import "bootstrap/dist/css/bootstrap.min.css";
import { FormControlLabel, Switch } from "@mui/material";
import { Dropdown, DropdownButton, SplitButton } from "react-bootstrap";

const SessionForm = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "10px",
        textAlign: "left",
        fontSize: "11px",
        color: "#304050",
        fontFamily: "Vollkorn",
      }}
    >
      <h3
        style={{
          margin: "0",
          position: "relative",
          fontSize: "16px",
          lineHeight: "12.03px",
          fontWeight: "600",
          fontFamily: "inherit",
          color: "#0d1a26",
        }}
      >
        Add Table Details
      </h3>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "7.22px",
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
          Session Name
        </label>
        <input
          style={{
            border: "0.6px solid #dcdee0",
            fontFamily: "Vollkorn",
            fontSize: "11px",
            backgroundColor: "transparent",
            alignSelf: "stretch",
            borderRadius: "2.41px",
            display: "flex",
            flexDirection: "column",
            padding: "4.813793182373047px 9.627586364746094px",
            alignItems: "center",
            justifyContent: "center",
          }}
          type="text"
          placeholder="John’s Private Game"
          maxLength
          minLength
        />
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "10px",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "7.22px",
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
            Game Type
          </label>
          <input
            style={{
              border: "0.6px solid #dcdee0",
              fontFamily: "Vollkorn",
              fontSize: "11px",
              backgroundColor: "transparent",
              alignSelf: "stretch",
              borderRadius: "2.41px",
              display: "flex",
              flexDirection: "column",
              padding: "4.813793182373047px 9.627586364746094px",
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
            Game Format
          </label>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          position: "relative",
          gap: "10px",
        }}
      >
        <div
          style={{
            width: "138.42px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "7.22px",
            zIndex: "0",
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
            Buyin
          </label>
          <input
            style={{
              border: "0.6px solid #dcdee0",
              fontFamily: "Vollkorn",
              fontSize: "11px",
              backgroundColor: "transparent",
              alignSelf: "stretch",
              borderRadius: "2.41px",
              display: "flex",
              flexDirection: "column",
              padding: "4.813793182373047px 9.627586364746094px",
              alignItems: "center",
              justifyContent: "center",
            }}
            type="number"
            placeholder="25/50"
            maxLength
            minLength
            id="BlindsInput"
          />
        </div>
        <div
          style={{
            width: "138.42px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            zIndex: "1",
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
            Currency
          </label>
        </div>
        <DropdownButton
          style={{
            width: "120px",
            display: "flex",
            flexDirection: "column",
            margin: "0",
            position: "absolute",
            top: "24.31px",
            left: "88.92px",
            zIndex: "2",
          }}
          title="USD"
          size="sm"
          variant="primary"
          align="start"
          drop="down"
        >
          <Dropdown.Item>USD</Dropdown.Item>
          <Dropdown.Item>INR</Dropdown.Item>
          <Dropdown.Item>EUR</Dropdown.Item>
        </DropdownButton>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "10px",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "7.22px",
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
            SB/BB
          </label>
          <input
            style={{
              border: "0.6px solid #dcdee0",
              fontFamily: "Vollkorn",
              fontSize: "11px",
              backgroundColor: "transparent",
              alignSelf: "stretch",
              borderRadius: "2.41px",
              display: "flex",
              flexDirection: "column",
              padding: "4.813793182373047px 9.627586364746094px",
              alignItems: "center",
              justifyContent: "center",
            }}
            type="number"
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
            gap: "7.22px",
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
            BB ante
          </label>
          <input
            style={{
              border: "0.6px solid #dcdee0",
              fontFamily: "Vollkorn",
              fontSize: "11px",
              backgroundColor: "transparent",
              alignSelf: "stretch",
              borderRadius: "2.41px",
              display: "flex",
              flexDirection: "column",
              padding: "4.813793182373047px 9.627586364746094px",
              alignItems: "center",
              justifyContent: "center",
            }}
            type="number"
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
            gap: "7.22px",
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
            Table ante
          </label>
          <input
            style={{
              border: "0.6px solid #dcdee0",
              fontFamily: "Vollkorn",
              fontSize: "11px",
              backgroundColor: "transparent",
              alignSelf: "stretch",
              borderRadius: "2.41px",
              display: "flex",
              flexDirection: "column",
              padding: "4.813793182373047px 9.627586364746094px",
              alignItems: "center",
              justifyContent: "center",
            }}
            type="number"
            placeholder="25/50"
            maxLength
            minLength
            required
            id="BlindsInput"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "10px",
          textAlign: "right",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "4.813793182373047px",
            alignItems: "center",
            justifyContent: "center",
            gap: "4.81px",
          }}
        >
          <div style={{ position: "relative", lineHeight: "150%" }}>
            Default Straddle
          </div>
          <FormControlLabel
            style={{ position: "relative" }}
            label=""
            control={<Switch color="primary" size="small" defaultChecked />}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "4.813793182373047px",
            alignItems: "center",
            justifyContent: "center",
            gap: "4.81px",
          }}
        >
          <div style={{ position: "relative", lineHeight: "150%" }}>
            Default Double Straddle
          </div>
          <FormControlLabel
            style={{ position: "relative" }}
            label=""
            control={<Switch color="primary" size="small" defaultChecked />}
          />
        </div>
      </div>
    </div>
  );
};

export default SessionForm;
