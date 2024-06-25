function submitResena() {
    const user_id = document.getElementById('user_id').value;
    const manga_id = document.getElementById('manga_id').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    fetch('http://127.0.0.1:8000/api/resena/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({
            user_id: user_id,
            manga_id: manga_id,
            rating: rating,
            comment: comment
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}