import { Draft, PendingReview, Post, Published } from "./lib/"

const isDraft = (post: Post) => post.status instanceof Draft;
const isPendingReview = (post: Post) => post.status instanceof PendingReview;
const isPublished = (post: Post) => post.status instanceof Published;

export function run() {
  const post = new Post();

  post.approve();

  if (isDraft(post)) {
    console.log("Could not approve post, because it is still a draft.")
  } else if (isPendingReview(post)) {

  } else if (isPublished(post)) {

  }

  post.addText("Some text");
  post.approve();

  console.log(post)
}
