import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { openingHours, socials } from "../../constants";
import { SplitText } from "gsap/all";

const Contact = () => {

    useGSAP(() => {
        const titleSplit = new SplitText("#contact h2", { type: "words" });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: "top center",
            },
            ease: "power1.InOut",
        })

        timeline.from(titleSplit.words, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.02,
        })
        .from("#contact h3, #contact p", {
            opacity: 0,
            yPercent: 100,
            stagger: 0.02,
        })
        .to('#f-right-leaf', {
            y: '-50',
            duration: 1,
            ease: "power1.InOut",
        })
        .to('#f-left-leaf', {
            y: '50',
            duration: 1,
            ease: "power1.InOut",
        }, '<')
    })

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>113 Sainaamyen Rd., Patong, A. Kathu</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <h3>(666) 987-6543</h3>
          <p>Moo@moobar.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
