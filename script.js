document.getElementById('rsvpBtn').addEventListener('click', ()=>{
  const name = prompt('Masukkan nama Anda untuk konfirmasi hadir:') || '';
  const phone = prompt('Masukkan nomor/WA (opsional):') || '';
  if(name.trim()==='') return alert('Konfirmasi dibatalkan. Nama diperlukan.');
  document.getElementById('rsvpInfo').textContent = `${name}${phone? ' • '+phone : ''}`;
  alert('Terima kasih, konfirmasi Anda telah tercatat.');
});

document.getElementById('printBtn').addEventListener('click', ()=>{
  window.print();
});
