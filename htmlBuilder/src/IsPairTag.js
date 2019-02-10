export default class IsPairTag {
  static check(tag) {
    return tag.name && tag.attributes && tag.content;
  }
}
