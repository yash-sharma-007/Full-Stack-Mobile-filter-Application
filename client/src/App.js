import './App.css';
import React, { useState, useEffect } from 'react';

const device_type = ["Smartphone", "Feature Phone", "Tablet", "Phablet", "Smartwatch"];
const operating_system = ["Android", "iOS", "Windows", "macOS", "BlackBerry", "Symbian", "Firefox OS", "Ubuntu Touch", "Tizen", "KaiOS", "ZenithOS"];

function App() {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [order, setOrder] = useState('Ascending');
  const [mobiles, setMobiles] = useState([]);
  const [maxPrice, setMaxPrice] = useState(836476332);
  const [device, setDevice] = useState([]);
  const [os, setOs] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${process.env.REACT_APP_BACAKEND_API}/api/mobiles?search=${search}&sortBy=${sortBy}&order=${order}&device=${device.join(',')}&os=${os.join(',')}&maxPrice=${maxPrice}`
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setMobiles(data.data);
      } catch (error) {
        console.error('Error fetching mobile data:', error);
      }
    };

    fetchData();
  }, [search, sortBy, order, device, os, maxPrice]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  const handleDeviceTypeChange = (e) => {
    const selectedOption = e.target.value;

    setDevice((prevDevice) => {
      const newDevice = [...prevDevice];

      if (e.target.checked) {
        newDevice.push(selectedOption);
      } else {
        const index = newDevice.indexOf(selectedOption);
        if (index !== -1) {
          newDevice.splice(index, 1);
        }
      }
      return newDevice;
    });
  };

  const handleOperatingSystemChange = (e) => {
    const selectedOption = e.target.value;

    setOs((prevOs) => {
      const newOs = [...prevOs];

      if (e.target.checked) {
        newOs.push(selectedOption);
      } else {
        const index = newOs.indexOf(selectedOption);
        if (index !== -1) {
          newOs.splice(index, 1);
        }
      }
      return newOs;
    });
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="container">
      <div className="container">
        <h1 className='title'> Full stack Mobile Application </h1>
        <div className='searchbar'>
          <label className="label">
            Search:
            <input className="input" type="text" value={search} onChange={handleSearchChange} />
          </label>
          <label htmlFor="toggle">
                <div className="toggle-filters" onClick={toggleFilters}>
                    <button className='togglebtn'>{showFilters ? "Hide Filters" : "Show Filters"}</button>
              </div>
          </label>
        </div>

        {showFilters && (
          <div className="sort-container">
            <label className="label">
              Sort By:
              <select className="select" value={sortBy} onChange={handleSortChange}>
                <option value="price">price</option>
                <option value="memory">memory</option>
              </select>
            </label>

            <label className="label">
              Order:
              <select className="select" value={order} onChange={handleOrderChange}>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </label>

            <label className="label">
              Max Price:
              <input
                className="input"
                type="number"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
            </label>
        <div className='selectmulti'>
        
        <div>
                <label className="label">
                  <div className='multi'>
                  Device Type:
                    {device_type.map((element) => (
                      <label key={element} className="checkbox-label">
                        <input
                          type="checkbox"
                          value={element}
                          checked={device.includes(element)}
                          onChange={handleDeviceTypeChange}
                        />
                        {element}
                      </label>
                    ))}


                  </div>
                </label>
        </div>

        <div>
                  <label className="label">
                    Operating System:
                    <div className='multi'>
                      {operating_system.map((element) => (
                        <label key={element} className="checkbox-label">
                          <input
                            type="checkbox"
                            value={element}
                            checked={os.includes(element)}
                            onChange={handleOperatingSystemChange}
                          />
                          {element}
                        </label>
                      ))}
                    </div>
                  </label>
        </div>

        </div>
          </div>
        )}


        <div>
          <h2>Filtered Mobiles: {mobiles ? mobiles.length : 0}</h2>
          <br />
          <ul className="mobile-list Display">
            {mobiles ? mobiles.map((mobile) => (
              <li key={mobile._id} className="mobile-item">
                Name: {mobile.name} <br />
                Price: {mobile.price} <br />
                Type: {mobile.type} <br />
                Memory: {mobile.memory}GB <br />
                Processor: {mobile.processor} <br />
                Os: {mobile.OS} <br />
              </li>
            )) : ""
            }
          </ul>
        </div>

        
      </div>
    </div>
  );
}

export default App;

