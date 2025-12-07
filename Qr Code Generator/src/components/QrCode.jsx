import { useState } from "react";
import QRCode from "react-qr-code";

const colors = [
  {
    color: "#000000",
  },
  {
    color: "#ddb19f",
  },
  {
    color: "#e2a69d",
  },
  {
    color: "#9fad9b",
  },
  {
    color: "#949fba",
  },
];

export const QrCode = () => {
  const [inputValue, setInputValue] = useState(
    "https://github.com/AbdulaleemMughal"
  );
  const [activeColor, setActiveColor] = useState("#000000");

  return (
    <div className="bg-gray-200">
      <h1 className="text-center text-5xl pt-3 font-semibold">
        Qr Code Generator
      </h1>
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="flex flex-col w-[500px]">
          <input
            type="text"
            placeholder="Enter the link or text here.."
            className="py-2 px-4 border border-gray-400 rounded-md bg-white"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="mt-5 flex">
            <div className="w-[80%]">
              <QRCode
                value={inputValue}
                level="H"
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                fgColor={activeColor}
              />
            </div>
            <div className="w-[20%]">
              <div className="flex flex-col items-center gap-5">
                {colors.map((color, idx) => (
                  <span
                    key={idx}
                    onClick={() => setActiveColor(color.color)}
                    className={`w-12 h-12 rounded-full  cursor-pointer ${
                      activeColor === color.color
                        ? "border-2 border-blue-700"
                        : ""
                    }`}
                    style={{ backgroundColor: color.color }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
