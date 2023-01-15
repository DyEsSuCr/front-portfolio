const Footer = () => {
  let date = new Date();
  let currentYear = date.getFullYear();

  return (
    <footer className="bg-dark h-fit py-4">
      <p className="text-center text-white text-base sm:text-xl font-extrabold">
        &copy; Copyright {currentYear}, Dylan Suarez
      </p>
    </footer>
  );
};

export default Footer;
