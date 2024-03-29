import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="border-b py-4 bg-gray-50">
      <div className="container mx-auto justify-between flex items-center">
        <div>FileBox</div>
        <div className="flex gap-2">
          <OrganizationSwitcher />
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
