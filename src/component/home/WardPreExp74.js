import React from "react";

const WardPreExp74 = () => {
  return (
    <div className="p-6 mt-6 md:mt-1 text-gray-800 text-justify">
      <h1 className="text-xl font-bold md:text-left text-center mb-4">
        Vote Analysis Across Wards for Ward President 2074
      </h1>
      <p className="text-lg mb-4">
        Analyzing the data from the perspective of the Maoist Center party's vote counts reveals the following insights:
      </p>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Overall Performance Across Wards:</h2>
          <ul className="text-lg list-disc list-inside space-y-2">
            <li>Maoist Centre managed to be victorious in 7 out of the 13 wards.</li>
            <li>
              Maoist Centre received votes in all 13 wards, with counts varying significantly across
              them.
            </li>
            <li>
              Their highest vote count is in <span className="font-bold">Ward 5 (544 votes)</span>,
              while the lowest is in <span className="font-bold">Ward 9 (3 votes)</span>.
            </li>
          </ul>
        </div>

        {/* Section 2: Comparison Against Main Competitors */}
        <div>
          <h2 className="text-xl font-semibold mb-2">2. Comparison Against Main Competitors:</h2>
          <ul className="text-lg list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">Ward 5:</span> Maoist Centre’s best performance, with 544
              votes, dominates CPN-UML (53 votes) and Nepali Congress (258 votes), showing strong
              support here.
            </li>
            <li>
              <span className="font-bold">Ward 4:</span> Maoist Centre has a significant lead with
              370 votes against CPN-UML (85 votes) and Nepali Congress (231 votes).
            </li>
            <li>
              <span className="font-bold">Ward 12:</span> A close competition, where Maoist Centre
              (280 votes) is almost tied with CPN-UML (282 votes) and leads against Nepali Congress
              (183 votes).
            </li>
            <li>
              <span className="font-bold">Ward 8:</span> Maoist Centre has 198 votes, which is
              considerably lower compared to Nepali Congress's 476 votes and CPN-UML's 331 votes,
              indicating weaker support here.
            </li>
          </ul>
        </div>

        {/* Section 3: Average Performance */}
        <div>
          <h2 className="text-xl font-semibold mb-2">3. Average Performance:</h2>
          <ul className="text-lg list-disc list-inside space-y-2">
            <li>
              Across the 13 wards, Maoist Centre’s vote count averages around{" "}
              <span className="font-bold">247 votes per ward</span>.
            </li>
            <li>
              Their performance is highly variable, suggesting a mixed support base across different
              areas, with some wards being very strong and others notably weaker.
            </li>
          </ul>
        </div>

        {/* Section 4: Low-Performing Wards */}
        <div>
          <h2 className="text-xl font-semibold mb-2">4. Low-Performing Wards:</h2>
          <ul className="text-lg list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">Ward 9:</span> The weakest for Maoist Centre with only 3
              votes, in contrast to CPN-UML's 330 votes and Nepali Congress's 163 votes.
            </li>
            <li>
              <span className="font-bold">Ward 13:</span> Maoist Centre (237 votes) trails behind
              Nepali Congress (355 votes), indicating a lower level of support in these areas.
            </li>
          </ul>
        </div>

        {/* Section 5: Potential for Growth */}
        <div>
          <h2 className="text-xl font-semibold mb-2">5. Potential for Growth:</h2>
          <ul className="text-lg list-disc list-inside space-y-2">
            <li>
              The disparity in performance across wards suggests potential areas where Maoist Centre
              can focus on increasing its influence, particularly in{" "}
              <span className="font-bold">Wards 8, 9, and 13</span>, where either CPN-UML or Nepali
              Congress has a significant lead.
            </li>
            <li>
              In <span className="font-bold">Wards 1, 2, and 10</span>, where their competitors have
              similar vote counts, there may be an opportunity to strengthen their position with
              focused campaigning.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WardPreExp74;
