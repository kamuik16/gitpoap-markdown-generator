const Navbar = () => {
  return (
    <nav className='container mx-auto flex items-center justify-between py-4'>
      <div>
        <h1 className='text-xl font-semibold'>GitPOAP Markdown Generator</h1>
      </div>
      <a
        href='https://github.com/kamuik16/gitpoap-markdown-generator'
        className='flex items-center'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span>GitHub Repo</span>
      </a>
    </nav>
  );
};

export default Navbar;
