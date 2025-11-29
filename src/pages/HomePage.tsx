import {
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
      <div className="min-h-screen flex items-center justify-center flex-col gap-4 pt-4 px-4 md:flex-row md:gap-6 lg:gap-8">
        <div className="space-y-2 md:flex-1">
          <h1 className="font-bold text-2xl">Hello Blud</h1>
          <div className="space-y-2">
            <h2 className="font-bold text-3xl">
              I am <span className="text-amber-500">Diaz Jagad</span>
            </h2>
            <p className="text-sm text-stone-400">Intermediate Chess Player</p>
          </div>
          <p className="text-sm text-justify text-stone-400 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            molestiae aspernatur sit corrupti odit molestias perspiciatis natus
            tenetur, repudiandae consequuntur facilis illum perferendis
            consectetur rem pariatur quaerat alias, quis aliquid. Vel, velit!
            Obcaecati officia, praesentium exercitationem laboriosam magni quae
            natus, placeat omnis expedita possimus nostrum labore! Facilis,
            perferendis sint iusto ut debitis accusamus incidunt temporibus sed
            tempora obcaecati aperiam corporis.
          </p>
          <div>
            <a href="https://www.chess.com/member/musuhpakrt" target="_blank">
              <Button className="cursor-pointer">View Profile</Button>
            </a>
          </div>
        </div>

        <div className="md:flex-1">
          <img
            src={lembokPicture}
            className="rounded-sm md:max-w-[400px] lg:max-w-[500px]"
            alt="hero-picture"
          />
        </div>
      </div>

      <Separator className="mx-4" />

      <div className="space-y-4 bg-stone-800 p-4 md:p-8">
        <h1 className="text-center text-2xl font-bold text-stone-100">
          About Me
        </h1>
        <p className="text-center text-stone-300 text-sm">
          Chess Player - Strategic Thinker - Competitor
        </p>
        <p className="text-stone-300 leading-relaxed text-justify">
          I am a Chess player who focuses on positional strategy and attractions
          like Mikhail Tal. I've been play chess since 2023.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-3 rounded-xl bg-stone-900 text-center md:h-24 md:flex md:flex-col md:justify-center md:text-xl hover:scale-105 hover:transition-transform">
            <p className="text-xs text-stone-300">Blitz Rating</p>
            <p className="font-bold">1183+</p>
          </div>
          <div className="p-3 rounded-xl bg-stone-900 text-center md:h-24 md:flex md:flex-col md:justify-center md:text-xl hover:scale-105 hover:transition-transform">
            <p className="text-xs text-stone-300">Rapid Rating</p>
            <p className="font-bold">1706+</p>
          </div>
          <div className="p-3 rounded-xl bg-stone-900 text-center md:h-24 md:flex md:flex-col md:justify-center md:text-xl hover:scale-105 hover:transition-transform">
            <p className="text-xs text-stone-300">Bullet Rating</p>
            <p className="font-bold">940+</p>
          </div>
        </div>
      </div>

      <Separator className="mx-4" />

      <div className="-mt-6 space-y-4 p-4 md:p-8">
        <h1 className="text-center text-2xl font-bold text-stone-100">
          Style & Strength
        </h1>
        <p className="text-xs text-stone-400 text-center tracking-wide">
          Playstyle Overview
        </p>
        <p className="text-stone-300 leading-relaxed text-justify">
          I play aggressive tactical style with strong focus on initiative and
          dynamic play. Comfortable in sharp positions and fast calculation, I
          aim to create constant pressure over the board.
        </p>

        <div className="space-y-4">
          <div className="p-4 rounded-md border border-stone-700 text-center">
            <p className="text-stone-300 text-sm font-medium">
              Strong opening preparation
            </p>
          </div>
          <div className="p-4 rounded-md border border-stone-700 text-center">
            <p className="text-stone-300 text-sm font-medium">
              Fast and Accurate Calculation
            </p>
          </div>
          <div className="p-4 rounded-md border border-stone-700 text-center">
            <p className="text-stone-300 text-sm font-medium">
              Solid defense under preasure
            </p>
          </div>
          <div className="p-4 rounded-md border border-stone-700 text-center">
            <p className="text-stone-300 text-sm font-medium">
              Good Emotional Control
            </p>
          </div>
        </div>

        <div className="p-4 rounded-md border border-stone-700 bg-stone-800">
          <p className="text-xs text-stone-400 uppercase tracking-wide">
            Opening Repertoire
          </p>

          <div className="mt-2 space-y-1">
            <p className="text-sm text-stone-300">
              <span>As White:</span> Vienna Gambit
            </p>
            <p className="text-sm text-stone-300">
              <span>Vs 1.e4:</span> Caro-Kann / Modern Defense
            </p>
            <p className="text-sm text-stone-300">
              <span>Vs 1.d4:</span> Dutch Defense
            </p>
          </div>
        </div>
      </div>

      <Separator className="mx-4 -mt-2" />

      <div className="mt-8 space-y-4 p-4 bg-stone-800 md:p-8">
        <h1 className="text-center text-2xl font-bold text-stone-100">
          Game Highlights
        </h1>
        <p className="text-center text-stone-400 text-sm">
          A selection of my highlights
        </p>

        <div className="space-y-4">
          <div className="p-4 rounded-md border border-stone-700 flex justify-between">
            <div className="space-y-1">
              <p className="text-stone-300 text-sm font-semibold">
                Rapid vs raffa-BOT
              </p>
              <p className="text-xs text-emerald-500">Win</p>
              <a
                href="https://www.chess.com/game/computer/474142917"
                className="text-xs text-blue-500 underline"
              >
                View Game
              </a>
            </div>
            <LucideChessKnight strokeWidth={0.1} width={70} height={70} />
          </div>
          <div className="p-4 rounded-md border border-stone-700 flex justify-between">
            <div className="space-y-1">
              <p className="text-stone-300 text-sm font-semibold">
                Rapid vs senya973
              </p>
              <p className="text-xs text-emerald-500">Win</p>
              <a
                href="https://www.chess.com/game/live/145985049658?username=musuhpakrt"
                className="text-xs text-blue-500 underline"
              >
                View Game
              </a>
            </div>
            <LucideChessBishop strokeWidth={0.1} width={70} height={70} />
          </div>
          <div className="p-4 rounded-md border border-stone-700 flex justify-between">
            <div className="space-y-1">
              <p className="text-stone-300 text-sm font-semibold">
                Rapid vs ManyaTheQueen
              </p>
              <p className="text-xs text-emerald-500">Win</p>
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

      <div className="-mt-6 space-y-4 p-4 md:p-8">
        <h1 className="text-center text-2xl font-bold text-stone-100">
          Achievements
        </h1>
        <p className="text-center text-stone-400 text-sm">
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
              <h1 className="text-stone-300 text-sm font-semibold">
                Reached Elo 1700+ (2025)
              </h1>
              <p className="text-stone-400 text-sm font-medium">
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
              <h1 className="text-stone-300 text-sm font-semibold">
                Local Champion (2025)
              </h1>
              <p className="text-stone-400 text-sm font-medium">
                4st place village chess event
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
