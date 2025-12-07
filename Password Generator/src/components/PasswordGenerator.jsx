import { Copy } from "lucide-react";
import { useState } from "react";

export const PasswordGenerator = () => {
  const [password, setPassword] = useState("");

  function createPassword() {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let randomPassword = "";
    for (let index = 0; index < passwordLength; index++) {
      const randomNum = Math.floor(Math.random() * chars.length);
      randomPassword += chars.substring(randomNum, randomNum + 1);
    }
    setPassword(randomPassword);
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen max-sm:h-full">
        <div className="p-5 flex flex-col max-sm:justify-center bg-[#ffc0cb] rounded-[10px] shadow-2xl w-[500px] max-sm:w-full max-sm:h-screen">
          <h2 className="py-5 text-3xl font-bold">Random Password Generator</h2>
          <div className="border border-black rounded-md flex items-center gap-3 p-3">
            <input
              type="text"
              placeholder="Create Password"
              className="text-[24px] outline-none flex-1"
              value={password}
              readOnly
            />
            <span
              className="p-1.5 rounded-full cursor-pointer hover:bg-white hover:opacity-50"
              onClick={() => {
                navigator.clipboard.writeText(password);
              }}
            >
              <Copy color="gray" />
            </span>
          </div>
          <div>
            <button
              onClick={() => createPassword()}
              className="mt-5 px-6 py-2 bg-black text-white text-lg font-semibold rounded-md cursor-pointer hover:bg-green-700"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
