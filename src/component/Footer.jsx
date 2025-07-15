function Footer(props) {
   return (
    <div>
      <footer className="bg-gray-300 text-white text-center p-4">
        <span> © 2025 My App. All rights reserved.</span>
         <div className="space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;