// JavaScript (bạn sẽ viết các hàm xử lý sự kiện tại đây)
document.getElementById("formSinhVien").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form submit mặc định
    const hoTen = document.getElementById("hoTen").value;
    const lop = document.getElementById("lop").value;
    const maSV = document.getElementById("maSV").value;
    const ngaySinh = document.getElementById("ngaySinh").value;
    const student = {
        name: hoTen,
        class: lop,
        id: maSV,
        dob: ngaySinh
    }
    
    let stuList = []
    const elements = JSON.parse(localStorage.getItem('danhSach'));
    
    if(elements != null){
        elements.forEach(elem => {
            stuList.push(elem);
        });
        stuList.push(student);
    }
        
        
    else{
    stuList.push(student);
    }
    localStorage.setItem('danhSach', JSON.stringify(stuList));
    
});

x
// Hàm hiển thị danh sách sinh viên từ localStorage khi trang tải
function hienThiDanhSachSinhVien() {
    const stuList = JSON.parse(localStorage.getItem('danhSach'));
    if(stuList == null) return;
    let table = document.getElementById('bangSinhVien');
    stuList.forEach(element => {
        let row = table.insertRow();
        row.insertCell(0).innerText = element.name;
        row.insertCell(1).innerText = element.id;
        row.insertCell(2).innerText = element.dob;
        row.insertCell(3).innerText = element.class;
    });
}

// Gọi hàm hiển thị danh sách khi t