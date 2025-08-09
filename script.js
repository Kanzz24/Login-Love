const yesBtn = document.querySelector(".yes-btn"); 
const noBtn = document.querySelector(".no-btn"); 

// เพิ่ม Event Listener เมื่อคลิกที่ปุ่ม Yes
yesBtn.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'index2.html';
    }, 2000); // หน่วงเวลา 1 วินาที (1000 มิลลิวินาที) ก่อนเปลี่ยนหน้า
});

noBtn.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'index0.html';
    }, 2000); // หน่วงเวลา 1 วินาที (1000 มิลลิวินาที) ก่อนเปลี่ยนหน้า
});

                                                                            