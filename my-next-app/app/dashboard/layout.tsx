import Sidebar from "./components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64 border-r-2 border-r-[#F0F0F0] border-solid">
        <Sidebar />
      </div>
      <div className="flex-grow px-6 md:overflow-y-auto md:px-10">{children}</div>
    </div>
  );
}
