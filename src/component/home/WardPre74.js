import React from "react";

const WardPresident2074 = () => {
  const data = [
    { ward: 1, parties: { Maoist: 297, UML: 203, Congress: 166, RaPraPa: 127, Independent: "-" } },
    { ward: 2, parties: { Maoist: 245, UML: 128, Congress: 235, RaPraPa: "-", Independent: "-" } },
    { ward: 3, parties: { Maoist: 332, UML: 253, Congress: 275, RaPraPa: "-", Independent: "-"} },
    { ward: 4, parties: { Maoist: 370, UML: 85, Congress: 231, RaPraPa: "-", Independent: "-" } },
    { ward: 5, parties: { Maoist: 544, UML: 53, Congress: 258, RaPraPa: "-", Independent: "-" } },
    { ward: 6, parties: { Maoist: 264, UML: 154, Congress: 152, RaPraPa: 8, Independent: "-" } },
    { ward: 7, parties: { Maoist: 198, UML: 306, Congress: 115, RaPraPa: 74, Independent: "-" } },
    { ward: 8, parties: { Maoist: 198, UML: 331, Congress: 476, RaPraPa: 5, Independent: "-" } },
    { ward: 9, parties: { Maoist: 3, UML: 330, Congress: 163, RaPraPa: "-", Independent: "-" } },
    { ward: 10, parties: { Maoist: 246, UML: 95, Congress: 168, RaPraPa: 3, Independent: "-" } },
    { ward: 11, parties: { Maoist: 13, UML: 277, Congress: 208, RaPraPa: 5, Independent: "-" } },
    { ward: 12, parties: { Maoist: 280, UML: 282, Congress: 183, RaPraPa: "-", Independent: "-" } },
    { ward: 13, parties: { Maoist: 237, UML: 42, Congress: 355, RaPraPa: "-", Independent: "-" } },
  ];

  // Function to get the highest count in each row
  const getHighest = (parties) => {
    const values = Object.values(parties).filter(value => typeof value === "number");
    return Math.max(...values);
  };

  return (
    <div className="overflow-x-auto p-6">
      <table className="w-full border-collapse border border-gray-500 bg-gray-800 text-white md:w-[80%] my-6">
      <caption className="text-left text-lg mb-2 font-bold text-black">Vote Count for Ward President 2074</caption>
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

export default WardPresident2074;
