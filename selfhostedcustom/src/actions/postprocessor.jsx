class PostProcessor {
  constructor() {}

  correct(input) {
    return input.replaceAll("http://", "https://");
  }
}
export default PostProcessor;
