import React, { useState, useContext, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './SurgePriceManagement.css';
import myContext from './../../../../context/myContext';
import { toast } from 'react-toastify';
import { fireDB } from '../../../../Firebase/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const SurgePriceManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [surgeAreas, setSurgeAreas] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);
  
  const [formData, setFormData] = useState({
    locationName: '',
    minPrice: '',
    maxPrice: '',
    startTime: '',
    endTime: '',
    radius: '',
  });
  
  const [mapCenter, setMapCenter] = useState({ lat: 30.1834, lng: 71.4400 });
  const { addSurgePrice, updateSurgePrice, deleteSurgePrice } = useContext(myContext);

  useEffect(() => {
    const fetchSurgePrices = async () => {
      try {
        const snapshot = await getDocs(collection(fireDB, 'surgeAdjustments'));
        const areas = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSurgeAreas(areas);
      } catch (error) {
        console.error("Error fetching surge prices: ", error);
        toast.error('Failed to fetch surge prices');
      }
    };

    fetchSurgePrices();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchTerm}&key=YOUR_API_KEY`);
    const data = await response.json();

    if (data.results.length > 0) {
      const location = {
        lat: data.results[0].geometry.location.lat,
        lng: data.results[0].geometry.location.lng,
      };
      setSelectedLocation(location);
      setMapCenter(location);
      setFormData({ ...formData, locationName: data.results[0].formatted_address });
      setSelectedArea(null);
    } else {
      toast.error('Location not found');
    }
  };

  const handleMapClick = async (event) => {
    const location = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    setSelectedLocation(location);
    setMapCenter(location);

    // Fetch the address from the lat and lng
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=AIzaSyAqsjlnsVFsSygWPsO0ebpVj0w4a2vsFpc`);
    const data = await response.json();

    if (data.results.length > 0) {
      const locationName = data.results[0].formatted_address;
      setFormData({ ...formData, locationName }); // Set the location name automatically
      setSelectedArea(null); // Clear selected area
    } else {
      toast.error('Address not found for this location');
    }
  };

  const handleMarkerClick = (area) => {
    setSelectedArea(area);
    setSelectedLocation(area.location);
    setMapCenter(area.location);
    setFormData({
      locationName: area.locationName,
      minPrice: area.minPrice,
      maxPrice: area.maxPrice,
      startTime: area.startTime,
      endTime: area.endTime,
      radius: area.radius,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'radius' ? Number(value) : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedLocation) {
      const areaData = {
        location: selectedLocation,
        locationName: formData.locationName,
        ...formData,
      };

      if (selectedArea) {
        const success = await updateSurgePrice(selectedArea.id, areaData);
        if (success) {
          setSurgeAreas(surgeAreas.map(area => area.id === selectedArea.id ? areaData : area));
          toast.success("Surge price updated successfully");
        }
      } else {
        const success = await addSurgePrice(areaData);
        if (success) {
          setSurgeAreas([...surgeAreas, areaData]);
          toast.success("Surge price added successfully");
        }
      }

      // Reset form
      setFormData({
        locationName: '',
        minPrice: '',
        maxPrice: '',
        startTime: '',
        endTime: '',
        radius: '',
      });
      setSelectedLocation(null);
      setSelectedArea(null);
    }
  };

  const handleDelete = async () => {
    if (selectedArea) {
      const success = await deleteSurgePrice(selectedArea.id);
      if (success) {
        setSurgeAreas(surgeAreas.filter(area => area.id !== selectedArea.id));
        toast.success("Surge price deleted successfully");
        setFormData({
          locationName: '',
          minPrice: '',
          maxPrice: '',
          startTime: '',
          endTime: '',
          radius: '',
        });
        setSelectedArea(null);
      }
    }
  };

  return (
    <>
      <p style={{ fontSize: "20px", fontWeight: "800", color: "#FFBC07", marginTop: "50px" }}>
        Add and Manage Surge Price
      </p>

      <form onSubmit={handleSearchSubmit} className="search-container">
        <input
          type="text"
          placeholder="Search area location ..."
          className="search-box"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className='responsive-map mt-5' style={{ height: '500px', width: '100%' }}>
        <LoadScript googleMapsApiKey="AIzaSyAqsjlnsVFsSygWPsO0ebpVj0w4a2vsFpc">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={mapCenter}
            zoom={selectedLocation ? 12 : 10}
            onClick={handleMapClick}
          >
            {surgeAreas.map((area, index) => (
              <Marker
                key={index}
                position={area.location}
                label={{ text: area.locationName, color: "#030a3b", fontSize: "15px", fontWeight: "bold" }}
                icon={{
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 10,
                  fillColor: 'yellow',
                  fillOpacity: 1,
                  strokeWeight: 1,
                }}
                onClick={() => handleMarkerClick(area)}
              />
            ))}
            {selectedLocation && (
              <Marker
                position={selectedLocation}
                icon={{
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 15,
                  fillColor: 'blue',
                  fillOpacity: 1,
                  strokeWeight: 1,
                }}
              />
            )}
          </GoogleMap>
        </LoadScript>
      </div>

      {(selectedArea || selectedLocation) && (
        <form onSubmit={handleSubmit} className="surge-form">
          <h3>{selectedArea ? "Update Surge Price" : "Add Surge Price"}</h3>
          <label>Min Price:</label>
          <input
            type="number"
            name="minPrice"
            value={formData.minPrice}
            onChange={handleInputChange}
            required
          />
          <label>Max Price:</label>
          <input
            type="number"
            name="maxPrice"
            value={formData.maxPrice}
            onChange={handleInputChange}
            required
          />
          <label>Start Time:</label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleInputChange}
            required
          />
          <label>End Time:</label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleInputChange}
            required
          />
          <label>Radius (meters):</label>
          <input
            type="number"
            name="radius"
            value={formData.radius}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="submit-button">Save</button>
          {selectedArea && <button type="button" onClick={handleDelete} className="delete-button">Delete</button>}
        </form>
      )}
    </>
  );
};

export default SurgePriceManagement;
