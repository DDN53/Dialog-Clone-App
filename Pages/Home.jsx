import { Languages, Navbar, SearchBar } from "../components/index.js";

import { PiShoppingCartDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
export default function Home() {
  return (
    <div>
      <Navbar>
        <Languages />
        <div className="flex ml-12 items-center">
          <button className="rounded-3xl bg-slate-200 px-4 h-10 font-semibold flex items-center justify-center whitespace-nowrap">
            Reload & Pay
          </button>

          <div className="ml-10 relative flex items-center">
            <div className="rounded-full border border-gray-500 p-3 flex justify-center items-center">
              <PiShoppingCartDuotone className="text-gray-500" />
            </div>
            <div className="rounded-full border border-gray-500 p-3 flex justify-center items-center ml-4">
              <CgProfile className="text-gray-500" />
            </div>
            <SearchBar />
          </div>
        </div>
      </Navbar>
    </div>
  );
}
