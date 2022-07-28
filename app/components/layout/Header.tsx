const logoContainer = 'p-4 sm:pl-12 py-2 flex justify-center sm:justify-start';

const Header = () => {
  return (
      <div id="header" className='gradient-background'>
          <div className={logoContainer}>
              <a className='max-w-[50%] sm:max-w-[15%]'  href="/">
                  <img className='rounded-2xl' src="/logo.jpg" alt=""/>
              </a>
          </div>
          <div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
          </div>
      </div>
  );
};

export default Header;
