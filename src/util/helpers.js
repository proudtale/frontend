export function formatStringThumbnail(s) {
  if (s.length < 14) return s;
  return s.substring(0, 13) + "...";
}

export function formatString(s) {
  if (s.length < 14) return s;
  return s.substring(0, 139) + "...";
}

export function formatStringReplaceHtmltag(s) {
  return s.replace(/(<([^>]+)>)/g, "");
}
