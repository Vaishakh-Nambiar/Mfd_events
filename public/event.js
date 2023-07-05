gsap.registerPlugin(ScrollTrigger);
var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".landing",
    //   pin: true,
    start: "top top",
    end: "bottom ",
    // markers: true,
    scrub: 1,
  },
});

gsap.from(".slider ", {
  x: 100,
  opacity: 0,
});
gsap.to(".slider ", {
  opacity: 1,
});

gsap.from(".box-info", {
  y: 150,
  duration: 1.5,
  opacity: 0,
});
gsap.to(".box-info", {
  y: 0,
  duration: 1.5,
});

gsap.from(".land-head", {
  y: -150,
  duration: 2,
  opacity: 0,
});

var tl2 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".intro",
      //   pin: true,
      start: "top 300",
      end: ".intro-left p ",
      // markers: true,
      scrub: 1,
    },
  })
  .from(".intro-left .heading-1", {
    y: -100,
    opacity: 0,
    duration: 1,
  })
  .from(".intro-left", {
    opacity: 0,
    duration: 1,
  })
  .from(".intro-circle", {
    opacity: 0,
    duration: 1,
  });

var tl3 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".timetable",
      start: "top 200",
      end: "bottom bottom ",
      //   markers: true,
      scrub: 1,
    },
  })
  .from(".t-heading ", {
    y: -50,
    opacity: 0,
  })
  .from(".timetable p ", {
    y: -50,
    opacity: 0,
  })
  .from(".t-table ", {
    x: -150,
    opacity: 0,
  });

var tl4 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".art-right",
      //   pin: true,
      start: "top 250",
      end: "bottom bottom ",
      //   markers: true,
      scrub: 1,
    },
  })

  .from(".artist .heading-1", {
    y: 30,
    opacity: 0,
  })
  .from(".artist p", {
    y: 5,
    opacity: 0,
  });

var tl5 = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".foot-up",
      //   pin: true,
      start: "top 200",
      end: "bottom bottom ",
      //   markers: true,
      scrub: 1,
    },
  })
  .from(".foot-up img", {
    x: -150,
    opacity: 0,
  });
