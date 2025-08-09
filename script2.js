const openBtn = document.getElementById('openBtn');

function openEnvelope() {
    const envelopeWrapper = document.querySelector('.envelope-wrapper');
    const card = document.querySelector('.card');

    envelopeWrapper.classList.add('open');

    setTimeout(() => {
        window.location.href = 'index3.html';
    }, 5000);
}

// ผูก event ให้ปุ่มเปิดซองเรียกฟังก์ชัน
openBtn.addEventListener('click', openEnvelope);

function closeEnvelope() {
    const envelopeWrapper = document.querySelector('.envelope-wrapper');
    const card = document.querySelector('.card');

    
    envelopeWrapper.classList.remove('open');
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        openEnvelope();
    }
});
