var myFP = fluidPlayer("video", {
  layoutControls: {
    controlBar: {
      autoHideTimeout: 3,
      animated: true,
      autoHide: true,
    },
    htmlOnPauseBlock: {
      html: null,
      height: null,
      width: null,
    },
    autoPlay: false,
    mute: true,
    allowTheatre: false,
    playPauseAnimation: true,
    playbackRateEnabled: false,
    allowDownload: false,
    playButtonShowing: true,
    fillToContainer: false,
    posterImage: "poster.jpg",
  },
  vastOptions: {
    adList: [],
    adCTAText: false,
    adCTATextPosition: "",
  },
});
