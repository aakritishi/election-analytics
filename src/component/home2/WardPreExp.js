import React from "react";

const WardPreExp79 = () => {
  return (
    <div className="p-6 my-8">
      <div className=" mx-auto text-justify">
        <h2 className="text-xl font-bold text-center md:text-left text-black mb-4">
          Vote Analysis Across Wards for Ward President 2079
        </h2>

        {/* Analysis Text */}
        <p className="text-lg text-gray-700 mb-4">
          From the perspective of the Maoist Centre in the 2079 vote count data, the following analysis can be made:
        </p>

        <h3 className="text-xl font-semibold text-black mb-2">1. Overall Performance Across Wards:</h3>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
          <li>Maoist Centre managed to be victorious in 5 out of the 13 wards.</li>
          <li>Maoist Centre received votes in 12 of the 13 wards, with a notable absence in Ward 11.</li>
          <li>The highest vote count for Maoist Centre is in Ward 3 with 555 votes, and the lowest (outside of Ward 11) is in Ward 9 with 158 votes.</li>
        </ul>

        <h3 className="text-xl font-semibold text-black mb-2">2. Comparison Against Main Competitors:</h3>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
          <li>Ward 5: Maoist Centre received 498 votes but was closely contested by Nepali Congress with 514 votes, showing a very competitive race.</li>
          <li>Ward 8: Maoist Centre’s 220 votes are significantly lower than Nepali Congress’s 520 votes and CPN-UML’s 467 votes, indicating a weaker position in this ward.</li>
          <li>Ward 3 showcases a stronghold for Maoist Centre with 555 votes, closely followed by Nepali Congress with 541 votes, showing robust support but close competition.</li>
          <li>Ward 12: With 466 votes, Maoist Centre holds a lead over CPN-UML (357 votes) and Nepali Congress (17 votes), suggesting a strong presence in this ward.</li>
        </ul>

        <h3 className="text-xl font-semibold text-black mb-2">3. Average Performance:</h3>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
          <li>Across the 12 wards where Maoist Centre received votes, the average count is approximately 357 votes per ward, showing a moderately consistent base of support.</li>
          <li>This average suggests an improvement in voter turnout and support when compared to previous data (2074), where certain wards had very low support for Maoist Centre.</li>
        </ul>

        <h3 className="text-xl font-semibold text-black mb-2">5. Low-Performing Wards:</h3>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
          <li>Ward 11: Maoist Centre did not register any votes here, with Independent candidates and CPN-UML dominating instead. This absence suggests a potential gap in engagement or appeal for Maoist Centre in this ward.</li>
          <li>Ward 8 and Ward 7 are also challenging areas, where CPN-UML and Nepali Congress have a strong presence, receiving notably higher votes than Maoist Centre.</li>
        </ul>

        <h3 className="text-xl font-semibold text-black mb-2">6. Potential for Growth:</h3>
        <ul className="list-disc pl-6 text-lg text-gray-700 mb-4">
          <li>Ward 1 and Ward 3 show strong upward trends, where Maoist Centre can focus to solidify its lead or maintain its competitive standing.</li>
          <li>Wards 5 and 4, where the margin of difference with Nepali Congress is narrow, represent wards where targeted efforts could yield stronger results.</li>
          <li>For wards like Ward 9 and Ward 11, the party could develop strategies to improve visibility and engagement with the voter base, as these areas reflect either low or no support.</li>
        </ul>
      </div>
    </div>
  );
};

export default WardPreExp79;
