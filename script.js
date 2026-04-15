/**
 * NEXPUS Corporate Website JavaScript
 * 인터랙션 및 모바일 메뉴 제어
 * 작성일: 2026-04-15
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. 모바일 메뉴 토글 제어 ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        // 햄버거 버튼 클릭 시 메뉴 열기/닫기
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('open');
        });

        // 메뉴 링크 클릭 시 메뉴 닫기 (모바일 환경용)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('open');
            });
        });
    }

    // --- 2. 헤더 스크롤 효과 (디자인 변화 추가) ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 3. 섹션 이동 시 활성 링크 표시 (Scroll Spy) ---
    // 현재 스크롤 위치에 따라 내비게이션 링크 스타일을 변경합니다.
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active-link');
            }
        });
    });

});