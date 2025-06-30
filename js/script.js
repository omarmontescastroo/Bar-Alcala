function toggleReceta(id) {
    const receta = document.getElementById('receta' + id);
    if (receta.style.display === "none" || receta.style.display === "") {
        receta.style.display = "block";
    } else {
        receta.style.display = "none";
    }
}
