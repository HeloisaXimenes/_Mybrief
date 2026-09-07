# Percepta — Landing Page (Teste Prático)

## Projeto

Landing page da Percepta desenvolvida como teste prático de front-end, a partir do layout
disponibilizado no Figma ("LP Percepta - Teste prático"). O objetivo do teste não é reproduzir um
ambiente de produção completo, e sim demonstrar a capacidade de transformar um layout do Figma em
uma interface web funcional, fiel, responsiva, acessível e bem organizada — priorizando fidelidade
visual sobre liberdade criativa.

## Tecnologias

- React 19
- Vite 8
- TypeScript
- Tailwind CSS 4 (tema via `@theme` em `src/index.css`, sem plugins adicionais)
- HTML semântico (`header`, `nav`-like, `main`, `section`, `footer`)
- Google Fonts (Poppins para títulos, Inter para corpo de texto)

Nenhuma biblioteca de UI, roteamento, gerenciamento de estado ou ícones foi adicionada: os ícones
(WhatsApp, telefone, email, site, logo, seta de menu) são SVGs inline, e a única interatividade de
estado (menu mobile, tabs, formulário) usa `useState` do próprio React.

## Como executar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

O build gera a pasta `dist/` e foi validado sem erros de compilação (TypeScript + Vite).

## Decisões técnicas

1. **Fotos reais extraídas do design, não stock photos.** Todas as fotos usadas (fachada de loja,
   estoque, guarita, cliente circulando, recepção, etc.) foram recortadas diretamente do arquivo
   Figma e reexportadas como JPEG otimizado (~90 KB em média, contra vários MB em PNG sem
   compressão), preservando a proporção e o conteúdo original em vez de substituir por imagens
   genéricas.

2. **Textura decorativa do hero recriada em CSS.** O único elemento visual não extraído como
   imagem foi o padrão de grade/câmeras sutil ao fundo do hero — um elemento puramente decorativo
   e de baixíssimo contraste. Foi recriado com um `repeating-linear-gradient` leve em vez de uma
   imagem pesada, priorizando performance sem perda perceptível de fidelidade.

3. **Composição reutilizável para os blocos de funcionalidade.** Os 4 blocos "foto + alerta +
   texto" compartilham um componente `AnnotatedMedia` (foto + toast de notificação + caixa de
   recap opcional) e um `FeatureBlock` (grid de duas colunas responsivo), mas o conteúdo textual de
   cada bloco é escrito diretamente em JSX no lugar de uma camada de dados genérica — o texto é
   único demais em cada bloco para justificar essa abstração extra.

4. **Duas interações reais implementadas.** (a) Menu mobile com abertura/fechamento, overlay em
   tela cheia, fechamento ao clicar em item e bloqueio de scroll do body; (b) tabs da seção "o
   dinheiro não some de uma vez" com estado controlado em React e `role="tablist"`/`tabpanel`
   reais. Além disso, não foi implementado backend ou banco de dados para o recebimento e armazenamento
   das informações enviadas pelo formulário de contato. O formulário de contato, utilizado em duas seções da página,
   possui validação completa no lado do cliente (client-side), incluindo validação de nome, e-mail, telefone e aceite dos termos.
   Também foram implementadas mensagens de erro específicas por campo e um estado de sucesso após o envio.

## Adaptações de conteúdo

- No design, o toast "Alerta!" aparece sobreposto ao canto da foto no primeiro bloco de
  funcionalidade, mas empilhado abaixo da foto nos outros três. Para manter o layout responsivo
  simples e consistente, padronizei o toast **sempre abaixo da foto** nos quatro blocos.
- O logo da Percepta (círculo verde + ícone) foi recriado como SVG inline (não extraído como
  imagem), para ficar nítido em qualquer tamanho (header, footer, menu mobile, favicon) com peso
  mínimo.

## Uso de Inteligência Artificial

A IA (Claude/Claude Code) foi usada como ferramenta de apoio no desenvolvimento: 
Na estruturação inicial do projeto (Vite + Tailwind + componentização) e na verificação visual — 
o app foi de fato executado localmente (via `npm run dev`) e inspecionado em capturas de tela em múltiplas larguras (320,
375, 390, 768, 800, 1024, 1440px) para validar responsividade, ausência de overflow horizontal e
funcionamento das interações (menu mobile, tabs, validação de formulário).

Dois problemas reais foram encontrados nessa verificação e corrigidos manualmente: (1) um conflito
de classes Tailwind (`hidden` + `inline-flex` no mesmo elemento) que fazia o botão de desktop
aparecer também no mobile, e (2) um seletor `[&_span]:text-brand` largo demais que pintava de
verde todo o texto das abas em vez de só a seta. Toda a fidelidade visual em relação ao Figma
(cores, tipografia, espaçamento, textos) foi conferida manualmente comparando os recortes do
design original com o resultado renderizado.

## Tempo de desenvolvimento

**Tempo total de desenvolvimento:** 14:00 - 16:00 (2 horas)
