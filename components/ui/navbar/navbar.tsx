import ActionButtons from "./_components/action-buttons";
import Logo from "./_components/logo";
import { NavigationMenuBar } from "./_components/menu";

const Navbar = () => {
  return (
    <div
      className="
    flex
    items-center
    justify-between
    pr-10
    lg:px-20
    sticky
    top-0
    z-50
    bg-white
    h-24
    "
    >
      <div
        className="
        px-4
        "
      >
        <div className="w-40">
          <Logo />
        </div>
      </div>

        <div className="flex items-center">
         <NavigationMenuBar />

         <ActionButtons />

        </div>

    </div>
  );
};

export default Navbar;
