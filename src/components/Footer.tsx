function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 py-4 text-center text-txt rounded-b-2xl sm:mb-10 w-full ">
      <div className="container mx-auto">
        <p className="text-xs opacity-70">
          &copy; {currentYear} All rights reserved By Muhammad Faeez Shabbir
        </p>
      </div>
    </footer>
  );
}

export default Footer;
