import github from "../assets/social/github.png";
import discord from "../assets/social/discord.png";
import facebook from "../assets/social/facebook.png";
import twitter from "../assets/social/twitter.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="md:flex items-center max-w-5xl justify-center mx-auto bg-white  md:p-15 md:gap-5 border-b mb-10">
        <div className="mb-10 p-5">
          <div className="flex items-center">
            <img src={logo} alt="" />
            <h1 className="font-semibold pt-3">THE ODIN PROJECT</h1>
          </div>
          <p className="pt-5 pb-3 text-gray-500">
            High quality coding education maintained by an open source
            community.
          </p>
          <div className="flex gap-3">
            <img src={github} alt="" className="h-8 opacity-60 hover:opacity-100 cursor-pointer" />
            <img src={discord} alt="" className="h-8 opacity-60 hover:opacity-100 cursor-pointer" />
            <img src={facebook} alt="" className="h-8 opacity-60 hover:opacity-100 cursor-pointer" />
            <img src={twitter} alt="" className="h-8 opacity-60 hover:opacity-100 cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-5 p-5 text-gray-500">
          <div className="flex flex-col text-center gap-2">
            <h1 className="font-bold text-black">About us</h1>
            <button>About</button>
            <button>Team</button>
            <button>Blog</button>
            <button>Success Stories</button>
          </div>

          <div className="flex flex-col text-center gap-2">
            <h1 className="font-bold text-black">Support</h1>
            <button>FAQ</button>
            <button>Contribute</button>
            <button>Contact us</button>
          </div>

          <div className="flex flex-col text-center gap-2">
            <h1 className="font-bold text-black">Guides</h1>
            <button>Community Guides</button>
            <button>Installation Guides</button>
          </div>

          <div className="flex flex-col text-center gap-2">
            <h1 className="font-bold text-black">Legal</h1>
            <button>Terms</button>
            <button>Privacy</button>
          </div>
        </div>
      </div>
      <p className="text-gray-500 pb-5 text-center">© 2026 The Odin Project. All rights reserved.</p>
    </>
  );
};

export default Footer;
