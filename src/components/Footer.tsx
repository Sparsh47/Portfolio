const Footer = () => {
  return (
    <div className="w-full h-10 text-accent bg-background flex items-center justify-center gap-2">
      <span className="text-2xl font-bold">©</span>
      {new Date().getUTCFullYear()}
      <div>Sparsh Shandilya</div>
    </div>
  );
};

export default Footer;
