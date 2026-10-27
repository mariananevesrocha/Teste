# Design System · Programa de Estágio PRIO 2027

Conceito: **Atitude para ir além**. Planta técnica (blueprint) azul elétrico, verde neon, título gigante e comprimido, selo e polvo.

## Como usar
```tsx
import { PrioRoot, Stage, Lockup, Sticker, Button, Card, Steps } from "design-system";

<PrioRoot>
  <Stage>
    <Lockup />
    <Button variant="outline">Inscrições <b>abertas!</b></Button>
    <Sticker year="2027" />
  </Stage>
</PrioRoot>
```

## Regras de marca
- Cores: 80% azul, 15% verde neon, 5% branco. O verde nunca é fundo de tela inteira. Texto sobre verde usa `ink` (#040846).
- Tipografia (extraída das artes do Estágio 2027): uma família grotesca com eixos de largura/peso/itálico. ESTÁGIO = extra condensada preta · PROGRAMA DE = extensa itálica · 2027 = condensada fina itálica · INSCRIÇÕES **ABERTAS!** = extensa fina + preta. Títulos têm distorção em perspectiva (`.warp-title`) e textura de papel (`.paper-lime`). Implementada com Archivo; troque `--font-family-campanha` se o time de marca informar a fonte original.
- Um único destaque verde sólido por composição.
- Voz: frases curtas, imperativo, fala com a pessoa candidata ("Inscreva-se", "Vá além").
- Ícones de polvo e plataforma em `Icons.tsx` são provisórios: troque pelos SVGs oficiais.

## Sincronizar com o Claude Design
```bash
cd caminho/para/design-system
claude
> /design-sync
```
Digite `/design-sync` manualmente. Pedir para o Claude executar não funciona.
