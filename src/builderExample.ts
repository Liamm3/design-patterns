import { BlogPost } from "./lib/";

export function run() {
  const blogPostOne = new BlogPost()
    .addTitle("My first blog post")
    .addAuthor("Liam")
    .addContent("Lorem lorem, ipsum ipsum.")
    .addTag("Science")
    .addTag("Fun");
  console.log(blogPostOne);

  const blogPostTwo = new BlogPost()
    .addTitle("Yes")
    .addContent("No.");
  console.log(blogPostTwo);
}

class BadBlogPost {
  public static next_id: number = 0
  public id: number = BlogPost.next_id++;
  public likes: number = 0;

  public constructor(
    public title?: string,
    public author?: string,
    public subtitle?: string,
    public content?: string,
    public tags: string[] = []
  ) {}
}

export function runBad() {
  const blogPostOne = new BadBlogPost(
    "My first blog post",
    "Liam",
    undefined,
    "Lorem lorem, ipsum ipsum.",
    ["Science", "Fun"]
  )
  console.log(blogPostOne);

  const blogPostTwo = new BadBlogPost("Yes", undefined, undefined, "No.");
  console.log(blogPostTwo);
}
