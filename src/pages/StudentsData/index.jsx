import React from "react";

const StudentsData = () => {
  const tableFields = [
    "S. No.",
    "User id",
    "Name",
    "Branch",
    "Roll no",
    "Profile",
  ];
  const studentsData = [
    {
      id: 10000000,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000001,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000002,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000003,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000004,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000005,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000006,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000007,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000008,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000009,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000010,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000011,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000012,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000013,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000014,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000015,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000016,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000017,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000018,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000019,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000020,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000021,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000022,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000023,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000024,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000025,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
    {
      id: 10000026,
      name: "Rohith",
      branch: "CSE",
      rollno: "245",
    },
  ];

  return (
    <div className="bg-gray-400 flex h-full p-2 min-h-screen">
      <div className="flex rounded-md w-full min-h-full ring-2 ring-gray-600">
        <table className="w-full mx-4 my-2 border-separate">
          <thead className="table-header-group">
            {tableFields.map((fields) => (
              <th className="text-center h-12">{fields}</th>
            ))}
          </thead>
          {studentsData.map((data, index) => (
            <tbody className="">
              <td className="h-8 w-16 text-center">{index + 1}</td>
              <td className="h-8 w-40 text-center">{data.id}</td>
              <td className="text-center">{data.name}</td>
              <td className="h-8 w-32 text-center">{data.branch}</td>
              <td className="h-8 w-48 text-center">{data.rollno}</td>
              <td className="h-8 w-40 text-center">
                {
                  <a
                    href={"https://example.com/" + data.id}
                    children={data.name.toLowerCase()}
                    className="text-blue-500 underline"
                  />
                }
              </td>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default StudentsData;
