// app/components/FilterBar.tsx
import { Filter, LayoutGrid, List } from "lucide-react"; // Using lucide icons

export default function FilterBar() {
  return (
    <div className="max-w-[1440px] mx-auto my-11 px-4 py-6 bg-[#FAF4F4]">
      <div className="flex items-center justify-between">
        {/* Left side - Filter and view options */}
        <div className="flex items-center px-10 gap-4">
          {/* Filter button */}
          <button className="flex items-center gap-2 text-gray-900">
            <Filter size={20} />
            <span>Filter</span>
          </button>

          {/* View options */}
          <div className="flex items-center gap-4  pl-4">
            <button className="p-2 text-gray-900">
              <LayoutGrid size={20} />
            </button>
            <button className="p-2 text-gray-900 gap-2">
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Right side - Results and sorting */}
        <div className="flex gap-4 px-10 border-l-2">
          <div className=" flex pr-80">
          <span className="text-gray-600 text-start">Showing 1-16 of 32 results</span>
          </div>
          
          <div className="flex items-center gap-4 px-5">
            <span className="text-gray-600">Show</span>
            <select className="border rounded px-2 py-1">
              <option>16</option>
              <option>32</option>
              <option>48</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-600">Sort by</span>
            <select className="border rounded px-2 py-1">
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}