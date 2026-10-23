# Contexto do projeto

## Quem sou eu
Estagiária de Pessoas (Desenvolvimento e Atração & Seleção) numa empresa de petróleo e gás com operações offshore (plataformas/FPSOs). Não sou desenvolvedora. Prefiro código simples, comentado em português, fácil de alterar. Prazo de entrega: 16/11. Tenho pouco tempo, então prefira soluções simples a soluções elegantes.

## O problema
Treinamentos, escalas de embarque, ASO e eventos ficam em planilhas e sistemas separados. Consequências:
- áreas diferentes convocam o mesmo colaborador em datas seguidas;
- o time de bordo não sabe onde o colaborador está nem o motivo;
- a Folha só descobre depois quem treinou na folga.

## O objetivo
Criar um calendário integrado: uma base única com todos os treinamentos/eventos e quem participa de cada um, com:
1. calendário filtrável (pessoa, ativo, frente, tipo, local);
2. alerta de colisão: mesma pessoa em dois eventos no mesmo dia, ou evento em terra enquanto a pessoa está escalada a bordo;
3. relatório "treino na folga" para a Folha/DP: evento fora de bordo em dia de folga da pessoa;
4. assistente de datas: dado um grupo de pessoas, sugerir janelas em que todas estão livres.

## Fontes de dados
- GT (gestão de treinamentos): planilha do time de treinamentos. [descreva as colunas]
- STAR (escala): export do time de planejamento. [descreva as colunas]
- Calendário de embarque (Prontidão de Embarque), ASO (Saúde Ocupacional), eventos corporativos (Comunicação, Saúde e Bem-estar).
- Chave comum entre todas as fontes: **matrícula** (sempre texto, preservar zeros à esquerda).

## Vocabulário
- Ativo = unidade/plataforma onde a pessoa trabalha.
- Frente = área/função.
- Bordo = a pessoa está embarcada. Folga = período de descanso após o embarque (escala tipo 14x14).
- Evento "em terra" = qualquer um com local diferente de Bordo (escola, escritório, remoto, clínica).
- Tipos de evento: Regulatório, Desenvolvimento, Evento, ASO.

## Formato da tabela mestra (1 linha = 1 pessoa em 1 evento)
Matricula | Nome | Ativo | Frente | Titulo_Evento | Tipo | Data_Inicio | Data_Fim | Local | Origem_Dado

## Regras do projeto
- NUNCA inventar dados. O que faltar fica vazio e é registrado como problema.
- Dados reais de pessoas ficam só na minha máquina; não os envie para serviços externos.
- Cada etapa deve mostrar quantas linhas entraram e quantas saíram.
- Mensagens de erro claras, em português.
- Mudanças pequenas e testáveis; explique o que mudou.

## Protótipo existente
`prototipo_calendario/calendario_integrado.html` (dados fictícios) mostra o resultado final esperado. O bloco `const DADOS` nele é o formato de referência.
