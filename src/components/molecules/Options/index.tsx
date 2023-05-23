import { IoIosSettings, IoIosNotifications } from "react-icons/io";

export const Options = () => {
  const options = [
    {
      id: 1,
      name: "notification",
      icon: IoIosNotifications,
    },
    {
      id: 2,
      name: "settings",
      icon: IoIosSettings,
    },
  ];

  return (
    <ul className="flex justify-center items-center gap-3  pr-3 sm:gap-6 lg:gap-8">
      {options.map((option) => (
        <li key={option.id}>
          <option.icon
            className="text-golden-1 hover:text-golden-2 ease-in-out transition-all duration-300 cursor-pointer w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
            style={{
              objectFit: "contain",
            }}
          />
        </li>
      ))}
    </ul>
  );
};
