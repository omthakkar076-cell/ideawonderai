import { redirect, notFound } from "next/navigation";
const pages: Record<string,string> = {
 "services/seo-ai-search":"/design-pages/seo-ai-search.html",
 "services/seo":"/design-pages/seo-ai-search.html",
 "services/ai-search-optimization":"/design-pages/seo-ai-search.html",
 "services/social-media-marketing":"/design-pages/social-media-marketing.html",
 "services/performance-marketing":"/design-pages/performance-marketing.html",
 "services/lead-generation":"/design-pages/lead-generation.html",
 "services/b2b-lead-generation":"/design-pages/lead-generation.html",
 "services/business-automation":"/design-pages/business-automation.html",
 "services/ai-business-automation":"/design-pages/business-automation.html",
 "services/marketing-automation":"/design-pages/business-automation.html",
 "case-study":"/design-pages/case-study.html",
 "case-studies":"/design-pages/case-study.html",
 "blogs":"/design-pages/blogs.html",
 "blog":"/design-pages/blogs.html",
 "contact":"/design-pages/contact.html"
};
export default async function OriginalDesignRoute({params}:{params:Promise<{slug:string[]}>}) {
 const {slug}=await params; const destination=pages[slug.join("/")];
 if(!destination) notFound(); redirect(destination);
}
