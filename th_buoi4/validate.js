$().ready(function() {
	$("#formSinhVien").validate({
		onfocusout: false,
		onkeyup: false,
		onclick: false,
		rules: {
			"hoTen": {
				required: true
			},
			"maSV": {
				required: true
			},
			"ngaySinh": {
				required: true
			},
            "lop":{
                required: true
            }
		},
        messages:{
            "hoTen": {
				required: "Nhập tên sinh viên !"
			},
			"lop": {
				required: "Nhập lớp !"
			},
			"ngaySinh": {
				required: "Nhập ngày sinh !"
			},
            "maSV":{
                required: "Nhập mã sinh viên !"
            }
        }
	});
});
