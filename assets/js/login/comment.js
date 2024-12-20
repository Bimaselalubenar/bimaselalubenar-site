const scriptURL1 = 'https://script.google.com/macros/s/AKfycbxXTN8rkv1lA4xWyBNKpCikzOVRUUrjgeNHI3eyDBG9dDEoVt7mfNcuVVvgxwqpqPeF/exec';
        const form1 = document.getElementById('chat');
        const statusMessage1 = document.getElementById('status-txt');

        form1.addEventListener('submit', e => {
            e.preventDefault();

            statusMessage1.innerHTML = "Proses pesan masuk...";

            setTimeout(() => {
                statusMessage1.innerHTML = "Tunggu hingga selesai...";
            }, 2000);

            setTimeout(() => {
                fetch(scriptURL1, { method: 'POST', body: new FormData(form1) })
                    .then(response => {
                        statusMessage1.innerHTML = "Pesan terkirim";
                        Swal.fire({
                            icon: 'success',
                            title: 'Komentar terkirim!',
                            text: 'pesan anda sudah terpublish secara umum',
                        }).then(() => {
                            window.location.reload();
                        });
                    })
                    .catch(error => {
                        console.error('Error!', error.message);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Ada masalah, coba ulangi lagi.',
                        });
                    });
            }, 5000);
        });

const spreadsheetUrl = 'https://script.google.com/macros/s/AKfycbxXTN8rkv1lA4xWyBNKpCikzOVRUUrjgeNHI3eyDBG9dDEoVt7mfNcuVVvgxwqpqPeF/exec'; // Replace with your Google Script URL

        fetch(spreadsheetUrl)
            .then(response => response.json())
            .then(data => {
                const messagesDiv = document.getElementById('messages');
                
                data.forEach(item => {
                    const messageDiv = document.createElement('div');
                    messageDiv.classList.add('message-container');
                    
                    const nameElement = document.createElement('h3');
                    nameElement.textContent = `${item.nama}`;
                    
                    const messageElement = document.createElement('p');
                    messageElement.textContent = `${item.pesan}`;
                    
                    const dateElement = document.createElement('p');
                    dateElement.classList.add('date');
                    dateElement.textContent = `Date : ${item.date}`;
                    
                    messageDiv.appendChild(nameElement);
                    messageDiv.appendChild(messageElement);
                    messageDiv.appendChild(dateElement);
                    
                    messagesDiv.appendChild(messageDiv);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });