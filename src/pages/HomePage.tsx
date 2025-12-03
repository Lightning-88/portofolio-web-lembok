import {
  ArrowRight,
  LucideChessBishop,
  LucideChessKnight,
  LucideChessPawn,
} from "lucide-react";
import lembokPicture from "../assets/lembok.png";
import achivementRapidElo from "../assets/achivementRapidElo.png";
import { Button } from "../components/Button";
import { Separator } from "../components/Separator";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="min-h-screen flex items-center flex-col gap-4 pt-4 px-4 md:flex-row md:gap-6 lg:gap-8">
        <div className="space-y-2 md:flex-1">
          <h1 className="font-bold text-2xl lg:text-3xl">Hello Blud</h1>
          <div className="space-y-2">
            <h2 className="font-bold text-3xl lg:text-4xl">
              I am <span className="text-amber-500">Diaz Jagad</span>
            </h2>
            <p className="text-sm text-stone-400 lg:text-base">
              Intermediate Chess Player
            </p>
          </div>
          <p className="text-sm text-justify text-stone-400 leading-relaxed lg:text-lg">
            I approach chess with an aggressive, initiative-driven style, always
            looking for creative tactics, sharp positions, and decisive
            breakthroughs. Each game is a test of calculation, resilience, and
            discipline. I strive to grow stronger with every match, continuously
            expanding my repertoire and sharpening my intuition across all time
            controls.
          </p>
          <div>
            <a
              href="https://www.chess.com/member/musuhpakrt"
              className="inline-block"
              target="_blank"
            >
              <Button className="cursor-pointer flex items-center gap-2 rounded-3xl">
                View Profile
                <ArrowRight size={20} />
              </Button>
            </a>
          </div>
        </div>

        <div className="md:flex-1">
          <img
            src={lembokPicture}
            className="rounded-sm w-full lg:max-h-[500px] object-contain"
            alt="hero-picture"
          />
        </div>
      </div>

      <Separator className="mx-4" />

      <div className="space-y-4 bg-stone-800 p-4 md:p-8 md:space-y-5">
        <h1 className="text-center text-2xl font-bold text-stone-100 lg:text-3xl">
          About Me
        </h1>
        <p className="text-center text-stone-300 text-sm lg:text-base">
          Chess Player - Strategic Thinker - Competitor
        </p>
        <p className="text-stone-300 leading-relaxed text-justify md:text-center lg:text-lg">
          I am a Chess player who focuses on positional strategy and attractions
          like Mikhail Tal. I've been play chess since 2023.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-3 rounded-xl bg-stone-900 text-center md:h-24 md:flex md:flex-col md:justify-center md:text-xl hover:scale-105 hover:transition-transform">
            <p className="text-xs text-stone-300 lg:text-base">Blitz Rating</p>
            <p className="font-bold">1183+</p>
          </div>
          <div className="p-3 rounded-xl bg-stone-900 text-center md:h-24 md:flex md:flex-col md:justify-center md:text-xl hover:scale-105 hover:transition-transform">
            <p className="text-xs text-stone-300 lg:text-base">Rapid Rating</p>
            <p className="font-bold">1706+</p>
          </div>
          <div className="p-3 rounded-xl bg-stone-900 text-center md:h-24 md:flex md:flex-col md:justify-center md:text-xl hover:scale-105 hover:transition-transform">
            <p className="text-xs text-stone-300 lg:text-base">Bullet Rating</p>
            <p className="font-bold">940+</p>
          </div>
        </div>
      </div>

      <Separator className="mx-4" />

      <div className="-mt-6 space-y-4 p-4 md:p-8 md:space-y-5">
        <h1 className="text-center text-2xl font-bold text-stone-100 lg:text-3xl">
          Style & Strength
        </h1>
        <p className="text-xs text-stone-400 text-center tracking-wide lg:text-base">
          Playstyle Overview
        </p>
        <p className="text-stone-300 leading-relaxed text-justify lg:text-lg">
          I play aggressive tactical style with strong focus on initiative and
          dynamic play. Comfortable in sharp positions and fast calculation, I
          aim to create constant pressure over the board.
        </p>

        <div className="space-y-4 md:flex md:space-y-0 md:gap-4 md:justify-center">
          <div className="p-4 rounded-md border border-stone-700 text-center md:flex-1">
            <p className="text-stone-300 text-sm font-medium lg:text-base">
              Strong opening preparation
            </p>
          </div>
          <div className="p-4 rounded-md border border-stone-700 text-center md:flex-1">
            <p className="text-stone-300 text-sm font-medium lg:text-base">
              Fast and Accurate Calculation
            </p>
          </div>
          <div className="p-4 rounded-md border border-stone-700 text-center md:flex-1">
            <p className="text-stone-300 text-sm font-medium lg:text-base">
              Solid defense under preasure
            </p>
          </div>
          <div className="p-4 rounded-md border border-stone-700 text-center md:flex-1">
            <p className="text-stone-300 text-sm font-medium lg:text-base">
              Good Emotional Control
            </p>
          </div>
        </div>

        <div className="p-4 rounded-md border border-stone-700 bg-stone-800">
          <p className="text-xs text-stone-400 uppercase tracking-wide lg:text-sm">
            Opening Repertoire
          </p>

          <div className="mt-2 space-y-1">
            <p className="text-sm text-stone-300 lg:text-base">
              <span>As White:</span> Vienna Gambit
            </p>
            <p className="text-sm text-stone-300 lg:text-base">
              <span>Vs 1.e4:</span> Caro-Kann / Modern Defense
            </p>
            <p className="text-sm text-stone-300 lg:text-base">
              <span>Vs 1.d4:</span> Dutch Defense
            </p>
          </div>
        </div>
      </div>

      <Separator className="mx-4 -mt-2" />

      <div className="mt-8 space-y-4 p-4 bg-stone-800 md:p-8 md:space-y-5">
        <h1 className="text-center text-2xl font-bold text-stone-100 lg:text-3xl">
          Game Highlights
        </h1>
        <p className="text-center text-stone-400 text-sm lg:text-base">
          A selection of my highlights
        </p>

        <div className="space-y-4 md:flex md:space-y-0 md:gap-4 md:justify-center">
          <div className="p-4 rounded-md border border-stone-700 flex justify-between md:flex-1">
            <div className="space-y-1">
              <p className="text-stone-300 text-sm font-semibold lg:text-base">
                Rapid vs raffa-BOT
              </p>
              <p className="text-xs text-emerald-500 lg:text-sm">Win</p>
              <a
                href="https://www.chess.com/game/computer/474142917"
                className="text-xs text-blue-500 underline"
              >
                View Game
              </a>
            </div>
            <LucideChessKnight strokeWidth={0.1} width={70} height={70} />
          </div>
          <div className="p-4 rounded-md border border-stone-700 flex justify-between md:flex-1">
            <div className="space-y-1">
              <p className="text-stone-300 text-sm font-semibold lg:text-base">
                Rapid vs senya973
              </p>
              <p className="text-xs text-emerald-500 lg:text-sm">Win</p>
              <a
                href="https://www.chess.com/game/live/145985049658?username=musuhpakrt"
                className="text-xs text-blue-500 underline"
              >
                View Game
              </a>
            </div>
            <LucideChessBishop strokeWidth={0.1} width={70} height={70} />
          </div>
          <div className="p-4 rounded-md border border-stone-700 flex justify-between md:flex-1">
            <div className="space-y-1">
              <p className="text-stone-300 text-sm font-semibold lg:text-base">
                Rapid vs ManyaTheQueen
              </p>
              <p className="text-xs text-emerald-500 lg:text-sm">Win</p>
              <a
                href="https://www.chess.com/game/live/145930117362?username=musuhpakrt"
                className="text-xs text-blue-500 underline"
              >
                View Game
              </a>
            </div>
            <LucideChessPawn strokeWidth={0.1} width={70} height={70} />
          </div>
        </div>
      </div>

      <Separator className="mx-4" />

      <div className="-mt-6 space-y-4 p-4 md:p-8 md:space-y-5">
        <h1 className="text-center text-2xl font-bold text-stone-100 lg:text-3xl">
          Achievements
        </h1>
        <p className="text-center text-stone-400 text-sm lg:text-base">
          A collection of notable results and milestones from my chess journey.
        </p>

        <div className="flex flex-col gap-4 md:flex-row lg:justify-center">
          <div className="flex justify-between gap-4">
            <img
              src={achivementRapidElo}
              className="rounded-sm flex-1"
              alt="achivement-image"
            />
            <div className="space-y-1 flex-1">
              <h1 className="text-stone-300 text-sm font-semibold lg:text-base">
                Reached Elo 1700+ (2025)
              </h1>
              <p className="text-stone-400 text-xs font-medium lg:text-sm">
                Rating peak 1706 Rapid
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <img
              src={achivementRapidElo}
              className="rounded-sm flex-1"
              alt="achivement-image"
            />
            <div className="space-y-1 flex-1">
              <h1 className="text-stone-300 text-sm font-semibold lg:text-base">
                Local Champion (2025)
              </h1>
              <p className="text-stone-400 text-xs font-medium lg:text-sm">
                4st place village chess event
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
