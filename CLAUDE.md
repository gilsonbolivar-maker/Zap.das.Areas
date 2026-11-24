# Zap das Áreas — regras do repositório

Um repositório, várias áreas (410, 170, 160). Cada área é uma cópia independente do Zap220 (repositório 220Sinal), na sua própria pasta. **Nunca misturar áreas.**

## Estrutura de cada área (exemplo: 410)
- `410/painel/` = Zap410 (painel do Gilson, quem chama). Código em `410/painel/app.js` e `app.css`.
- `410/aa410/` = AA410 (app dos colegas, quem recebe). Carrega `../painel/app.js`.
- Guarda tudo com prefixo `410-`, caches `zap410-…` e tópicos `app-zap410/`.
- Os botões de pedido da área ficam em `PEDIDOS` no `app.js` da área.

## Versão (por área)
- A versão aparece ao lado do título.
- `const VERSAO` em `<área>/painel/app.js`, `<área>/painel/sw.js` e `<área>/aa<área>/sw.js`, com o mesmo valor.
- Toda mudança sobe a versão no mesmo commit: correção → último número; recurso novo → do meio; mudança grande → primeiro.

## Android
- `<área>/painel/android`, workflow `.github/workflows/apk-<área>.yml`, release `<área>-apk`.
- `Cifra.PREFIXO` precisa casar com o `PREFIXO` do `app.js` da área.
- Para publicar os APKs, o repositório precisa dos segredos `SINAL_ASSINATURA` e `SINAL_SENHA` (os mesmos do 220Sinal), em Settings → Secrets and variables → Actions.

## Seletor de arquivo
Não use `accept=".json,…"` em `<input type="file">`: no iPad ele deixa os arquivos cinza.
