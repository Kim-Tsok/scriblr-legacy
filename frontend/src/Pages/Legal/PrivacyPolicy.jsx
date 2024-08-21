import React from "react";

function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-700">
        This Privacy Policy outlines how we collect, use, and protect your
        personal information. By using our website/app, you consent to the
        practices described herein.
      </p>

      {/* Replace with your specific content */}
      <h2 className="text-2xl font-semibold mt-8">Information We Collect</h2>
      <ul className="list-disc ml-4">
        <li>Personal information (name, email, address)</li>
        <li>Usage data</li>
        <li>Device information</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">
        How We Use Your Information
      </h2>
      <ul className="list-disc ml-4">
        <li>To provide and improve our services</li>
        <li>For marketing purposes</li>
        <li>To communicate with you</li>
      </ul>

      {/* Add more sections as needed: Information Sharing, Data Security, User Rights, etc. */}

      <p className="text-gray-700 mt-8">
        We reserve the right to modify this Privacy Policy at any time. Changes
        will be effective immediately upon posting.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
