import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gray-100 text-gray-700 py-6 mt-12 border-t border-gray-200 text-sm">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="font-semibold mb-2">Corresponsales de:</div>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div>
          <div>Fradjusting Ltd.</div>
          <div>International Loss Adjusters</div>
          <div>Harbour City, Canton Road, TST</div>
          <div>Hong Kong</div>
        </div>
        <div>
          <div>M3 Aviation Services</div>
          <div>International Loss Adjusters</div>
          <div>2300 NW 26 St.</div>
          <div>Florida U.S.A.</div>
        </div>
      </div>
    </div>
    <br />
    <p className="text-center mt-4 text-gray-500">
      ETICA ajustadores de seguros - 2025
    </p>
  </footer>
);

export default Footer;
