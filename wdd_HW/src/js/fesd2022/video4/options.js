export default {
    SETTINGS: {
        videoId: null,
        videoType: null,
        videoAutoplay: 'off',
        videoMode: 'onBox',
        videoButton: '.playButton',
        videoCover: 'on',
        videoLayoutNo: 0,
        videoTarget: 'video-template',
        videoTargetRoute: './video4_lightbox.html',
    },
    ATTRS: {
        id: 'video-id',
        type: 'video-type',
        autoplay: 'video-autoplay',
        hash: 'vimeo-hash',
    },
    EVENTS: {
        init: null,
        afterInit: null,
        beforeDestroy: null,
        afterUpdate: null,
    },
    // video4 target 內放置結構 index 對應 videoLayoutNo
    LAYOUT: ['<a class="video-play-button"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 104 104" enable-background="new 0 0 104 104" xml:space="preserve"><path fill="#FFFFFF" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10" d="M26,35h52L52,81L26,35z"/><circle class="video-play-circle" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-miterlimit="10" cx="52" cy="52" r="50"/></svg><span class="video-play-outline"></span></a>'],
    // videoPlayer customElements 內結構
    TEMPLATE() {
        return `
            <div class="player-container">
                <div class="player-wrapper"></div>
            </div>
            `;
    },
};