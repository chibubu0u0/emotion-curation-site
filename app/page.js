import Link from "next/link";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { getHomeData } from "@/lib/content";
import { imageUrl } from "@/lib/image";

export default async function HomePage() {
  const data = await getHomeData();
  const hero = data.hero;
  const mood = data.todayMood;
  const objects = data.objects;

  return (
    <main className="siteShell">
      <header className="topbar">
        <Link href="/" className="brand">
          {hero.siteName || "Liminal Objects"}
        </Link>

        <nav className="nav">
          <a href="#objects">Objects</a>
          <a href="#mood">Mood</a>
          <Link href="/studio" className="adminLink">
            <SlidersHorizontal size={15} />
            後台
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="heroCopy fadeIn">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="heroDescription">{hero.description}</p>
          <a className="primaryButton" href="#objects">
            {hero.buttonText}
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="heroPanel fadeIn delayOne">
          <div className="orb orbOne" />
          <div className="orb orbTwo" />
          <div className="panelContent">
            <span>CURATION MODE</span>
            <strong>Emotion first, product second.</strong>
            <p>用情緒、時間、音樂與故事去整理你的品味選物。</p>
          </div>
        </div>
      </section>

      <section id="mood" className="moodSection">
        <div className="sectionLabel">
          <span>01</span>
          <span>TODAY'S MOOD</span>
        </div>

        <article className="moodCard">
          <div>
            <p className="muted">現在的情緒</p>
            <h2>{mood.title}</h2>
            <p>{mood.description}</p>
          </div>

          <div className="moodMeta">
            <span>{mood.timeLabel}</span>
            <span>{mood.musicLabel}</span>
          </div>
        </article>
      </section>

      <section id="objects" className="objectsSection">
        <div className="sectionLabel">
          <span>02</span>
          <span>OBJECT ARCHIVE</span>
        </div>

        <div className="objectsGrid">
          {objects.map((item, index) => {
            const image = imageUrl(item.image)?.width(900).height(700).fit("crop").url();

            return (
              <Link
                href={`/objects/${item.slug}`}
                className="objectCard"
                key={item._id || item.slug || index}
              >
                <div
                  className={`objectImage ${image ? "hasImage" : ""}`}
                  style={image ? { backgroundImage: `url(${image})` } : undefined}
                >
                  {!image && <span>OBJECT_{String(index + 1).padStart(2, "0")}</span>}
                </div>

                <div className="objectBody">
                  <div className="objectMeta">
                    <span>{item.category || "Uncategorized"}</span>
                    <span>{item.emotion || "Quiet"}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="objectFooter">
                    <span>{item.price || "ARCHIVE ONLY"}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
