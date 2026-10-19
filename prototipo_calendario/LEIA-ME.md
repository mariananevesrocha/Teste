# Protótipo — Calendário Integrado de Treinamentos e Eventos

**Dados 100% fictícios.** Serve para validar a ideia com as áreas antes de ligar as fontes reais.

## Arquivos
- `calendario_integrado.html` — dê duplo clique; abre no navegador, sem instalar nada.
- `tabela_mestra_calendario.xlsx` — mesma base em Excel (1 linha = 1 pessoa em 1 evento; chave = matrícula).

## Roteiro de demo (≈10 min)
1. **Calendário** — clique em 20/11: dois eventos para as mesmas pessoas (⚠️). Filtre por pessoa (ex.: Diego Alves) e veja a escala (bordo/folga) sombreada.
2. **Alertas** — 6 colisões detectadas automaticamente (dois eventos no mesmo dia; evento em terra com a pessoa escalada a bordo).
3. **Folha** — quem treinou na folga, com exportação em CSV para o DP.
4. **Assistente** — marque a turma C, duração de 3 dias, "em terra": sugere as primeiras datas livres para todos e mostra o impacto na folha.
5. **Fontes e roadmap** — o que entra até 16/11 e o que fica para a fase 2.

## Regras usadas (v0)
- Escala fictícia 14x14 por turma (A–D), só para demonstração; a real virá do STAR.
- "Treino na folga" = evento fora de `Bordo` num dia de folga da pessoa.
- Colisão = dois eventos no mesmo dia, ou evento fora de `Bordo` em dia de embarque.

## Trocar pelos dados reais
Edite o bloco `const DADOS = {...}` no início do `<script>` do HTML (pessoas e eventos), seguindo o formato da planilha.
