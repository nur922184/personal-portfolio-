import "./Cursor.css";
import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const particlesRef = useRef([]);
  const isDesktopRef = useRef(false);

  useEffect(() => {
    // ডেস্কটপ ডিভাইস চেক করুন
    const checkIfDesktop = () => {
      return window.innerWidth > 768 && !window.matchMedia('(hover: none)').matches;
    };

    isDesktopRef.current = checkIfDesktop();

    if (!isDesktopRef.current) {
      // মোবাইল/ট্যাবলেট ডিভাইসে কার্সার দেখাবো না
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    // ডিফল্ট কার্সার লুকানো
    document.body.style.cursor = 'none';
    
    // পার্টিকেল সেটআপ
    particlesRef.current = [];
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('div');
      particle.className = 'cursor-particle';
      document.body.appendChild(particle);
      particlesRef.current.push({
        element: particle,
        x: 0,
        y: 0,
        delay: i * 0.5,
        size: Math.random() * 4 + 2
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let scale = 1;
    let opacity = 1;
    
    // মাউস মুভমেন্ট ট্র্যাকিং
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (cursor) {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      }
    };
    
    // অ্যানিমেশন লুপ
    const animate = () => {
      // শুধুমাত্র ডেস্কটপে অ্যানিমেশন চলবে
      if (!isDesktopRef.current) return;
      
      // ফলোয়ার কার্সার মুভমেন্ট
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      
      if (follower) {
        follower.style.left = `${followerX}px`;
        follower.style.top = `${followerY}px`;
        follower.style.transform = `translate(-50%, -50%) scale(${scale})`;
        follower.style.opacity = opacity;
      }
      
      // পার্টিকেল মুভমেন্ট
      particlesRef.current.forEach((particle, index) => {
        const targetX = mouseX - (index * 3);
        const targetY = mouseY - (index * 3);
        
        particle.x += (targetX - particle.x) * (0.1 - (index * 0.01));
        particle.y += (targetY - particle.y) * (0.1 - (index * 0.01));
        
        particle.element.style.left = `${particle.x}px`;
        particle.element.style.top = `${particle.y}px`;
        particle.element.style.width = `${particle.size}px`;
        particle.element.style.height = `${particle.size}px`;
      });
      
      requestAnimationFrame(animate);
    };
    
    // ক্লিক ইফেক্ট
    const handleMouseDown = () => {
      if (!isDesktopRef.current) return;
      scale = 0.8;
      if (cursor) cursor.style.backgroundColor = '#ff5e7d';
    };
    
    const handleMouseUp = () => {
      if (!isDesktopRef.current) return;
      scale = 1;
      if (cursor) cursor.style.backgroundColor = '#5e81ff';
    };
    
    // হোভার ইফেক্ট
    const handleMouseOver = (e) => {
      if (!isDesktopRef.current) return;
      
      if (e.target.matches('a, button, [data-cursor-hover]')) {
        scale = 1.5;
        opacity = 0.7;
        if (cursor) cursor.style.backgroundColor = '#ffcb5e';
      }
      
      if (e.target.matches('[data-cursor-special]')) {
        scale = 2;
        opacity = 0.5;
        if (cursor) cursor.style.backgroundColor = '#5effc2';
      }
    };
    
    const handleMouseOut = (e) => {
      if (!isDesktopRef.current) return;
      
      if (e.target.matches('a, button, [data-cursor-hover], [data-cursor-special]')) {
        scale = 1;
        opacity = 1;
        if (cursor) cursor.style.backgroundColor = '#5e81ff';
      }
    };

    // রিসাইজ ইভেন্ট
    const handleResize = () => {
      const wasDesktop = isDesktopRef.current;
      isDesktopRef.current = checkIfDesktop();
      
      if (wasDesktop && !isDesktopRef.current) {
        // ডেস্কটপ থেকে মোবাইলে স্যুইচ হলে ক্লিনআপ
        cleanup();
      } else if (!wasDesktop && isDesktopRef.current) {
        // মোবাইল থেকে ডেস্কটপে স্যুইচ হলে পুনরায় শুরু
        initCursor();
      }
    };
    
    // ইভেন্ট লিসেনার যোগ করা
    const initCursor = () => {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);
      
      // অ্যানিমেশন শুরু
      animate();
    };
    
    const cleanup = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.style.cursor = 'auto';
      
      // কার্সার এলিমেন্ট লুকানো
      if (cursor) cursor.style.display = 'none';
      if (follower) follower.style.display = 'none';
      
      // পার্টিকেল সরানো
      particlesRef.current.forEach(particle => {
        if (particle.element && particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element);
        }
      });
      particlesRef.current = [];
    };
    
    // রিসাইজ ইভেন্ট লিসেনার যোগ
    window.addEventListener('resize', handleResize);
    
    // কার্সার ইনিশিয়ালাইজ
    if (isDesktopRef.current) {
      initCursor();
    }
    
    // ক্লিনআপ
    return () => {
      window.removeEventListener('resize', handleResize);
      cleanup();
    };
  }, []);

  // শুধুমাত্র ডেস্কটপে কার্সার রেন্ডার করা
  const isDesktop = typeof window !== 'undefined' ? 
    window.innerWidth > 768 && !window.matchMedia('(hover: none)').matches : 
    false;

  if (!isDesktop) {
    return null;
  }

  return (
    <>
      <div ref={cursorRef} className="advanced-cursor"></div>
      <div ref={followerRef} className="advanced-cursor-follower"></div>
    </>
  );
};

export default Cursor;