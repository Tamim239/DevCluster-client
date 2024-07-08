import { Link } from "react-router-dom";

export const Navbar = () => {
  return  <header className="bg-white">
  <div className="mx-auto flex  justify-between h-16 max-w-screen-xl items-center gap-8 px-4 lg:px-8">
    <h1 className="block font-bold text-2xl text-red-500">
     Dev Cluster
    </h1>
    <div className="flex">
      <div className="flex gap-4">
        <Link to="/login"
          className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
        >
          Login
        </Link>
      </div>
    </div>
  </div>
</header>
};
