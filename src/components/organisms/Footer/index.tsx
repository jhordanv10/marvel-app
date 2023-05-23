export const Footer = () => {
  return (
    <footer className="absolute  bottom-4 left-0 right-0 ">
      <div className="flex flex-col gap-2 justify-center items-center md:flex-row md:gap-6 lg:gap-8 xl:gp-10 ">
        <p className="text-center text-golden-3">Jhordan Villamil Acevedo</p>
        <span className="text-golden-3 ">
          Github:{" "}
          <a
            href="https://github.com/jhordanv10"
            target="_blank"
            className="font-bold italic transition-all duration-300 ease-in-out hover:text-golden-2"
          >
            jhordanv10
          </a>
        </span>
      </div>
    </footer>
  );
};
