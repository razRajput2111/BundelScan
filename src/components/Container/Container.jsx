const Container = ({ children }) => {
  return (
    <div className="relative">
      {/* <img
        className="absolute left-0 top-0 -z-20 h-screen w-full object-cover"
        // src="https://tailkits.com/ui/iframe/assets/img/bg-5.png"
        alt="Background image"
      /> */}
      {children}
    </div>
  );
};

export default Container;
