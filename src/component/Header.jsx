function Header(props) {
   return (
    <div className="bg-yellow-100 text-yellow-900 px-4 py-2 flex justify-between items-center text-sm md:text-base shadow-sm">
      <span className="font-medium">
        🎉 50% OFF on all products! Limited time offer. Shop Now!
      </span>
      <button className="ml-4 text-yellow-900 hover:text-yellow-700 font-semibold">
        ✕
      </button>
    </div>
  );
}

export default Header;