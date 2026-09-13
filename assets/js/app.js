// Демонстраційна версія: дані беруться з assets/js/data.js.
// У робочій версії тут буде звернення до REST API бекенда.
document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click',()=>window.open(img.src,'_blank'));
});
