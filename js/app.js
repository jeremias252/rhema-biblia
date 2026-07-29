 <script>
        // ================= SISTEMA DE LOGIN =================
        const SENHA_CORRETA = "rhema"; 
        function fazerLogin() {
            let senha = document.getElementById('senha-login').value;
            if(senha === SENHA_CORRETA) {
                document.getElementById('login-screen').style.opacity = '0';
                setTimeout(() => { document.getElementById('login-screen').style.display = 'none'; }, 800);
            } else { alert("Acesso Negado."); document.getElementById('senha-login').value = ""; }
        }
        function verificarEnter(e) { if (e.key === 'Enter') fazerLogin(); }

        // ================= CONFIGURAÇÕES =================
        window.onload = () => {
            let keySalva = localStorage.getItem('groq_key_biblia');
            if(keySalva) document.getElementById('api-key').value = keySalva;
            
            // Configurar Marked.js
            marked.setOptions({ breaks: true });
        }
        function abrirConfig() { document.getElementById('modal-config').style.display = 'flex'; }
        function fecharConfig() { document.getElementById('modal-config').style.display = 'none'; }
        function salvarConfig() { localStorage.setItem('groq_key_biblia', document.getElementById('api-key').value); fecharConfig(); }

        // ================= SIDEBAR E NAVEGAÇÃO =================
        const sidebar = document.getElementById('sidebar');
        const mainWrapper = document.getElementById('main-wrapper');
        
        function toggleSidebar() {
            if(window.innerWidth <= 900) { sidebar.classList.toggle('mobile-open'); } 
            else { sidebar.classList.toggle('closed'); mainWrapper.classList.toggle('expanded'); }
        }

        function esconderTudo() {
            document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
            document.getElementById('menu-resultados-estudo').style.display = 'none';
            document.getElementById('menu-resultados-simples').style.display = 'none';
            document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));
            if(window.innerWidth <= 900) sidebar.classList.remove('mobile-open');
        }

        function mostrarFerramenta(nome) {
            esconderTudo();
            document.getElementById(`view-${nome}`).classList.add('active');
            document.getElementById(`nav-tool-${nome}`).classList.add('active');
            let titulos = { 'estudo': 'Tratado Exegético', 'personagem': 'Dossiê Biográfico', 'livros': 'Resenha Literária' };
            document.getElementById('topbar-title').innerText = titulos[nome];
        }

        function mostrarAbaEstudo(aba) {
            document.getElementById('view-estudo').classList.remove('active');
            document.getElementById('view-leitura').classList.add('active');
            document.querySelectorAll('.reader-content').forEach(r => r.classList.remove('active'));
            document.getElementById(`reader-${aba}`).classList.add('active');
            document.querySelectorAll('.menu-result-link').forEach(l => l.classList.remove('active'));
            document.getElementById(`nav-res-${aba}`).classList.add('active');
            if(window.innerWidth <= 900) sidebar.classList.remove('mobile-open');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function mostrarAbaSimples() {
            document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
            document.getElementById('view-leitura').classList.add('active');
            document.querySelectorAll('.reader-content').forEach(r => r.classList.remove('active'));
            document.getElementById('reader-simples').classList.add('active');
            if(window.innerWidth <= 900) sidebar.classList.remove('mobile-open');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // ================= BÍBLIA =================
        const vt = ["Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio", "Josué", "Juízes", "Rute", "1 Samuel", "2 Samuel", "1 Reis", "2 Reis", "1 Crônicas", "2 Crônicas", "Esdras", "Neemias", "Ester", "Jó", "Salmos", "Provérbios", "Eclesiastes", "Cânticos", "Isaías", "Jeremias", "Lamentações", "Ezequiel", "Daniel", "Oseias", "Joel", "Amós", "Obadias", "Jonas", "Miqueias", "Naum", "Habacuque", "Sofonias", "Ageu", "Zacarias", "Malaquias"];
        const nt = ["Mateus", "Marcos", "Lucas", "João", "Atos", "Romanos", "1 Coríntios", "2 Coríntios", "Gálatas", "Efésios", "Filipenses", "Colossenses", "1 Tessalonicenses", "2 Tessalonicenses", "1 Timóteo", "2 Timóteo", "Tito", "Filemom", "Hebreus", "Tiago", "1 Pedro", "2 Pedro", "1 João", "2 João", "3 João", "Judas", "Apocalipse"];
        let navState = { livro: "", capitulo: "" };

        function renderizarBibliaInit() {
            document.getElementById('grid-vt').innerHTML = vt.map(l => `<button class="biblia-btn" onclick="selecionarLivro('${l}')">${l}</button>`).join('');
            document.getElementById('grid-nt').innerHTML = nt.map(l => `<button class="biblia-btn" onclick="selecionarLivro('${l}')">${l}</button>`).join('');
        }
        renderizarBibliaInit();

        function abrirBiblia() {
            navState = { livro: "", capitulo: "" };
            document.getElementById('view-livros-biblia').style.display = 'block';
            document.getElementById('view-numeros').style.display = 'none';
            document.getElementById('modal-biblia-title').innerText = "Selecione o Livro";
            document.getElementById('modal-biblia').style.display = 'flex';
        }
        function fecharBiblia() { document.getElementById('modal-biblia').style.display = 'none'; }

        function selecionarLivro(livro) {
            navState.livro = livro;
            document.getElementById('view-livros-biblia').style.display = 'none';
            let numGrid = document.getElementById('view-numeros');
            numGrid.style.display = 'grid';
            let maxCap = livro === "Salmos" ? 150 : (livro === "Obadias" || livro === "Filemom" || livro === "2 João" || livro === "3 João" || livro === "Judas" ? 1 : 66);
            let html = `<button class="num-btn wide" onclick="finalizarSelecaoBiblia('${livro}')">Livro Completo</button>`;
            for(let i=1; i<=maxCap; i++) html += `<button class="num-btn" onclick="selecionarCapitulo(${i})">${i}</button>`;
            numGrid.innerHTML = html;
            document.getElementById('modal-biblia-title').innerText = `${livro} - Capítulos`;
        }

        function selecionarCapitulo(capitulo) {
            navState.capitulo = capitulo;
            let numGrid = document.getElementById('view-numeros');
            let html = `<button class="num-btn wide" onclick="finalizarSelecaoBiblia('${navState.livro} ${navState.capitulo}')">Capítulo Completo</button>`;
            for(let i=1; i<=176; i++) html += `<button class="num-btn" onclick="finalizarSelecaoBiblia('${navState.livro} ${navState.capitulo}:${i}')">${i}</button>`;
            numGrid.innerHTML = html;
            document.getElementById('modal-biblia-title').innerText = `${navState.livro} ${capitulo} - Versículos`;
        }
        function finalizarSelecaoBiblia(ref) { document.getElementById('texto-biblico').value = ref; fecharBiblia(); }


        // ================= MOTOR NÚCLEO GROQ =================
        let estadoConteudo = {}; 

        async function invocarInteligencia(promptSistema, promptUsuario, loadingMsg) {
            let key = document.getElementById('api-key').value.trim();
            if(!key || !key.startsWith('gsk_')) { 
                alert('Acesso Negado: Insira a Chave da Groq na Engrenagem ⚙️'); 
                return null; 
            }

            document.getElementById('loading').style.display = 'block';
            document.getElementById('loading-txt').innerText = loadingMsg;
            document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));

            try {
                let response = await fetch(`https://api.groq.com/openai/v1/chat/completions`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
                    body: JSON.stringify({
                        model: "llama-3.3-70b-versatile",
                        messages: [
                            { role: "system", content: promptSistema }, 
                            { role: "user", content: promptUsuario }
                        ],
                        temperature: 0.6,
                        max_tokens: 6500
                    })
                });

                let data = await response.json();
                if (data.error) throw new Error(data.error.message);

                document.getElementById('loading').style.display = 'none';
                return data.choices[0].message.content; 
                
            } catch (e) {
                alert('Falha na conexão: ' + e.message);
                document.getElementById('loading').style.display = 'none';
                return null;
            }
        }

        // ================= FUNÇÕES DE GERAÇÃO =================

        // 1. TRATADO 
        async function gerarEstudoElite() {
            let texto = document.getElementById('texto-biblico').value.trim();
            let enfase = document.getElementById('enfase').value;
            if(!texto) return alert('Selecione um texto bíblico primeiro.');

            const sys = `Você é um Teólogo. Escreva um Tratado Profundo formatado em Markdown.
OBRIGATÓRIO: Você DEVE separar as 5 seções usando a exata linha "===SEPARADOR===" entre elas. A ordem é: Contexto Histórico ===SEPARADOR=== Análise de Originais ===SEPARADOR=== Esboço Homilético ===SEPARADOR=== Aplicação Pastoral ===SEPARADOR=== Teologia Sistemática`;
            
            let resultadoCru = await invocarInteligencia(sys, `Ref: "${texto}"\nÊnfase: ${enfase}`, "Escrevendo Manuscrito...");
            if(resultadoCru) {
                let partes = resultadoCru.split('===SEPARADOR===');
                if(partes.length < 5) partes = [resultadoCru, "Não gerado.", "Não gerado.", "Não gerado.", "Não gerado."];

                estadoConteudo = {
                    tipo: "ESTUDO", hermeneutica: partes[0].trim(), exegese: partes[1].trim(),
                    esboco: partes[2].trim(), ilustracao: partes[3].trim(), teologia: partes[4].trim()
                };
                
                document.getElementById('res-hermeneutica').innerHTML = "<h1>Contexto Histórico</h1>" + marked.parse(estadoConteudo.hermeneutica);
                document.getElementById('res-exegese').innerHTML = "<h1>Análise de Originais</h1>" + marked.parse(estadoConteudo.exegese);
                document.getElementById('res-esboco').innerHTML = "<h1>Esboço Expositivo</h1>" + marked.parse(estadoConteudo.esboco);
                document.getElementById('res-ilustracao').innerHTML = "<h1>Aplicação Pastoral</h1>" + marked.parse(estadoConteudo.ilustracao);
                document.getElementById('res-teologia').innerHTML = "<h1>Teologia Sistemática</h1>" + marked.parse(estadoConteudo.teologia);
                
                document.getElementById('menu-resultados-simples').style.display = 'none';
                document.getElementById('menu-resultados-estudo').style.display = 'block';
                mostrarAbaEstudo('hermeneutica');
            }
        }

        // 2. PERSONAGEM
        async function gerarPersonagem() {
            let personagem = document.getElementById('texto-personagem').value.trim();
            if(!personagem) return alert('Digite o nome do personagem.');

            const sys = `Você é um historiador teológico. Escreva um Dossiê profundo sobre o personagem em formato Markdown (Use H2 ## para títulos). Inclua Biografia, Traços Psicológicos, Falhas/Vitórias e Tipologia Cristã.`;

            let resultadoCru = await invocarInteligencia(sys, `Personagem: ${personagem}`, `Mapeando Biografia...`);
            if(resultadoCru) {
                estadoConteudo = { tipo: "SIMPLES", textoOriginal: resultadoCru }; 
                document.getElementById('res-simples').innerHTML = `<h1>Dossiê: ${personagem}</h1>` + marked.parse(resultadoCru);
                document.getElementById('menu-resultados-estudo').style.display = 'none';
                document.getElementById('menu-resultados-simples').style.display = 'block';
                mostrarAbaSimples();
            }
        }

        // 3. LIVROS (COM LINKS EXTERNOS)
        async function gerarLivros() {
            let tema = document.getElementById('texto-livros').value.trim();
            if(!tema) return alert('Digite o personagem ou tema para buscar as obras.');
            
            const sys = `Atue como curador literário teológico. 
SUA TAREFA: Selecione de 4 a 6 livros teológicos famosos sobre o assunto.
REGRAS OBRIGATÓRIAS:
1. Escreva o título do livro EXATAMENTE como um Link Markdown que faça uma busca real.
Exemplo: [**Institutas da Religião Cristã**](https://www.google.com/search?tbm=bks&q=Institutas+da+Religião+Cristã+Calvino)
Exemplo 2: [**O Custo do Discipulado**](https://www.google.com/search?tbm=bks&q=O+Custo+do+Discipulado+Dietrich+Bonhoeffer)
2. Após o link, escreva o nome do autor e um resumo denso sobre a obra. Use Markdown livre. Não crie tabelas.`;

            let resultadoCru = await invocarInteligencia(sys, `Recomende livros sobre: ${tema}`, "Curadoria de Obras Literárias...");
            if(resultadoCru) {
                estadoConteudo = { tipo: "SIMPLES", textoOriginal: resultadoCru }; 
                
                // Converte markdown para HTML
                document.getElementById('res-simples').innerHTML = `<h1>Resenha Literária</h1>` + marked.parse(resultadoCru);
                
                // Pós-processamento para garantir que os links abram em uma NOVA ABA
                document.querySelectorAll('#res-simples a').forEach(link => {
                    link.setAttribute('target', '_blank');
                    link.setAttribute('rel', 'noopener noreferrer');
                });

                document.getElementById('menu-resultados-estudo').style.display = 'none';
                document.getElementById('menu-resultados-simples').style.display = 'block';
                mostrarAbaSimples();
            }
        }

        // ================= EXPORTAÇÃO (WHATSAPP E PDF) =================
        function copiarWhatsApp() {
            let txt = "";
            if (estadoConteudo.tipo === "ESTUDO") {
                txt = `*🎓 TRATADO BETHESDA:*\n\n*📜 1. CONTEXTO:*\n${estadoConteudo.hermeneutica}\n\n*🔍 2. ORIGINAIS:*\n${estadoConteudo.exegese}\n\n*🔥 3. ESBOÇO:*\n${estadoConteudo.esboco}\n\n*💡 4. APLICAÇÃO:*\n${estadoConteudo.ilustracao}\n\n*📚 5. SISTEMÁTICA:*\n${estadoConteudo.teologia}`;
            } else { txt = `*DOCUMENTO BETHESDA:*\n\n${estadoConteudo.textoOriginal}`; }
            
            // Remove hashtags markdown para whatsapp
            txt = txt.replace(/### /g, '').replace(/## /g, '').replace(/# /g, '');
            // Formata links [Nome](url) para Nome (url) para ficar legível no whatsapp
            txt = txt.replace(/\[\*\*(.*?)\*\*\]\((.*?)\)/g, '*$1* ($2)');
            txt = txt.replace(/\[(.*?)\]\((.*?)\)/g, '$1 ($2)');
            
            navigator.clipboard.writeText(txt); alert('Manuscrito copiado para o WhatsApp!');
        }

        function baixarPDF() {
            if(!estadoConteudo.tipo) return;
            const { jsPDF } = window.jspdf; const doc = new jsPDF({ format: 'a4' });
            
            doc.setFillColor(249, 248, 246); doc.rect(0, 0, 210, 30, 'F');
            doc.setTextColor(181, 129, 80); doc.setFontSize(18); doc.text("BETHESDA ALABASTER", 15, 20);
            let y = 40;

            function printSessao(titulo, textoMd) {
                if(!textoMd) return;
                if(y > 260) { doc.addPage(); y = 20; }
                
                doc.setFont("helvetica", "bold"); doc.setTextColor(139, 90, 51); doc.setFontSize(14);
                doc.text(titulo, 15, y); y += 8;
                
                doc.setFont("helvetica", "normal"); doc.setTextColor(60, 60, 60); doc.setFontSize(11);
                
                let txtLimpo = textoMd.replace(/\*\*/g, '').replace(/\*/g, '').replace(/#/g, '');
                txtLimpo = txtLimpo.replace(/\[(.*?)\]\((.*?)\)/g, '$1'); // Limpa os links do PDF para ficar legível
                
                let linhas = doc.splitTextToSize(txtLimpo, 180);
                
                for(let i=0; i<linhas.length; i++) { 
                    if (y > 280) { doc.addPage(); y = 20; } 
                    doc.text(linhas[i], 15, y); y += 6; 
                }
                y += 10;
            }

            if(estadoConteudo.tipo === "ESTUDO") {
                printSessao("CONTEXTO HISTÓRICO", estadoConteudo.hermeneutica);
                printSessao("ANÁLISE DE ORIGINAIS", estadoConteudo.exegese);
                printSessao("ESBOÇO HOMILÉTICO", estadoConteudo.esboco);
                printSessao("APLICAÇÃO PASTORAL", estadoConteudo.ilustracao);
                printSessao("TEOLOGIA SISTEMÁTICA", estadoConteudo.teologia);
            } else { printSessao("DOCUMENTO COMPLETO", estadoConteudo.textoOriginal); }
            doc.save(`Bethesda_Manuscrito.pdf`);
        }
    </script>
