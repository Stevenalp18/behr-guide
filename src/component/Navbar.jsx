import { useRef } from "react";

const Navbar = () => {
  const modalRef = useRef();
  return (
    <>
      <header className="py-2 text-2xl flex justify-between border-b border-black lg:w-2/3 lg:m-auto">
        <div>
          <a className="cursor-pointer">BEHR</a>
        </div>
        <ul ref={modalRef} className="flex gap-4 hidden">
          <li>
            <a className="cursor-pointer">Interior</a>
          </li>
          <li>
            <a className="cursor-pointer">Exterior</a>
          </li>
          <li>
            <a className="cursor-pointer">Residential</a>
          </li>
        </ul>
        {/* { Comment, Hamburger Below } */}
        <div
          className="flex flex-col gap-2 cursor-pointer hidden"
          onClick={() => {
            modalRef.current.classList.toggle("hidden");
          }}
        >
          <div className="border-black border w-8"></div>
          <div className="border-black border w-8"></div>
          <div className="border-black border w-8"></div>
        </div>
        {/* { Comment, Modal Below } */}
        <ul className="flex gap-4 hidden">
          <li>
            <a className="cursor-pointer">Interior</a>
          </li>
          <li>
            <a className="cursor-pointer">Exterior</a>
          </li>
          <li>
            <a className="cursor-pointer">Residential</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
