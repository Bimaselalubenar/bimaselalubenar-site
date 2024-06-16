function addNote() {
    const name = document.getElementById("name").value;
    const note = document.getElementById("note").value;

    const noteContainer = document.createElement("div");
    noteContainer.className = "note-container";

    noteContainer.innerHTML = `
    <div style="border: 0px solid #ccc; padding: 15px; max-width: 100%; word-wrap: break-word; box-sizing: border-box;">
        <p style="margin-bottom: 15px; font-size: 16px;">Nama: ${note.name}</p>
        <p style="margin-bottom: 15px; font-size: 16px;">Catatan: ${note.note}</p>
        <button style="margin-bottom: 15px; font-size: 14px; padding: 10px 20px;" onclick="saveAsImage(this)">Simpan sebagai Gambar</button>
        <button class="delete-button" style="margin-bottom: 15px; font-size: 14px; padding: 10px 20px;" onclick="deleteNote(this)">Hapus</button>
    </div>
`;
    // Menambahkan catatan di awal daftar
    const notesContainer = document.getElementById("notes");
    notesContainer.insertBefore(noteContainer, notesContainer.firstChild);

    document.getElementById("noteForm").reset();

    // Menyimpan catatan ke localStorage
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.unshift({ name, note }); // Menambahkan di awal array
    localStorage.setItem("notes", JSON.stringify(notes));
}

function saveAsImage(button) {
    const noteContainer = button.parentElement;
    html2canvas(noteContainer).then((canvas) => {
        const link = document.createElement("a");
        link.download = "catatan.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}

function deleteNote(button) {
    const noteContainer = button.parentElement;
    noteContainer.remove();

    // Menghapus catatan dari localStorage
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const name = noteContainer.querySelector("p").textContent.split(": ")[1];
    const note = noteContainer
        .querySelector("p:nth-of-type(2)")
        .textContent.split(": ")[1];
    const index = notes.findIndex((n) => n.name === name && n.note === note);
    if (index !== -1) {
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.onload = function () {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach((note) => {
        const noteContainer = document.createElement("div");
        noteContainer.className = "note-container";

        noteContainer.innerHTML = `
    <div style="border: 0px solid #ccc; padding: 15px; max-width: 100%; word-wrap: break-word; box-sizing: border-box;">
        <p style="margin-bottom: 15px; font-size: 16px;">Nama: ${note.name}</p>
        <p style="margin-bottom: 15px; font-size: 16px;">Catatan: ${note.note}</p>
        <button style="margin-bottom: 15px; font-size: 14px; padding: 10px 20px;" onclick="saveAsImage(this)">Simpan sebagai Gambar</button>
        <button class="delete-button" style="margin-bottom: 15px; font-size: 14px; padding: 10px 20px;" onclick="deleteNote(this)">Hapus</button>
    </div>
`;
        document.getElementById("notes").appendChild(noteContainer);
    });
};
