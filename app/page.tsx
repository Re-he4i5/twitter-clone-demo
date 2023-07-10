import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div className="col-span-3 lg:col-span-2 boeder-x-1 border-neutral-800 text-sky-500">
            Hello World
          </div>
        </div>
      </div>
    </div>
  );
}
