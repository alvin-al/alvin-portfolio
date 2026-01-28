/**
 * Extract YouTube video ID from various YouTube URL formats
 * Supports:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 */
export function getYouTubeId(url: string): string | null {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
}

/**
 * Extract Vimeo video ID from Vimeo URL
 * Supports:
 * - https://vimeo.com/VIDEO_ID
 * - https://player.vimeo.com/video/VIDEO_ID
 */
export function getVimeoId(url: string): string | null {
  const regExp = /^.*(?:vimeo.com\/)(?:channels\/|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
  const match = url.match(regExp);
  return match ? match[3] : null;
}

/**
 * Determine video platform and return embed URL
 */
export function getVideoEmbedUrl(url: string): { embedUrl: string; platform: 'youtube' | 'vimeo' } | null {
  const youtubeId = getYouTubeId(url);
  if (youtubeId) {
    return {
      embedUrl: `https://www.youtube.com/embed/${youtubeId}`,
      platform: 'youtube',
    };
  }

  const vimeoId = getVimeoId(url);
  if (vimeoId) {
    return {
      embedUrl: `https://player.vimeo.com/video/${vimeoId}`,
      platform: 'vimeo',
    };
  }

  return null;
}
