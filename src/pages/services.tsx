

import { useState } from 'react';

const services = [
  {
    id: 1,
    name: 'Plumbing Service',
    type: 'Home Service',
    location: 'Kigali',
    availability: 'Available',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Electrician',
    type: 'Home Service',
    location: 'Huye',
    availability: 'Unavailable',
    rating: 4.0,
  },
  // Add more service data here
];


const ServiceCard = ({ name, type, location, availability, rating }: any) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md p-6 m-4 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{type}</p>
      <p className="text-sm text-gray-500 mt-1">{location}</p>
      <p className={`text-sm mt-2 ${availability === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
        {availability}
      </p>
      <div className="flex items-center mt-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`h-5 w-5 ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.562 4.803a1 1 0 00.95.691h5.037c.958 0 1.355 1.221.588 1.81l-4.075 2.96a1 1 0 00-.364 1.118l1.563 4.803c.3.922-.755 1.688-1.54 1.118l-4.075-2.96a1 1 0 00-1.175 0l-4.075 2.96c-.784.57-1.84-.196-1.54-1.118l1.563-4.803a1 1 0 00-.364-1.118L2.304 9.23c-.767-.589-.37-1.81.588-1.81h5.037a1 1 0 00.95-.691l1.562-4.803z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    </div>
  );
};

const ServiceSearch = () => {
  const [searchType, setSearchType] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchAvailability, setSearchAvailability] = useState('');

  const filteredServices = services.filter(
    (service) =>
      (searchType ? service.type.includes(searchType) : true) &&
      (searchLocation ? service.location.includes(searchLocation) : true) &&
      (searchAvailability ? service.availability === searchAvailability : true)
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Find Services</h1>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Service Type"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="border border-gray-300 rounded-lg p-2"
            />
            <input
              type="text"
              placeholder="Location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="border border-gray-300 rounded-lg p-2"
            />
            <select
              value={searchAvailability}
              onChange={(e) => setSearchAvailability(e.target.value)}
              className="border border-gray-300 rounded-lg p-2"
            >
              <option value="">Availability</option>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))
          ) : (
            <p className="text-gray-500">No services found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceSearch;
