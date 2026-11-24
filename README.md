# Zap das Áreas
Comunicação das áreas 410, 170 e 160. Cada área tem a sua pasta e o seu app, sem misturar.

## Zap Painel
- `painel/` — **Zap Painel**: o Zap220 (Oficina/220Sinal) e o Zap410 em abas, cada um no seu quadro (iframe), sem misturar dados. Quando chega alarme numa aba escondida, o painel pula para ela.
- https://gilsonbolivar-maker.github.io/Zap.das.Areas/painel/

## Área 410
- `410/painel/` — **Zap410**, o painel do Gilson (lado que chama). O código mora em `410/painel/app.js`.
- `410/aa410/` — **AA410**, o app dos colegas (lado que recebe). Carrega `../painel/app.js`.
- `410/painel/android/` — os APKs `aa410.apk` e `zap410.apk` (workflow `apk-410.yml`).

Endereços (GitHub Pages):
- https://gilsonbolivar-maker.github.io/Zap.das.Areas/410/painel/
- https://gilsonbolivar-maker.github.io/Zap.das.Areas/410/aa410/

## Próximas áreas
170 e 160: mesma receita, cada uma na sua pasta (`170/`, `160/`).
