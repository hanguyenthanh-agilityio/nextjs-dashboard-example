interface HeaderProps {
  user: string;
}

const Header = ({ user }: HeaderProps) => (
  <header className="flex justify-between item-center">
    <h2 className="text-lg text-[#369FFF]">
      Hello <span className="font-bold uppercase">{user}</span>, welcome back!
    </h2>
  </header>
);

export default Header;
