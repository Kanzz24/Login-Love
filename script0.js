// เลือกปุ่มจาก HTML
const btn = document.getElementById('refreshBtn');

// เมื่อกดปุ่ม ให้กลับไป index.html
btn.addEventListener('click', () => {
    window.location.href = 'index.html';
});
