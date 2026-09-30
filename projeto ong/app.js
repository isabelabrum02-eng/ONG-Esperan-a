import {
    nomeONG,
    mensagemAjuda,
    mensagemCadastro
} from "./dados.js";

const app = document.getElementById("app");

function inicio() {
    app.innerHTML = `
        <section class="hero">
            <div class="hero-text">
                <span class="tag">Transformando vidas</span>
                <h2>${nomeONG}: construindo esperança e oportunidade.</h2>
                <p>
                    A ONG Esperança atua com educação, acolhimento social e ações comunitárias
                    para fortalecer pessoas em situação de vulnerabilidade.
                </p>
                <div class="hero-actions">
                    <a href="#cadastro" class="button primary">Seja voluntário</a>
                    <a href="#projetos" class="button secondary">Conhecer projetos</a>
                </div>
            </div>

            <div class="hero-image">
                <img src="imagens/ong.jpg" alt="Voluntários da ONG realizando uma ação social">
            </div>
        </section>

        <section class="info-grid">
            <article class="info-card">
                <h3>Como você pode ajudar</h3>
                <p>Seu apoio pode fazer diferença através de voluntariado, doações ou divulgação.</p>
                <ul>
                    <li>Seja voluntário</li>
                    <li>Faça uma doação</li>
                    <li>Divulgue nossas ações</li>
                </ul>
                <button id="botaoAjuda" class="button primary">Quero ajudar</button>
                <div id="feedback" class="feedback-box"></div>
            </article>

            <article class="info-card">
                <h3>Quem somos</h3>
                <p>
                    Somos uma organização sem fins lucrativos que promove inclusão social,
                    educação e cidadania em comunidades que precisam de acolhimento.
                </p>
            </article>
        </section>

        <section class="mission">
            <h3>Nossa missão</h3>
            <p>
                Promover o desenvolvimento humano e social, fortalecendo a solidariedade,
                a dignidade e as oportunidades para todos.
            </p>
        </section>

        <section class="contact-card">
            <h3>Entre em contato</h3>
            <p><strong>E-mail:</strong> contato@ongesparanca.org.br</p>
            <p><strong>Telefone:</strong> (11) 99999-9999</p>
            <p><strong>Local:</strong> São Paulo - SP</p>
        </section>
    `;

    const botaoAjuda = document.getElementById("botaoAjuda");
    const feedback = document.getElementById("feedback");

    botaoAjuda.addEventListener("click", () => {
        feedback.innerHTML = `<p class="success">${mensagemAjuda}</p>`;
    });
}

function projetos() {
    app.innerHTML = `
        <section class="page-header">
            <span class="tag">Projetos ativos</span>
            <h2>Nossos projetos</h2>
        </section>

        <section class="project-grid">
            <article class="project-card">
                <span class="badge">Educação</span>
                <h3>Educação para todos</h3>
                <p>Oferecemos apoio escolar, reforço pedagógico e acesso a atividades educativas.</p>
            </article>

            <article class="project-card">
                <span class="badge">Alimentos</span>
                <h3>Campanha de alimentos</h3>
                <p>Arrecadamos e distribuímos alimentos para famílias em situação de vulnerabilidade.</p>
            </article>

            <article class="project-card">
                <span class="badge">Comunidade</span>
                <h3>Ações comunitárias</h3>
                <p>Promovemos atividades culturais, sociais e de acolhimento para fortalecer a comunidade.</p>
            </article>
        </section>

        <section class="callout">
            <h3>Você pode ajudar agora</h3>
            <p>Seu apoio permite ampliar atividades e acompanhar mais famílias com dignidade.</p>
            <button id="botaoProjeto" class="button primary">Quero ajudar</button>
            <div id="feedbackProjeto" class="feedback-box"></div>
        </section>
    `;

    const botaoProjeto = document.getElementById("botaoProjeto");
    const feedbackProjeto = document.getElementById("feedbackProjeto");

    botaoProjeto.addEventListener("click", () => {
        feedbackProjeto.innerHTML = `<p class="success">${mensagemAjuda}</p>`;
    });
}

function cadastro() {
    const cadastroSalvo = localStorage.getItem("cadastroONG");
    let dadosSalvos = null;

    if (cadastroSalvo) {
        dadosSalvos = JSON.parse(cadastroSalvo);
    }

    app.innerHTML = `
        <section class="form-section">
            <h2>Cadastro de voluntário</h2>
            <p>Preencha seus dados para participar das ações da ${nomeONG}.</p>

            <form id="formCadastro" class="form-card">
                <div class="campo">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" placeholder="Digite seu nome" required>
                </div>

                <div class="campo">
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" required>
                </div>

                <div class="campo">
                    <label for="telefone">Telefone:</label>
                    <input type="tel" id="telefone" placeholder="(11) 99999-9999">
                </div>

                <div class="campo">
                    <label for="interesse">Interesse:</label>
                    <select id="interesse" required>
                        <option value="">Selecione</option>
                        <option value="voluntario">Voluntariado</option>
                        <option value="doacao">Doação</option>
                        <option value="divulgacao">Divulgação</option>
                    </select>
                </div>

                <button type="submit" class="button primary">Cadastrar</button>
                <div id="mensagemCadastro" class="feedback-box"></div>
            </form>
        </section>
    `;

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const interesse = document.getElementById("interesse");
    const mensagem = document.getElementById("mensagemCadastro");

    if (dadosSalvos) {
        nome.value = dadosSalvos.nome || "";
        email.value = dadosSalvos.email || "";
        telefone.value = dadosSalvos.telefone || "";
        interesse.value = dadosSalvos.interesse || "";
    }

    document.getElementById("formCadastro").addEventListener("submit", (event) => {
        event.preventDefault();

        nome.classList.remove("erro");
        email.classList.remove("erro");
        telefone.classList.remove("erro");
        interesse.classList.remove("erro");
        mensagem.innerHTML = "";

        if (nome.value.trim() === "") {
            nome.classList.add("erro");
            mensagem.innerHTML = "<p class='error'>Por favor, informe seu nome.</p>";
            return;
        }

        if (!email.value.includes("@") || !email.value.includes(".")) {
            email.classList.add("erro");
            mensagem.innerHTML = "<p class='error'>Digite um e-mail válido.</p>";
            return;
        }

        if (telefone.value.trim().length < 10) {
            telefone.classList.add("erro");
            mensagem.innerHTML = "<p class='error'>Digite um telefone válido.</p>";
            return;
        }

        if (interesse.value === "") {
            interesse.classList.add("erro");
            mensagem.innerHTML = "<p class='error'>Selecione uma forma de ajudar.</p>";
            return;
        }

        const cadastroAtualizado = {
            nome: nome.value.trim(),
            email: email.value.trim(),
            telefone: telefone.value.trim(),
            interesse: interesse.value
        };

        localStorage.setItem("cadastroONG", JSON.stringify(cadastroAtualizado));
        mensagem.innerHTML = `<p class="success">${mensagemCadastro}</p>`;
    });
}

function navegar() {
    const pagina = window.location.hash;

    if (pagina === "#projetos") {
        projetos();
    } else if (pagina === "#cadastro") {
        cadastro();
    } else {
        inicio();
    }
}

window.addEventListener("hashchange", navegar);
navegar();