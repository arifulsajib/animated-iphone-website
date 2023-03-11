//Pin the banner
const tlBanner = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner-pin",
    start: "30%",
    end: "100%",
    pin: true,
    pinSpacing: false
  }
});

// Brief section text animation
const tlHighlight = gsap.timeline({
  scrollTrigger: {
    trigger: ".brief-section",
    start: "-30%",
    end: "70%",
    scrub: true
  }
});

tlHighlight.fromTo(".highlight", { color: "rgba(255,255,255,0.4)" }, { color: "rgba(255,255,255,1)", stagger: 1 });

const tlRemoveHighlight = gsap.timeline({
  scrollTrigger: {
    trigger: ".brief-section",
    start: "-10%",
    end: "85%",
    scrub: true
  }
});

tlRemoveHighlight.to(".highlight", { color: "rgba(255,255,255,0.4)", stagger: 1 });

// iphone Model section animation
const tlModel = gsap.timeline({
  scrollTrigger: {
    trigger: ".model-section",
    start: "-40%",
    end: "5%",
    scrub: true
  }
});

tlModel.fromTo(".small-phone", { opacity: 0.6 }, { opacity: 1 });
tlModel.fromTo(".left-text", { x: 50, opacity: 0 }, { x: 0, opacity: 1 });
tlModel.fromTo(".right-text", { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, "<");

const tlModelPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".model-section",
    start: "30%",
    end: "100%",
    scrub: true,
    pin: true,
    pinSpacing: false
  }
});

// Color Selection
