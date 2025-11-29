import { ChessPawnIcon } from "lucide-react";
import { Facebook, Instagram, Twitter } from "react-feather";

export function Footer() {
  return (
    <div className="w-full bg-stone-800">
      <div className="container space-y-4 mx-auto text-center p-4">
        <div>
          <h1>1wakpeyekk@gmail.com</h1>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=100080808014046"
            className="hover:scale-105 hover:transition-transform"
            target="_blank"
          >
            <Facebook className="text-stone-400" />
          </a>
          <a
            href="https://www.instagram.com/diaz_tokk"
            className="hover:scale-105 hover:transition-transform"
            target="_blank"
          >
            <Instagram className="text-stone-400" />
          </a>
          <a href="/" className="hover:scale-105 hover:transition-transform">
            <Twitter className="text-stone-400" />
          </a>
          <a
            href="https://www.chess.com/member/musuhpakrt"
            className="hover:scale-105 hover:transition-transform"
            target="_blank"
          >
            <ChessPawnIcon className="text-stone-400" />
          </a>
        </div>
        <div>
          © {new Date().getFullYear()} Lembok Chess
          <br />
          All rights reserved
        </div>
      </div>
    </div>
  );
}
