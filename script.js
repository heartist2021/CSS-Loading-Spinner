function startLoading() {
    document.querySelector('.spinner').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.spinner').style.display = 'none';
    }, 3000); // Simulating a 3-second loading process
}
