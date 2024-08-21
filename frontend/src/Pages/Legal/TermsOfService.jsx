import React from "react";

function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-gray-700">
        By using our website/app, you agree to these Terms and Conditions.
      </p>

      {/* Replace with your specific content */}
      <h2 className="text-2xl font-semibold mt-8">User Conduct</h2>
      <ul className="list-disc ml-4">
        <li>Prohibited activities</li>
        <li>User-generated content</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Intellectual Property</h2>
      <p className="text-gray-700">
        All content on this website/app is protected by copyright.
      </p>

      {/* Add more sections as needed: Disclaimer of Warranties, Limitation of Liability, etc. */}

      <p className="text-gray-700 mt-8">
        We reserve the right to modify these Terms and Conditions at any time.
      </p>
    </div>
  );
}

export default TermsAndConditions;
