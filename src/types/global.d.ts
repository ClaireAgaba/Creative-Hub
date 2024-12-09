interface Window {
  FB?: {
    XFBML: {
      parse: () => void;
    };
  };
  twttr?: {
    widgets: {
      load: () => void;
    };
  };
  instgrm?: {
    Embeds: {
      process: () => void;
    };
  };
}
