
// ======================================
// SANTOSDEV - JAVASCRIPT
// ======================================

// CONFIGURAÇÃO DO WHATSAPP

const numeroWhatsApp = "5561993970217";

const mensagem = 
    "Olá! Vim pelo site da SantosDev e gostaria " +
    "de solicitar um orçamento para um projeto.";

const linkWhatsApp =
    `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

// CONFIGURAR TODOS OS BOTÕES DE WHATSAPP

document.querySelectorAll(".whatsapp-link").forEach(botao => {
    botao.href = linkWhatsApp;
    botao.target = "_blank";
    botao.rel = "noopener noreferrer";
});

// MENU RESPONSIVO

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    const aberto = menu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(aberto));
    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = aberto ? "✕" : "☰";
});

// FECHAR MENU AO CLICAR NOS LINKS

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        menuToggle.textContent = "☰";
    });
});

// ATUALIZAR ANO DO RODAPÉ

document.getElementById("year").textContent =
    new Date().getFullYear();
