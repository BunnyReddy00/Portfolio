import React, { useEffect, useRef } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  const scrollDirRef = useRef<'down' | 'up'>('down');

  useEffect(() => {
    let prevY = window.scrollY;
    const onScroll = () => {
      const cur = window.scrollY;
      scrollDirRef.current = cur > prevY ? 'down' : 'up';
      prevY = cur;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const items = Array.from(document.querySelectorAll('.vertical-timeline-element')) as HTMLElement[];
    const contents = items.map(i => i.querySelector('.vertical-timeline-element-content') as HTMLElement).filter(Boolean);

    const isTouch = (('ontouchstart' in window) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) || window.matchMedia('(pointer: coarse)').matches);
    if (isTouch) {
      contents.forEach(c => {
        if (c) c.style.transition = 'transform 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms ease';
      });
    }

    const vh = window.innerHeight || document.documentElement.clientHeight;
    items.forEach((el, idx) => {
      const content = contents[idx];
      if (!content) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const distance = center - vh / 2;
      const norm = distance / (vh / 2);
      const clamped = Math.max(-1, Math.min(1, norm));
      if (Math.abs(clamped) < 0.85) {
        el.classList.add('in-view');
        el.classList.remove('from-top', 'from-bottom');
      } else if (clamped < 0) {
        el.classList.add('from-top');
        el.classList.remove('from-bottom', 'in-view');
      } else {
        el.classList.add('from-bottom');
        el.classList.remove('from-top', 'in-view');
      }
    });

    let rafId = 0;
    const update = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      items.forEach((el, idx) => {
        const content = contents[idx];
        if (!content) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = center - vh / 2;
        const norm = distance / (vh / 2);
        const clamped = Math.max(-1, Math.min(1, norm));
        const translate = clamped * 24;
        const opacity = Math.max(0, 1 - Math.abs(clamped));

        if (Math.abs(clamped) < 0.85) {
          el.classList.add('in-view');
          el.classList.remove('from-top', 'from-bottom');
        } else if (clamped < 0) {
          el.classList.add('from-top');
          el.classList.remove('from-bottom', 'in-view');
        } else {
          el.classList.add('from-bottom');
          el.classList.remove('from-top', 'in-view');
        }

        content.style.transform = `translateY(${translate}px)`;
        content.style.opacity = String(opacity);
      });
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - 2027"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in Computer Science Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">2023 – 2027</h4>
            <p>
              Pursuing a strong foundation in programming, software development, and computing fundamentals.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2027"
            iconStyle={{ background: 'var(--accent)', color: 'var(--text)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Java Programming & OOP</h3>
            <h4 className="vertical-timeline-element-subtitle">2026 – Present</h4>
            <p>
              Learning core Java, object-oriented concepts, and application development through practical coding practice.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2027"
            iconStyle={{ background: 'var(--accent)', color: 'var(--text)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">SQL, DSA & Problem Solving</h3>
            <h4 className="vertical-timeline-element-subtitle">2026 – Present</h4>
            <p>
              Strengthening SQL, data structures, algorithms, and logical problem-solving skills through continuous practice.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2027"
            iconStyle={{ background: 'var(--accent)', color: 'var(--text)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Certifications & Workshops</h3>
            <h4 className="vertical-timeline-element-subtitle">Continuous Growth</h4>
            <p>
              Building practical exposure through internships, workshops, and real-world project development.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
