import React from "react";
import Navbar from "./components/Navbar/page"; // Import the Navbar
import Calendar from "react-calendar"; // Calendar component
import 'react-calendar/dist/Calendar.css'; // Calendar styling
import Image from 'next/image'; // Import Image from next/image

export default function MainPage(): JSX.Element {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-24 px-8 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <section className="grid grid-cols-3 gap-6">

          

            {/* Premium Subscription */}
            <div className="p-3 bg-gray-900 bg-opacity-50 shadow-md rounded-lg neon-box mt-5 ">
              <Image
              src='/bg1.jpg'
              alt="pitchathon"
              width={700}
              height={800}

              />
              <div className="h-24 bg-gray-800 flex items-center justify-center rounded-lg neon-glow mt-auto">
                <p className="text-gray-300 text-xl font-serif">Subscribe to Premium Features</p>
              </div>
            </div>
          

          {/* Column 2 */}
          <div className="flex flex-col space-y-6">
            {/* Upcoming Posters */}
            <div className="p-6 bg-gray-900 bg-opacity-50 shadow-md rounded-lg neon-box">
              <Image
                src="/pitch.jpg"
                alt="pitchathon"
                width={700}
                height={800}
                className="rounded-t-lg"
              />
              
              <div className="h-32 bg-gray-800 flex items-center justify-center rounded-lg neon-glow">
                <p className="text-gray-300 text-xl font-bold">Upcoming Events!</p>
              </div>
            </div>

            {/* Registered Events */}
            <div className="p-6 bg-gray-900 bg-opacity-50 shadow-md rounded-lg neon-box">
              <h2 className="text-lg font-semibold mb-4">Registered Events</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800 rounded-lg neon-glow">
                  <p>Pitathon</p>
                  <p>Date: 1st October</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg neon-glow">
                  <p>GDSC Event</p>
                  <p>Date: 4th October</p>
                </div>
                <button className="bg-blue-500 neon-button text-white px-4 py-2 rounded-lg">
                  See All Events
                </button>
              </div>
            </div>
          </div>

          {/* Column 3 */}
            <div className="flex flex-col space-y-6">
            {/* Requests Received */}
            <div className="p-6 bg-gray-900 bg-opacity-50 shadow-md rounded-lg neon-box">
              <h2 className="text-lg font-semibold mb-4">Requests Received</h2>
              <div className="space-y-4">
              <div className="p-4 bg-gray-800 rounded-lg neon-glow">
                <p>Hackathon Request 1</p>
                <p>Date: 1st October</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg neon-glow">
                <p>Project Collaboration Request</p>
                <p>Date: 3rd October</p>
              </div>
              <button className="bg-blue-500 neon-button text-white px-4 py-2 rounded-lg">
                See All
              </button>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="p-6 bg-gray-900 bg-opacity-50 shadow-md rounded-lg neon-box">
              <h2 className="text-lg font-semibold mb-4">Chat</h2>
              <div className="flex flex-col space-y-4 h-64 overflow-y-auto bg-gray-800 p-4 rounded-lg neon-glow">
              {/* Chat messages */}
              <div className="flex flex-col space-y-2">
                <div className="self-start bg-gray-700 p-2 rounded-lg">
                <p className="text-gray-300">Hello! How can I help you?</p>
                </div>
                <div className="self-end bg-blue-600 p-2 rounded-lg">
                <p className="text-white">I need some information about the event.</p>
                </div>
              </div>
              </div>
              <div className="mt-4 flex">
              <input
                type="text"
                className="flex-1 p-2 rounded-l-lg bg-gray-700 text-gray-300"
                placeholder="Type your message..."
              />
              <button className="bg-blue-500 neon-button text-white px-4 py-2 rounded-r-lg">
                Send
              </button>
              </div>
            </div>
            </div>
          
        </section>
      </main>
    </>
  );
}
