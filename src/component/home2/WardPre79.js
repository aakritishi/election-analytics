import React from "react";

const WardPresident2079 = () => {
  const data = [
    { ward: 1, parties: { Maoist: 426, UML: 148, Congress: 417, RaPraPa: 30, Independent: 27 } },
    { ward: 2, parties: { Maoist: 334, UML: 72, Congress: 388, RaPraPa: "-", Independent: "-" } },
    { ward: 3, parties: { Maoist: 555, UML: 95, Congress: 541, RaPraPa: "-", Independent: 0 } },
    { ward: 4, parties: { Maoist: 343, UML: 51, Congress: 504, RaPraPa: "-", Independent: "-" } },
    { ward: 5, parties: { Maoist: 498, UML: 19, Congress: 514, RaPraPa: "-", Independent: 0 } },
    { ward: 6, parties: { Maoist: 216, UML: 264, Congress: 167, RaPraPa: "-", Independent: 35 } },
    { ward: 7, parties: { Maoist: 252, UML: 469, Congress: 317, RaPraPa: "-", Independent: "-" } },
    { ward: 8, parties: { Maoist: 220, UML: 467, Congress: 520, RaPraPa: "-", Independent: "-" } },
    { ward: 9, parties: { Maoist: 158, UML: 276, Congress: 172, RaPraPa: "-", Independent: 0 } },
    { ward: 10, parties: { Maoist: 318, UML: 94, Congress: 231, RaPraPa: "-", Independent: "-" } },
    { ward: 11, parties: { Maoist: "-", UML: 304, Congress: "-", RaPraPa: "-", Independent: 1 } },
    { ward: 12, parties: { Maoist: 466, UML: 357, Congress: 17, RaPraPa: "-", Independent: "-" } },
    { ward: 13, parties: { Maoist: 418, UML: 102, Congress: 186, RaPraPa: "-", Independent: 43 } },
  ];

  // Function to get the highest count in each row
  const getHighest = (parties) => {
    const values = Object.values(parties).filter(value => typeof value === "number");
    return Math.max(...values);
  };

  return (
    <div className="overflow-x-auto p-6">
      <table className="w-full border-collapse border border-gray-500 bg-gray-800 text-white md:w-[80%] my-6">
      <caption className="text-left text-lg mb-2 font-bold text-black">Vote Count for Ward President 2079</caption>
        <thead>
          <tr>
            <th className="border border-gray-500 px-4 py-2">Ward no.</th>
            <th className="border border-gray-500 px-4 py-2">Maoist Centre</th>
            <th className="border border-gray-500 px-4 py-2">CPN-UML</th>
            <th className="border border-gray-500 px-4 py-2">Nepali Congress</th>
            <th className="border border-gray-500 px-4 py-2">Ra Pra Pa</th>
            <th className="border border-gray-500 px-4 py-2">Independent</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            const highest = getHighest(row.parties);

            return (
              <tr key={index}>
                <td className="border border-gray-500 px-4 py-2 text-center">{row.ward}</td>
                {Object.entries(row.parties).map(([party, count], idx) => (
                  <td
                    key={idx}
                    className={`border border-gray-500 text-center px-4 py-2 ${
                      count === highest ? "bg-yellow-300 font-bold text-gray-800" : ""
                    }`}
                  >
                    {count}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WardPresident2079;
