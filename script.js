var player = videojs('my-video');
var options = {
  id: 'my-video',
  adTagUrl: 'https://googleads.g.doubleclick.net/pagead/ads?ad_type=video&client=ca-video-pub-1234567890123456&description_url=http%3A%2F%2Fexample.com&videoad_start_delay=0&hl=en&max_ad_duration=30000'
};

const video = document.querySelector('video');

// This creates an intersection observer (for 50% viewport)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.played.length) {
      // Calculating the intersection ratio
      const ratio = entry.intersectionRatio;
      // If the intersection ratio is at least 50%
      if (ratio >= 0.5) {
        // Autoplays the video
        video.autoplay = true;
        entry.target.play();
      }
    }
  });
}, { threshold: 0.5 });

observer.observe(video);

//Integrating ads

var player = videojs('content_video');

var options = {
  id: 'content_video',
  adTagUrl: 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&vid=short_onecue&correlator='
};

player.ima(options);