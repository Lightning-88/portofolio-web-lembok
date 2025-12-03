import { ChessPawnIcon, Mail } from "lucide-react";
import { Facebook, Instagram } from "react-feather";

export function Footer() {
  return (
    <div className="w-full bg-stone-800">
      <div className="container space-y-4 mx-auto text-center p-4">
        <h1 className="font-light">MusuhPakRT - Chess Player</h1>
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
          <a
            href="mailto:1wakpeyekk@gmail.com"
            className="hover:scale-105 hover:transition-transform"
          >
            <Mail className="text-stone-400" />
          </a>
          <a
            href="https://www.chess.com/member/musuhpakrt"
            className="hover:scale-105 hover:transition-transform"
            target="_blank"
          >
            <ChessPawnIcon className="text-stone-400" />
          </a>
        </div>
        <p className="font-light">
          Built with focus, cigarette, and bit of chaos
        </p>
        <p className="font-light">© {new Date().getFullYear()} Lembok Chess</p>
      </div>
    </div>
  );
}
