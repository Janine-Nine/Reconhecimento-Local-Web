// =========================
// RECONHECIMENTO LOCAL WEB
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // PACOTES DE SERVIÇOS
    // =========================

    const cardsServicos = document.querySelectorAll(".card");

    cardsServicos.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });

    });

    // =========================
    // BOTÕES DE ORÇAMENTO
    // =========================

    const botoes = document.querySelectorAll(".btn-primary");

    botoes.forEach(botao => {

        if (
            botao.textContent.includes("Orçamento") ||
            botao.textContent.includes("Contratar")
        ) {

            botao.addEventListener("click", () => {

                alert(
                    "Obrigado pelo interesse! Entre em contato pelo WhatsApp para solicitar seu orçamento."
                );

            });

        }

    });

    // =========================
    // FORMULÁRIO DE CONTATO
    // =========================

    const formulario = document.querySelector("form");

    if (formulario) {

        formulario.addEventListener("submit", (evento) => {

            evento.preventDefault();

            alert(
                "Mensagem enviada com sucesso! Entraremos em contato em breve."
            );

            formulario.reset();

        });

    }

    // =========================
    // ROLAGEM SUAVE
    // =========================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const destino =
                document.querySelector(this.getAttribute("href"));

            if (destino) {

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    // =========================
    // ANIMAÇÃO AO ROLAR
    // =========================

    const elementos =
        document.querySelectorAll("section, .card");

    const observador =
        new IntersectionObserver((entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("fade-in");

                }

            });

        }, {
            threshold: 0.2
        });

    elementos.forEach((elemento) => {
        observador.observe(elemento);
    });

    // =========================
    // ANO AUTOMÁTICO
    // =========================

    const anoAtual = new Date().getFullYear();

    const rodape =
        document.querySelector("footer p");

    if (rodape) {

        rodape.innerHTML =
            `© ${anoAtual} Reconhecimento Local Web. Todos os direitos reservados.`;

    }

});