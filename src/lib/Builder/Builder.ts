interface IBuildBlogPost {
  addTitle(title: string): IBuildBlogPost;
  addAuthor(author: string): IBuildBlogPost;
  addSubtitle(subtitle: string): IBuildBlogPost;
  addTag(tag: string): IBuildBlogPost;
  addContent(content: string): IBuildBlogPost;
}

export class BlogPost implements IBuildBlogPost {
  public static next_id: number = 0
  public id: number = BlogPost.next_id++;
  public likes: number = 0;
  public tags: string[] = [];

  public constructor(
    public title?: string,
    public author?: string,
    public subtitle?: string,
    public content?: string,
  ) {
  }

  addTitle(title: string): IBuildBlogPost {
      this.title = title;
      return this;
  }

  addTag(tag: string): IBuildBlogPost {
    this.tags.push(tag);
    return this;
  }

  addAuthor(author: string): IBuildBlogPost {
      this.author = author;
      return this;
  }

  addSubtitle(subtitle: string): IBuildBlogPost {
      this.subtitle = subtitle;
      return this;
  }

  addContent(content: string): IBuildBlogPost {
      this.content = content;
      return this;
  }
}
