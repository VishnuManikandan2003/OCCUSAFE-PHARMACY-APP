import React, { useState } from 'react';
import { useStore } from '../store';
import { doctors } from '../data/doctors';
import { Star, Clock, Globe2 } from 'lucide-react';

const DoctorBooking = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [patientName, setPatientName] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');

  const bookAppointment = useStore((state) => state.bookAppointment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    bookAppointment({
      doctorId: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
      patientName,
      patientEmail
    });
    // Reset form
    setSelectedDoctor('');
    setSelectedDate('');
    setSelectedTime('');
    setPatientName('');
    setPatientEmail('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book an Appointment</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className={`bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all ${
                selectedDoctor === doctor.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedDoctor(doctor.id)}
            >
              <div className="flex items-start space-x-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{doctor.name}</h3>
                      <p className="text-blue-600">{doctor.specialization}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1">{doctor.rating}</span>
                    </div>
                  </div>
                  
                  <div className="mt-2 space-y-2">
                    <p className="text-sm text-gray-600">
                      <Clock className="h-4 w-4 inline mr-2" />
                      Experience: {doctor.experience}
                    </p>
                    <p className="text-sm text-gray-600">
                      <Globe2 className="h-4 w-4 inline mr-2" />
                      Languages: {doctor.languages.join(', ')}
                    </p>
                    <p className="text-sm text-gray-600">
                      Education: {doctor.education}
                    </p>
                    <p className="text-sm text-gray-600">
                      Available: {doctor.availability.join(', ')}
                    </p>
                    <p className="text-sm font-semibold text-gray-800">
                      Consultation Fee: ${doctor.consultationFee}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Book Appointment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                required
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                value={patientEmail}
                onChange={(e) => setPatientEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                required
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <select
                required
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select time</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={!selectedDoctor}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorBooking;