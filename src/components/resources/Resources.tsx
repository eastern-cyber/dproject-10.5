export function Resources() {
    return (
      <div className="grid gap-4 lg:grid-cols-3 justify-center">
        
        <ArticleCard
          title="ก๊อกก๊อก"
          href="../kok-kok"
          description="Kok Kok App - dProject SocialApp"
        />
  
        <ArticleCard
          title="คูปองใช้งาน"
          href="/"
          description="2K NFT Coupon"
        />
  
        <ArticleCard
          title="เหรียญ - ดีอินฟินิตี้"
          href="/"
          description="D Infinity Coin - dProject Utility Token"
        />
      </div>
    );
  }

  function ArticleCard(props: {
    title: string;
    href: string;
    description: string;
  }) {
    return (
      <a
        href={props.href + "?utm_source=next-template"}
        target="_blank"
        className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
      >
        <article>
          <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
          <p className="text-sm text-zinc-400">{props.description}</p>
        </article>
      </a>
    );
  }