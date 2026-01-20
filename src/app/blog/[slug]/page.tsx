import { getPostBySlug } from "@/lib/mdx";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { meta, content } = await getPostBySlug(slug);

  return (
    <article className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        <Link 
            href="/blog" 
            className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors"
        >
            <ArrowLeft size={16} /> Back to Blog
        </Link>
        
        <header className="mb-12">
            <h1 className="mb-4 text-4xl font-serif text-white md:text-5xl leading-tight">
                {meta.title}
            </h1>
            <div className="text-neutral-500">
                {new Date(meta.date).toLocaleDateString()}
            </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none text-neutral-300 font-light prose-headings:font-serif prose-headings:text-white prose-a:text-indigo-400 prose-code:text-emerald-400 prose-pre:bg-white/5 prose-pre:backdrop-blur-md prose-pre:border prose-pre:border-white/10 prose-li:marker:text-emerald-500">
          {content}
        </div>
      </div>
    </article>
  );
}
