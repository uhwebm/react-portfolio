import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-4xl">
         <div className="mb-20 text-center">
            <h1 className="text-4xl font-serif text-white md:text-6xl mb-6">Thoughts & Insights</h1>
            <p className="text-neutral-400 max-w-xl mx-auto">
                Musings on game development, software engineering, and the future of digital experiences.
            </p>
        </div>

        <div className="grid gap-10">
          {posts.map((post) => (
            <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group block rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/10"
            >
              <div className="mb-4 text-sm text-neutral-500 uppercase tracking-widest">
                {new Date(post.date).toLocaleDateString()}
              </div>
              <h2 className="mb-3 text-2xl font-serif text-white group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-neutral-400 leading-relaxed font-light">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
