import keyboardImg from "./src/assets/40percentKeyboard.jpg";
import keyboardImg2 from "./src/assets/40percentKeyboard-2.png";
import keyboardImg4 from "./src/assets/30percentKeyboard.jpg";

import solderImg from "./src/assets/SolderIronImg.png";
import Solder from "./src/assets/SolderWire.png";
import BrassWool from "./src/assets/BrassWool.png";

import MXSwitch from "./src/assets/CherryMXBrownSwitch.png";
import MXSwitch2 from "./src/assets/RedMXSwitch.png";
import MXSwitch3 from "./src/assets/BlueMXSwitch.png";

import ChocSwitch from "./src/assets/ChocSwitch.png";
import ChocSwitch2 from "./src/assets/ChocSwitchRed.png";
import ChocSwitch3 from "./src/assets/ChocSwitchSunset.png";

export default [
    {
        title: "Keyboard Sizes",
        main: "Keyboards can come in sizes of 30%, 40%, 60%, 80%, 100%",
        img: [keyboardImg, keyboardImg2, keyboardImg4]
    },
    {
        title: "Tools needed for Mechanical Keyboards",
        main: "Solder Iron, Solder Wire, (Optional: Helping Hands Holder, Brass wool tip cleaner)",
        img: [solderImg, Solder, BrassWool]
    },
    {
        title: "MX Switches",
        main: "Used for most Mechanical keyboards, has lots of varieties",
        img: [MXSwitch, MXSwitch2, MXSwitch3]
    },
    {
        title: "Choc Switches",
        main: "Used for Low-Profile builds, limited variety",
        img: [ChocSwitch, ChocSwitch2, ChocSwitch3]
    }
]