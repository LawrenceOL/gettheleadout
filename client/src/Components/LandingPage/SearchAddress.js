import React, { useState, useEffect } from "react";
// import Select from 'react-select'
import "./LandingPage.css";

// const SearchAddress = ({leadData, searchedData, setSearchedData, updateData}) => {
const SearchAddress = ({
  leadData,
  searchedData,
  setSearchedData,
  updateData,
}) => {
  const [address, setAddress] = useState("");
  const [submit, setSubmit] = useState(true);
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
  let newData
  const filterLeadData = () => {
    newData =
      apiData &&
      apiData.filter((house) =>
        house.property_address.startsWith(`${address}`)
      );
    updateData(newData)
  };


  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.type === "text") {
      setAddress(event.target.value);
    }
  };

  const changeSubmit = () => {
    setSubmit(!submit);
  };
  useEffect(() => {
    filterLeadData();
  }, [address]);

  // useEffect(() => {
  //   updateData(newData);
  // }, [submit]);

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
      {/* <button onClick={changeSubmit}>Go</button> */}

      {address.length >= 1 ? (
        ""
      ) : (
        <p className="searchtext">Discover the likelihood of lead pipes.</p>
      )}
    </div>
  );
};

export default SearchAddress;
