
import { useState } from "react";

export default function Dashboard() {
  const [tab, setTab] = useState("patients");

  return (
    <div className="min-h-screen bg-teal-50 p-4 font-sans">
      <div className="flex items-center space-x-4 mb-6">
        <img src="/logo.png" alt="Nishal Clinic Logo" className="w-12 h-12 rounded-full" />
        <div>
          <h1 className="text-3xl font-bold text-teal-800">Nishal Clinic Admin Dashboard</h1>
          <p className="text-sm text-gray-600 italic">Creating Smiles</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Total Patients</p>
          <h2 className="text-2xl font-semibold text-teal-700">158</h2>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Appointments Today</p>
          <h2 className="text-2xl font-semibold text-teal-700">12</h2>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Pending Payments</p>
          <h2 className="text-2xl font-semibold text-red-500">₹24,500</h2>
        </div>
      </div>

      <div className="mb-4 flex space-x-2">
        <button onClick={() => setTab('patients')} className={`px-4 py-2 rounded ${tab === 'patients' ? 'bg-teal-600 text-white' : 'bg-white text-teal-600 border'}`}>Patients</button>
        <button onClick={() => setTab('appointments')} className={`px-4 py-2 rounded ${tab === 'appointments' ? 'bg-teal-600 text-white' : 'bg-white text-teal-600 border'}`}>Appointments</button>
        <button onClick={() => setTab('billing')} className={`px-4 py-2 rounded ${tab === 'billing' ? 'bg-teal-600 text-white' : 'bg-white text-teal-600 border'}`}>Billing</button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        {tab === 'patients' && (
          <>
            <input placeholder="Search patient..." className="border p-2 w-full mb-2" />
            <p className="text-gray-500">Patient list will appear here (dummy data).</p>
          </>
        )}
        {tab === 'appointments' && (
          <p className="text-gray-500">Calendar view for appointments (dummy).</p>
        )}
        {tab === 'billing' && (
          <p className="text-gray-500">Invoices and payments records (dummy).</p>
        )}
      </div>
    </div>
  );
}
