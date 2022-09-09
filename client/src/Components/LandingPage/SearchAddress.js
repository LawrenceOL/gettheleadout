import React, { useState, useEffect } from "react";
import "./LandingPage.css";

const SearchAddress = ({
  leadData,
  updateData,
  address,
  setAddress,
}) => {
  const [submit, setSubmit] = useState(true);
  let apiData = leadData;

  const filterLeadData = () => {
    let newData
    if (address === "") {
      newData = null
    }
    else {
    newData =
      apiData &&
      apiData.filter((house) =>
        house.property_address.startsWith(`${address}`)
      );
    updateData(newData)
    }
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
        onChange={handleChange}
        value={address}
        autoComplete="off"
        type="text"
        className="form-control"
        name="address"
        placeholder="&#xf002; Search Your Address"
      />

      {address.length >= 1 ? (
        ""
      ) : (
        <p className="searchtext">Discover the Likelihood of Lead Pipes.</p>
      )}
    </div>
  );
};

export default SearchAddress;