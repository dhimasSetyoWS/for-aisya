const pass_field = document.getElementById("pass_field");

function submit_pass() {
	if (pass_field.value == "2025-11-14") {
		window.location.href = "/words.html";
	} else {
		Swal.fire({
			title: 'Salah sayanggg',
			text: 'Coba lagi ayoo!',
			icon: 'error',
			confirmButtonText: 'Iyaa'
		})
	}
}