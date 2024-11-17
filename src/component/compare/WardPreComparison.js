import React from "react";

const VoteComparisonTable = () => {
  const wardsData = [
    { wardNo: 1, votes2074: 297, votes2079: 426, observation: "Significant increase, indicating growing support." },
    { wardNo: 2, votes2074: 245, votes2079: 334, observation: "Strong increase, maintaing competitive standing." },
    { wardNo: 3, votes2074: 332, votes2079: 555, observation: "Large increase, with Maoist Center holding a strong position." },
    { wardNo: 4, votes2074: 370, votes2079: 343, observation: "Minor decrease, but Maoist Center remains a strong contender." },
    { wardNo: 5, votes2074: 544, votes2079: 498, observation: "Slight decrease, but still competative with Nepali congress." },
    { wardNo: 6, votes2074: 264, votes2079: 216, observation: "Decrease with CPN-UML taking the lead in 2079." },
    { wardNo: 7, votes2074: 198, votes2079: 252, observation: "Increase, but CPN-UML remains ahead." },
    { wardNo: 8, votes2074: 198, votes2079: 220, observation: "Slight increase, but still Laging behind both CPN-UML and Neplai Congress." },
    { wardNo: 9, votes2074: 3, votes2079: 158, observation: "Large increase, but CPN-UML remains dominant." },
    { wardNo: 10, votes2074: 246, votes2079: 318, observation: "Noticable increase, enhancing Maoist Center's competitiveness." },
    { wardNo: 11, votes2074: 13, votes2079: 0, observation: "No votes in 2079, indicating a loss of support or participation." },
    { wardNo: 12, votes2074: 280, votes2079: 466, observation: "Significant increase, establishing Maoist Center as a leading party here." },
    { wardNo: 13, votes2074: 237, votes2079: 418, observation: "Strong increase, improving their competitive position." },
  ];

  // Function to calculate the change in votes
  const calculateChange = (votes2074, votes2079) => {
    const change = votes2079 - votes2074;
    return change > 0 ? `+${change}` : change < 0 ? `${change}` : "0";
  };

  return (
    <div className="container mx-auto p-4 my-6">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Table */}
        <div className="w-full mb-4 lg:mb-0">
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-500 text-center bg-gray-800 text-gray-100">
              <caption className="text-left text-lg mb-2 font-bold text-black">
                Comparative analysis of the Ward Presidents vote counts for the <i>Maoist Center</i> between 2074 and 2079
              </caption>
              <thead className="bg-gray-700 text-gray-200">
                <tr>
                  <th className="px-4 py-2 border border-gray-600">Ward No.</th>
                  <th className="px-4 py-2 border border-gray-600">2074 Votes</th>
                  <th className="px-4 py-2 border border-gray-600">2079 Votes</th>
                  <th className="px-4 py-2 border border-gray-600">Change in Votes</th>
                  <th className="px-4 py-2 border border-gray-600">Observation</th>
                </tr>
              </thead>
              <tbody>
                {wardsData.map((ward, index) => (
                  <tr key={index} className="text-lg">
                    <td className="px-4 py-2 border border-gray-600">{ward.wardNo}</td>
                    <td
                      className={`px-4 py-2 border border-gray-600 ${
                        ward.votes2074 > ward.votes2079 ? "bg-yellow-300 text-black underline" : ""
                      }`}
                    >
                      {ward.votes2074}
                    </td>
                    <td
                      className={`px-4 py-2 border border-gray-600 ${
                        ward.votes2079 > ward.votes2074 ? "bg-yellow-300 text-black underline" : ""
                      }`}
                    >
                      {ward.votes2079}
                    </td>
                    <td className="px-4 py-2 border border-gray-600">{calculateChange(ward.votes2074, ward.votes2079)}</td>
                    <td className="px-4 py-2 border border-gray-600">{ward.observation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteComparisonTable;
