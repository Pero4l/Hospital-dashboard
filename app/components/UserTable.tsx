"use client";

interface User {
  id: number;
  name: string;
  age: number;
  role: string;
  lastVisit: string;
}

const users: User[] = [
  {
    id: 1,
    name: "John Smith",
    age: 45,
    role: "Patient",
    lastVisit: "2025-08-28",
  },
  { id: 2, name: "Jane Doe", age: 32, role: "Nurse", lastVisit: "2025-08-25" },
  {
    id: 3,
    name: "Michael Johnson",
    age: 60,
    role: "Patient",
    lastVisit: "2025-08-20",
  },
  {
    id: 4,
    name: "Emily White",
    age: 28,
    role: "Doctor",
    lastVisit: "2025-08-22",
  },

    { id: 5, name: "David Brown", age: 50, role: "Patient", lastVisit: "2025-08-18" },
    { id: 6, name: "Sarah Green", age: 35, role: "Nurse", lastVisit: "2025-08-21" },
    { id: 7, name: "Chris Blue", age: 40, role: "Doctor", lastVisit: "2025-08-19" },
    { id: 8, name: "Anna Black", age: 30, role: "Patient", lastVisit: "2025-08-23" },
    { id: 9, name: "Tom Yellow", age: 55, role: "Patient", lastVisit: "2025-08-17" },
    { id: 10, name: "Laura Purple", age: 29, role: "Nurse", lastVisit: "2025-08-24" },

];

const UserTable = () => {
  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-md p-4 sm:p-6 overflow-x-auto">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Recent Users</h2>
      <table className="w-full text-left border-collapse min-w-[300px]">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 sm:p-3 font-semibold text-xs sm:text-base">
              ID
            </th>
            <th className="p-2 sm:p-3 font-semibold text-xs sm:text-base">
              Name
            </th>
            <th className="p-2 sm:p-3 font-semibold text-xs sm:text-base  xs:table-cell">
              Age
            </th>
            <th className="p-2 sm:p-3 font-semibold text-xs sm:text-base  xs:table-cell">
              Role
            </th>
            <th className="p-2 sm:p-3 font-semibold text-xs sm:text-base  md:table-cell">
              Last Visit
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="p-2 sm:p-3 text-xs sm:text-base">{user.id}</td>
              <td className="p-2 sm:p-3 text-xs sm:text-base">{user.name}</td>
              <td className="p-2 sm:p-3 text-xs sm:text-base  xs:table-cell">
                {user.age}
              </td>
              <td className="p-2 sm:p-3 text-xs sm:text-base  xs:table-cell">
                {user.role}
              </td>
              <td className="p-2 sm:p-3 text-xs sm:text-base  md:table-cell">
                {user.lastVisit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
