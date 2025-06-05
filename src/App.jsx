import './App.css';
import ItineraryList from "./components/ItineraryList";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-[1400px] h-screen mx-auto bg-gray-50">
      
      {/* Left: Itinerary Section */}
      <div className="w-full md:w-[700px] overflow-y-visible p-4">
        <h1 className="text-2xl font-bold text-pink-600">Y2Z TRAVEL</h1>
           <h2 className="text-2xl font-semibold mt-2 ml-10 ">Itinerary</h2>
           <h2 className="font-medium text-lg mt- ml-10 mb-1 text-pink-300">Day</h2>

        <ItineraryList />
      </div>

      {/* Right: Map Section (only show on md and above) */}
      <div className="hidden md:block w-[700px]">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full  h-screen"
        ></iframe>
      </div>
    </div>
  );
}
