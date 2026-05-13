import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getObjectBySlug } from "@/lib/content";
import { imageUrl } from "@/lib/image";
import { notFound } from "next/navigation";

export default async function ObjectPage({ params }) {
  const { slug } = await params;
  const item = await getObjectBySlug(slug);

  if (!item) {
    notFound();
  }

  const image = imageUrl(item.image)?.width(1200).height(900).fit("crop").url();

  return (
    <main className="detailShell">
      <Link className="backLink" href="/">
        <ArrowLeft size={16} />
        回到首頁
      </Link>

      <section className="detailGrid">
        <div
          className={`detailImage ${image ? "hasImage" : ""}`}
          style={image ? { backgroundImage: `url(${image})` } : undefined}
        >
          {!image && <span>{item.title}</span>}
        </div>

        <article className="detailContent">
          <p className="eyebrow">{item.category || "OBJECT ARCHIVE"}</p>
          <h1>{item.title}</h1>
          <p className="detailLead">{item.description}</p>

          <div className="detailTags">
            <span>{item.emotion || "Quiet"}</span>
            <span>{item.price || "Archive Only"}</span>
          </div>

          <div className="storyBlock">
            <h2>物件故事</h2>
            <p>{item.story || "這裡可以在後台補上更完整的選物故事、使用情境、購買理由與你的私人品味觀點。"}</p>
          </div>

          {item.externalUrl && (
            <a className="primaryButton" href={item.externalUrl} target="_blank" rel="noreferrer">
              前往連結
              <ExternalLink size={17} />
            </a>
          )}
        </article>
      </section>
    </main>
  );
}
