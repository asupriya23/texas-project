import { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CameraIcon from "@mui/icons-material/Camera";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const items = [
    {
      icon: <HomeOutlinedIcon style={{ height: "1.3em", width: "1.3em" }} />,
      label: "Home",
    },
    {
      icon: <PersonOutlinedIcon style={{ height: "1.3em", width: "1.3em" }} />,
      label: "Profile",
    },
    {
      icon: <SettingsOutlinedIcon style={{ height: "1.3em", width: "1.3em" }} />,
      label: "Settings",
    },
  ];

  return (
    <div className="flex">
      <div
        className={cn(
          "h-screen w-24 bg-[#032538] text-white flex flex-col justify-between transition-all duration-300",
          expanded && "w-64"
        )}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="p-6 flex items-center gap-4">
          <CameraIcon
            className="h-12 w-12 flex-shrink-0"
            style={{
              height: "100%",
              width: "100%",
              maxHeight: "1.8em",
              maxWidth: "1.8em",
            }}
          />
          {expanded && <span className="text-2xl font-bold">Logo</span>}
        </div>
        <nav className="flex-1">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActivePage(item.label)}
              className={cn(
                "flex items-center gap-4 p-6 cursor-pointer",
                activePage === item.label
                  ? "bg-[#043A58] font-bold"
                  : "hover:bg-[#043A58]"
              )}
            >
              {item.icon}
              {expanded && <span className="text-lg">{item.label}</span>}
            </div>
          ))}
        </nav>
        <div
          className="p-6 flex items-center gap-4 cursor-pointer hover:bg-[#043A58]"
          onClick={() => setActivePage("Info")}
        >
          <InfoOutlinedIcon
            className="h-12 w-12 flex-shrink-0"
            style={{
              height: "1.1em",
              width: "1.1em",
            }}
          />
          {expanded && <span className="text-lg">Info</span>}
        </div>
      </div>

      <div className="flex-1 p-8">
        {activePage === "Home" && <div>Home Page Content</div>}
        {activePage === "Profile" && <div>Profile Page Content</div>}
        {activePage === "Settings" && <div>Settings Page Content</div>}
        {activePage === "Info" && <div>Info Page Content</div>}
      </div>
    </div>
  );
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default Navbar;
