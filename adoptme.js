document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const phone    = document.getElementById('phone').value.trim();
    const petCountInput = document.getElementById('pet_count');
    const petCountRaw   = petCountInput.value.trim();
    const acknowledgement = document.querySelector('input[name="acknowledgement"]');

    // 1. ชื่อ–นามสกุล ห้ามว่าง
    if (fullname === '') {
      alert('กรุณากรอกชื่อ–นามสกุลผู้ติดต่อ');
      document.getElementById('fullname').focus();
      return;
    }

    // 2. เบอร์ผู้ติดต่อ ห้ามว่าง
    if (phone === '') {
      alert('กรุณากรอกเบอร์ผู้ติดต่อ');
      document.getElementById('phone').focus();
      return;
    }

    // 3. จำนวนสัตว์เลี้ยง — ต้องใส่ค่ามา, เป็นตัวเลข, และอยู่ในช่วง 0–100
    if (petCountRaw === '') {
      alert('กรุณากรอกจำนวนสัตว์เลี้ยงที่มีอยู่ปัจจุบัน\n(ค่าที่อนุญาต: 0 – 100)');
      petCountInput.focus();
      return;
    }

    const petCount = Number(petCountRaw);
    if (isNaN(petCount) || petCount < 0 || petCount > 100) {
      alert('จำนวนสัตว์เลี้ยงที่มีอยู่ปัจจุบันต้องเป็นตัวเลขในช่วง 0 – 100 เท่านั้น');
      petCountInput.focus();
      return;
    }

    // 4. Checkbox รับทราบ — ต้องเลือก
    if (!acknowledgement.checked) {
      alert('กรุณารับทราบว่าการส่งแบบฟอร์มนี้เป็นการแจ้งความสนใจ โดยไม่รับรองการได้รับอุปการะสุนัข');
      return;
    }

    // ผ่านการตรวจสอบทุกข้อ — ส่งฟอร์ม
    form.submit();
  });
});
