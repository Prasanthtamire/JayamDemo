// import React from 'react';
// import { Calendar, Gift, Mic, PartyPopper, Star } from 'lucide-react';
// import {
//   mockEmployees,
//   mockEvents,
//   mockAnnouncements,
//   mockBirthdays,
//   mockServiceAnniversaries 
// } from '../data/mockData';

// const DashboardOverview: React.FC = () => {
//   return (
//     <div className="space-y-8">
//       <div className="grid lg:grid-cols-3 gap-8">
//         {/* Employee Spotlight */}
//        {/* Employee Spotlight */}
//         <div className="card-3d animate-fade-in h-[450px] flex flex-col">
//           <div className="flex justify-between mb-2">
//             <div className="heading-with-line">
//               <h3 className="stat-value gasp-style">Employee Spotlight</h3>
//             </div>
//             <Star className="w-6 h-6 text-yellow-500 animate-pulse-soft" />
//           </div>

//           <div className="space-y-4 overflow-y-auto pr-2 flex-1">
//             {mockEmployees.slice(0, 6).map((employee) => (
//               <div
//                 key={employee.id}
//                 className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-all duration-300"
//               >
//                 <div className="relative">
//                   <img
//                     src={employee.avatar}
//                     alt={`${employee.firstName} ${employee.lastName}`}
//                     className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
//                   />
//                   <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse-soft"></div>
//                 </div>
//                 <div className="flex-1">
//                   <p className="font-semibold text-sm text-gray-900">
//                     {employee.firstName} {employee.lastName}
//                   </p>
//                   <p className="text-xs text-gray-600">{employee.position}</p>
//                   <div className="flex items-center mt-1 space-x-1">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
//                     ))}
//                     <span className="text-xs text-gray-500 ml-2">Excellent</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>


//         {/* Upcoming Events */}
//          <div className="card-3d animate-fade-in h-[450px] flex flex-col">
//           <div className="flex justify-between mb-2">
//             <div className="heading-with-line">
//               <h3 className="stat-value gasp-style">Upcoming Events</h3>
//             </div>
//             <Calendar className="w-6 h-6 text-green-500 animate-bounce-gentle" />
//           </div>

//           <div className="space-y-4 overflow-y-auto pr-2 flex-1">
//             {mockEvents.slice(0, 6).map((event) => (
//               <div
//                 key={event.id}
//                 className="relative p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
//               >
//                 <div
//                   className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${
//                     event.type === 'meeting'
//                       ? 'bg-blue-500'
//                       : event.type === 'training'
//                       ? 'bg-green-500'
//                       : event.type === 'holiday'
//                       ? 'bg-red-500'
//                       : 'bg-yellow-500'
//                   }`}
//                 ></div>
//                 <div>
//                   <p className="font-semibold text-gray-900 mb-1 text-sm">{event.title}</p>
//                   <p className="text-xs text-gray-600 mb-1">{event.description}</p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs text-green-500">
//                       {new Date(event.date).toLocaleDateString()} at {event.time}
//                     </span>
//                     <span
//                       className={`px-2 py-1 rounded-full  text-xs font-medium ${
//                         event.type === 'meeting'
//                           ? 'bg-blue-100 text-blue-800'
//                           : event.type === 'training'
//                           ? 'bg-green-100 text-green-800'
//                           : event.type === 'holiday'
//                           ? 'bg-red-100 text-red-800'
//                           : 'bg-yellow-100 text-yellow-800'
//                       }`}
//                     >
//                       {event.type}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Birthdays  */}
//                 {/* Birthdays */}
//       <div className="card-3d animate-fade-in h-[450px] flex flex-col">
//         <div className="flex justify-between mb-2">
//           <div className="heading-with-line">
//             <h3 className="stat-value gasp-style">Upcoming Birthdays</h3>
//           </div>
//           <Gift className="w-6 h-6 text-pink-500 animate-bounce-gentle" />
//         </div>

//         {/* Scrollable Content */}
//         <div className="space-y-3 overflow-y-auto pr-2 flex-1">
//           {mockBirthdays.map((birthday) => (
//             <div
//               key={birthday.id}
//               className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-all duration-300"
//             >
//               <div className="relative">
//                 <img
//                   src={birthday.avatar}
//                   alt={birthday.name}
//                   className="w-10 h-10 rounded-full object-cover ring-2 ring-pink-200"
//                 />
//                 <div className="absolute -top-1 -right-1 text-xs">🎂</div>
//               </div>
//               <div className="flex-1">
//                 <p className="font-semibold text-sm text-gray-900">{birthday.name}</p>
//                 <p className="text-xs text-gray-600 mb-1">{birthday.department}</p>
//                 <p className="text-xs text-pink-600 font-medium">
//                   {new Date(birthday.date).toLocaleDateString('en-US', {
//                     month: 'long',
//                     day: 'numeric'
//                   })}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//           {/* Announcements */}
//          <div className="card-3d animate-fade-in h-[450px] flex flex-col">
//             <div className="flex justify-between mb-2">
//               <div className="heading-with-line">
//                 <h3 className="stat-value gasp-style">Announcements</h3>
//               </div>
//               <Mic className="w-6 h-6 text-orange-500 animate-pulse-soft" />
//             </div>

//             <div className="space-y-3 overflow-y-auto pr-2 flex-1">
//               {mockAnnouncements.map((announcement) => (
//                 <div
//                   key={announcement.id}
//                   className="p-3 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300"
//                 >
//                   <div className="flex items-start justify-between mb-2">
//                     <h4 className="font-semibold text-gray-900 text-sm">{announcement.title}</h4>
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs font-medium ${
//                         announcement.priority === 'high'
//                           ? 'bg-red-100 text-red-800'
//                           : announcement.priority === 'medium'
//                           ? 'bg-yellow-100 text-yellow-800'
//                           : 'bg-green-100 text-green-800'
//                       }`}
//                     >
//                       {announcement.priority}
//                     </span>
//                   </div>
//                   <p className="text-xs text-gray-600 mb-2 line-clamp-2">{announcement.content}</p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs text-orange-500">{announcement.author}</span>
//                     <span className="text-xs text-gray-400">
//                       {new Date(announcement.date).toLocaleDateString()}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>


//           {/* SErvice Annivarsary */}
//   {/* Service Anniversary */}
// <div className="card-3d animate-fade-in h-[450px] flex flex-col">
//   <div className="flex justify-between mb-2">
//     <div className="heading-with-line">
//       <h3 className="stat-value gasp-style">Work Anniversary</h3>
//     </div>
//     <PartyPopper className="w-6 h-6 text-yellow-500 animate-bounce-gentle" />
//   </div>

//   <div className="space-y-3 overflow-y-auto pr-2 flex-1">
//     {mockServiceAnniversaries.map((anniv) => (
//       <div
//         key={anniv.id}
//         className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 transition-all duration-300"
//       >
//         <div className="relative">
//           <img
//             src={anniv.avatar}
//             alt={anniv.name}
//             className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-200"
//           />
//         </div>
//         <div className="flex-1">
//           <p className="font-semibold text-sm text-gray-900">{anniv.name}</p>
//           <p className="text-xs text-gray-600 mb-1">{anniv.department}</p>
//           <p className="text-xs text-yellow-600 font-medium">
//             {anniv.yearsCompleted}
//             {anniv.yearsCompleted === 1
//               ? 'st'
//               : anniv.yearsCompleted === 2
//               ? 'nd'
//               : anniv.yearsCompleted === 3
//               ? 'rd'
//               : 'th'}{' '}
//             Service Anniversary on{' '}
//             {new Date(anniv.startDate).toLocaleDateString('en-US', {
//               day: 'numeric',
//               month: 'short',
//             })}
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>




//         </div>
//         </div>
//   );
// };

// export default DashboardOverview;




import React, { useState } from 'react';
import { Calendar, Gift, Mic, PartyPopper, Star } from 'lucide-react';
import {
  mockEmployees,
  mockEvents,
  mockAnnouncements,
  mockBirthdays,
  mockServiceAnniversaries,
} from '../data/mockData';

const DashboardOverview: React.FC = () => {
  const [selectedBirthday, setSelectedBirthday] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (birthday: any) => {
    setSelectedBirthday(birthday);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBirthday(null);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Employee Spotlight */}
        <div className="card-3d animate-fade-in h-[450px] flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="heading-with-line">
              <h3 className="stat-value gasp-style">Employee Spotlight</h3>
            </div>
            <Star className="w-6 h-6 text-yellow-500 animate-pulse-soft" />
          </div>

          <div className="space-y-4 overflow-y-auto pr-2 flex-1">
            {mockEmployees.slice(0, 6).map((employee) => (
              <div
                key={employee.id}
                className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={employee.avatar}
                    alt={`${employee.firstName} ${employee.lastName}`}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse-soft"></div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-gray-900">
                    {employee.firstName} {employee.lastName}
                  </p>
                  <p className="text-xs text-gray-600">{employee.position}</p>
                  <div className="flex items-center mt-1 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-xs text-gray-500 ml-2">Excellent</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       

        {/* Upcoming Birthdays */}
        <div className="card-3d animate-fade-in h-[450px] flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="heading-with-line">
              <h3 className="stat-value gasp-style">Upcoming Birthdays</h3>
            </div>
            <Gift className="w-6 h-6 text-pink-500 animate-bounce-gentle" />
          </div>

          <div className="space-y-3 overflow-y-auto pr-2 flex-1">
            {mockBirthdays.map((birthday) => (
              <div
                key={birthday.id}
                onClick={() => openModal(birthday)}
                className="cursor-pointer flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={birthday.avatar}
                    alt={birthday.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-pink-200"
                  />
                  <div className="absolute -top-1 -right-1 text-xs">🎂</div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-gray-900">{birthday.name}</p>
                  <p className="text-xs text-gray-600 mb-1">{birthday.department}</p>
                  <p className="text-xs text-pink-600 font-medium">
                    {new Date(birthday.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

  {/* Work Anniversary */}
        <div className="card-3d animate-fade-in h-[450px] flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="heading-with-line">
              <h3 className="stat-value gasp-style">Work Anniversary</h3>
            </div>
            <PartyPopper className="w-6 h-6 text-yellow-500 animate-bounce-gentle" />
          </div>

          <div className="space-y-3 overflow-y-auto pr-2 flex-1">
            {mockServiceAnniversaries.map((anniv) => (
              <div
                key={anniv.id}
                className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 transition-all duration-300"
              >
                <img
                  src={anniv.avatar}
                  alt={anniv.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-200"
                />
                <div className="flex-1">
                  <p className="font-semibold text-sm text-gray-900">{anniv.name}</p>
                  <p className="text-xs text-gray-600 mb-1">{anniv.department}</p>
                  <p className="text-xs text-yellow-600 font-medium">
                    {anniv.yearsCompleted}
                    {anniv.yearsCompleted === 1
                      ? 'st'
                      : anniv.yearsCompleted === 2
                      ? 'nd'
                      : anniv.yearsCompleted === 3
                      ? 'rd'
                      : 'th'}{' '}
                    Service Anniversary on{' '}
                    {new Date(anniv.startDate).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Announcements */}
        <div className="card-3d animate-fade-in h-[450px] flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="heading-with-line">
              <h3 className="stat-value gasp-style">Announcements</h3>
            </div>
            <Mic className="w-6 h-6 text-orange-500 animate-pulse-soft" />
          </div>

          <div className="space-y-3 overflow-y-auto pr-2 flex-1">
            {mockAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className="p-3 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm">{announcement.title}</h4>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      announcement.priority === 'high'
                        ? 'bg-red-100 text-red-800'
                        : announcement.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {announcement.priority}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">{announcement.content}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-orange-500">{announcement.author}</span>
                  <span className="text-xs text-gray-400">
                    {new Date(announcement.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>


 {/* Upcoming Events */}
        <div className="card-3d animate-fade-in h-[450px] flex flex-col">
          <div className="flex justify-between mb-2">
            <div className="heading-with-line">
              <h3 className="stat-value gasp-style">Upcoming Events</h3>
            </div>
            <Calendar className="w-6 h-6 text-green-500 animate-bounce-gentle" />
          </div>

          <div className="space-y-4 overflow-y-auto pr-2 flex-1">
            {mockEvents.slice(0, 6).map((event) => (
              <div
                key={event.id}
                className="relative p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl ${
                    event.type === 'meeting'
                      ? 'bg-blue-500'
                      : event.type === 'training'
                      ? 'bg-green-500'
                      : event.type === 'holiday'
                      ? 'bg-red-500'
                      : 'bg-yellow-500'
                  }`}
                ></div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1 text-sm">{event.title}</p>
                  <p className="text-xs text-gray-600 mb-1">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-green-500">
                      {new Date(event.date).toLocaleDateString()} at {event.time}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.type === 'meeting'
                          ? 'bg-blue-100 text-blue-800'
                          : event.type === 'training'
                          ? 'bg-green-100 text-green-800'
                          : event.type === 'holiday'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {event.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
      </div>

      {/* 🎉 Birthday Modal */}
      {isModalOpen && selectedBirthday && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center animate-fade-in">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl"
            >
              ×
            </button>

            <div className="text-center mb-4">
              <img
                src={selectedBirthday.avatar}
                alt={selectedBirthday.name}
                className="w-20 h-20 mx-auto rounded-full ring-2 ring-pink-300"
              />
              <h2 className=" font-bold  gasp-style mt-2 text-pink-600 animate-pulse-soft">
                Happy Birthday, {selectedBirthday.name}!
              </h2>
              <p className="text-sm text-gray-500">{selectedBirthday.department}</p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center mb-4">
              {['🎉', '🎂', '🎁', '🌟', '💐', '🍰'].map((emoji, i) => (
                <div
                  key={i}
                  className="text-3xl p-3 bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl hover:scale-110 transform transition"
                >
                  {emoji}
                </div>
              ))}
            </div>

            <textarea
              placeholder="Write your birthday wishes..."
              className="w-full p-3 border border-pink-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
              rows={3}
            />

            <button
              onClick={() => {
                alert('Birthday wish sent!');
                closeModal();
              }}
              className="mt-4 w-full py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl transition"
            >
              Send Wishes 🎈
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardOverview;
