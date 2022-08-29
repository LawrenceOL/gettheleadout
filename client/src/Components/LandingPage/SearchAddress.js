import React, { useState, useEffect } from "react";
import { InlineShareButtons } from "sharethis-reactjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LandingPage.css";

const SearchAddress = ({
  leadData,
  searchedData,
  setSearchedData,
  updateData,
}) => {
  const [address, setAddress] = useState("");
  let apiData = leadData;
  // const [newData, setNewData] = useState([])
  const handleSubmit = (event) => {
    console.log("yay");
  };
  //   const searchedAddress = leadData.filter((house) => {
  //     if (/^{address}/.test(house.property_address)) {
  //       console.log("true");
  //     }
  //   }
  // )

  const filterLeadData = () => {
    let newData =
      apiData &&
      apiData.filter((house) =>
        house.property_address.startsWith(`${address}`)
      );
    console.log(newData);
  };

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.type === "text") {
      setAddress(event.target.value);
    }
  };

  useEffect(() => {
    filterLeadData();
  }, [address]);

  return (
    <div id="searchaddress">
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
