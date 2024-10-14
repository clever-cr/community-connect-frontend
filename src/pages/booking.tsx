import { useState } from 'react';
import { format, addDays, isSameDay } from 'date-fns';

const serviceProviders = [
  { id: 1, name: 'Plumber' },
  { id: 2, name: 'Electrician' },
  // Add more service providers as needed
];

const BookingCalendar = () => {
  const [selectedProvider, setSelectedProvider] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>();
  const [availableSlots,] = useState([
    '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'
  ]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const today = new Date();
  const days = Array.from({ length: 7 }, (_, index) => addDays(today, index)); // Create 7 days ahead

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedSlot(null); // Reset slot when a new date is selected
    // Fetch available slots from your API here based on provider and date
  };

  const handleBooking = () => {
    if (selectedProvider && selectedDate && selectedSlot) {
      // Process the booking
      alert(`Booking confirmed with provider ${selectedProvider} on ${format(selectedDate, 'PPP')} at ${selectedSlot}`);
    } else {
      alert('Please select a provider, date, and time slot.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Book an Appointment</h1>

        {/* Select Service Provider */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Select Service Provider</label>
          <select
            value={selectedProvider || ''}
            onChange={(e) => setSelectedProvider(Number(e.target.value))}
            className="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>Select a provider</option>
            {serviceProviders.map((provider) => (
              <option key={provider.id} value={provider.id}>
                {provider.name}
              </option>
            ))}
          </select>
        </div>

        {/* Select Date */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700">Select Date</label>
          <div className="grid grid-cols-7 gap-3 mt-2">
            {days.map((day) => (
              <button
                key={day.toString()}
                onClick={() => handleDateSelect(day)}
                className={`p-4 border rounded-lg ${isSameDay(day, "393") ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'} hover:bg-blue-400 hover:text-white transition duration-200`}
              >
                <span className="block font-bold">{format(day, 'E')}</span>
                <span className="block text-sm">{format(day, 'MMM d')}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Select Time Slot */}
        {selectedDate && (
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Select Time Slot</label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`p-3 border rounded-lg ${slot === selectedSlot ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'} hover:bg-blue-400 hover:text-white transition duration-200`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Book Appointment Button */}
        <button
          onClick={handleBooking}
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default BookingCalendar;
