const pageList = [
    { name: 'Speed Monster!', path: 'index.html' },
    { name: 'Blogs!', path: 'blog.html' },
]

const navbar = pageId => {
    const nav = document.getElementById('nav');
    nav.innerHTML = `
    <a href="${pageList[pageId].path}"><button class="id-btn">${pageList[pageId].name}</button></a>
    `;
}
