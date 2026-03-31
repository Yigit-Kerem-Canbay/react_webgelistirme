export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-gray-600 md:text-left">
          &copy; {currentYear} Yiğit Kerem Canbay. Tüm hakları saklıdır.
        </p>
        <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-blue-600 transition-colors">
            GitHub
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
