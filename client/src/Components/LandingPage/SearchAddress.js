import React, { useState, useEffect } from "react";
import { InlineShareButtons } from "sharethis-reactjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LandingPage.css"

const SearchAddress = ({leadData, updateData}) => {
  const [address, setAddress] = useState("");
  const [submit, setSubmit] = useState(true);
  let apiData = leadData
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
    let newData = apiData && apiData.filter((house) => house.property_address.startsWith(`${address}`))
    console.log(newData);
}

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.type === "text") {
      setAddress(event.target.value)
    }
  };

  const changeSubmit = () => {
    setSubmit(!submit)
  }
  useEffect(() => {
    filterLeadData();
  }, [address]);

  useEffect(() => {
    updateData('hello')
  }, [submit])

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
        <button onClick={changeSubmit}>Go</button>
       
        <p className="searchtext">Discover the likelihood of lead pipes.</p>

    </div>
  );
};

export default SearchAddress;