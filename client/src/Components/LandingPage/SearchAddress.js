import React, { useState, useEffect } from "react";
import { InlineShareButtons } from "sharethis-reactjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LandingPage.css"

const SearchAddress = (props) => {
  const [address, setAddress] = useState("");
  const leadData = props.leadData
  const handleSubmit = (event) => {
    console.log("yay");
  };

  const searchedAddress = leadData.filter((house) => {
    if (/^{address}/.test(house.property_address)) {
      console.log("true");
    }
  }
)
  const filterLeadData = () => {
    leadData.filter((house) => {

    })
  };

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.type === "text") {
      setAddress(event.target.value)
      console.log(address);
    }
  };

  // useEffect(() => {
  //   makeApiCall();
  // }, [address]);

  return (
    <div id="searchaddress">
      {searchedAddress}
        <input
          // onChange={handleEmailChange}
          onChange={handleChange}
          value={address}
          type="text"
          className="form-control"
          name="address"
          placeholder="&#xf002; Search your Address"
        />
        <p className="searchtext">Discover the likelihood of lead pipes.</p>
    </div>
  );
};

export default SearchAddress;
