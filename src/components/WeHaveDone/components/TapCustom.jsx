"use client";

import React, { useState } from "react";
import ContentOne from "./ContentOne";
import ContentTwo from "./ContentTwo";
import ContentThree from "./ContentThree";

export default function TapCustom() {
  const [selectedTab, setSelectedTab] = useState("tab-7");

  const handleTabChange = (event) => {
    setSelectedTab(event.target.id);
  };

  return (
    <div>
      <div className="tabs tabs-underline flex justify-between md:w-[675px] border-b border-primary">
        <input
          type="radio"
          id="tab-7"
          name="tab-3"
          className="tab-toggle"
          checked={selectedTab === "tab-7"}
          onChange={handleTabChange}
        />
        <label htmlFor="tab-7" className="tab px-6 text-xl font-semibold">
         All
        </label>
        <br />

        <input
          type="radio"
          id="tab-8"
          name="tab-3"
          className="tab-toggle"
          checked={selectedTab === "tab-8"}
          onChange={handleTabChange}
        />
        <label htmlFor="tab-8" className="tab px-6 text-xl font-semibold">
          Web Security
        </label>
        <br />

        <input
          type="radio"
          id="tab-9"
          name="tab-3"
          className="tab-toggle"
          checked={selectedTab === "tab-9"}
          onChange={handleTabChange}
        />
        <label htmlFor="tab-9" className="tab px-6 text-xl font-semibold">
          Resources
        </label>

        <input
          type="radio"
          id="tab-10"
          name="tab-3"
          disabled
          className="tab-toggle"
          checked={selectedTab === "tab-10"}
          onChange={handleTabChange}
        />
        <label htmlFor="tab-10" className="tab max-sm:hidden px-6 text-xl font-semibold line-through">
          Curriculum
        </label>
      </div>

      {/* Render content based on selected tab */}
      {selectedTab === "tab-7" && <div><ContentOne /></div>}
      {selectedTab === "tab-8" && <div><ContentTwo /></div>}
      {selectedTab === "tab-9" && <div><ContentThree /></div>}
    </div>
  );
}
