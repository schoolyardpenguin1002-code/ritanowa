const GREEN = "#2f5d46";

const CENTER_TOWNS = [
  "浜尻町",
  "井野町",
  "貝沢町",
  "問屋町",
  "問屋町西",
  "東貝沢町",
] as const;

const NORTH_TOWNS = [
  "小八木町",
  "大八木町",
  "正観寺町",
  "日高町",
  "中尾町",
  "新保町",
  "新保田中町",
] as const;

function TownChips({ towns }: { towns: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {towns.map((town) => (
        <li
          key={town}
          className="rounded-full border bg-background/60 px-4 py-1.5 text-base"
          style={{ borderColor: `${GREEN}55`, color: GREEN }}
        >
          {town}
        </li>
      ))}
    </ul>
  );
}

/** 御用聞きの対応エリア（利用者ページ・サポーター募集ページ共通） */
export function GoyokikiArea() {
  return (
    <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
      <h2 className="text-2xl font-bold">伺えるところ</h2>
      <p className="text-muted-foreground">
        井野駅と高崎問屋町駅のあいだを中心に、だいたい半径3キロのご近所が基本です。
      </p>
      <div className="space-y-3">
        <div>
          <p className="text-sm font-semibold tracking-widest text-muted-foreground">
            駅の周辺
          </p>
          <div className="mt-2">
            <TownChips towns={CENTER_TOWNS} />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-widest text-muted-foreground">
            北側（新前橋・イオン高崎方面）
          </p>
          <div className="mt-2">
            <TownChips towns={NORTH_TOWNS} />
          </div>
        </div>
      </div>
      <p className="text-base text-muted-foreground">
        おおまかな目安です。ここから少し外れていても、まずはご相談ください。
      </p>
    </section>
  );
}
