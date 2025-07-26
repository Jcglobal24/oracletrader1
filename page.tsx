import { useEffect, useState } from "react";

export default function OracleJ7Trade() {
  const [signal, setSignal] = useState(null);

  useEffect(() => {
    const generateDummySignal = () => {
      const assets = ["XAU/USD", "EUR/USD", "GBP/USD", "USD/JPY"];
      const directions = ["CALL", "PUT"];

      const newSignal = {
        asset: assets[Math.floor(Math.random() * assets.length)],
        direction: directions[Math.floor(Math.random() * directions.length)],
        time: new Date().toUTCString(),
        expiry: "1 Minute",
        status: "PENDING"
      };

      setSignal(newSignal);
    };

    generateDummySignal(); // generate on load
    const interval = setInterval(generateDummySignal, 30000); // update every 30 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">📢 ORACLEJ7TRADE SIGNAL</h1>

      {signal ? (
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-md">
          <p className="text-lg mb-2">
            <strong>Asset:</strong> {signal.asset}
          </p>
          <p className="text-lg mb-2">
            <strong>Signal:</strong> {signal.direction}
          </p>
          <p className="text-lg mb-2">
            <strong>Expiry:</strong> {signal.expiry}
          </p>
          <p className="text-lg mb-2">
            <strong>Time:</strong> {signal.time}
          </p>
          <p className="text-lg">
            <strong>Status:</strong> <span className="text-yellow-400">{signal.status}</span>
          </p>
        </div>
      ) : (
        <p>Loading signal...</p>
      )}

      <footer className="mt-12 text-sm text-gray-400 text-center">
        Trade with logical wisdom. <br /> This is not financial advice.
      </footer>
    </main>
  );
}
