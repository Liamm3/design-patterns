import { Draft, PendingReview, Post, Published } from "./lib/"

const isDraft = (post: Post): boolean => post.status instanceof Draft;
const isPendingReview = (post: Post): boolean => post.status instanceof PendingReview;
const isPublished = (post: Post): boolean => post.status instanceof Published;

export function run() {
  const post = new Post();

  post.approve();

  if (isDraft(post)) {
    console.log("Still Draft")
  } else if (isPendingReview(post)) {

  } else if (isPublished(post)) {

  }

  post.addText("Some text");
  post.approve();

  console.log(post)
}
