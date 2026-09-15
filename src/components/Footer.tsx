import { FaTiktok, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-navy mt-auto py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white flex flex-col gap-0.5 items-center sm:items-start">
            <p className="text-lg font-semibold">Meow PC Store Oy</p>
            <p className="text-sm">Tampere, Finland</p>
            <p className="text-sm">Business ID: 3567455-8</p>
            <a
              href="mailto:contact@meowpc.fi"
              className="flex items-center gap-1.5 text-sm mt-1 hover:underline"
            >
              <MdEmail />
              contact@meowpc.fi
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.tiktok.com/@meowpc.fi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-black hover:scale-110"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@meowpcfi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#FF0000] hover:scale-110"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
