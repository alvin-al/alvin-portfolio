import gsap from "gsap";

export const animatePageIn = () => {
  const bannerLeft = document.getElementById("banner-1");
  const bannerRight = document.getElementById("banner-2");
  const hideScroll = () => {
    document.body.style.overflow = "hidden";
    document.body.style.transition = "none";
  };
  const showScroll = () => {
    document.body.style.transition = "overflow 2s ease-in-out";
    document.body.style.overflow = "auto";
  };

  hideScroll();

  if (bannerLeft && bannerRight) {
    const tl = gsap.timeline();

    tl.set([bannerLeft, bannerRight], {
      yPercent: 0,
      delay: 0.5,
    }).to([bannerLeft, bannerRight], {
      yPercent: 100,
      stagger: 0.2,
      onComplete: () => {
        showScroll();
      },
    });
  }
};
