# Nóli — ateliê de cerâmica fria

Vitrine/portfólio da Nóli em estilo Pinterest. Site estático (HTML, CSS e JS puros), pronto para GitHub Pages.

## Editar

Tudo que muda com frequência está em **`js/pecas.js`**:

- `NOLI.whatsapp` — número com DDI + DDD, só dígitos (ex.: `5511987654321`). Enquanto estiver zerado, os botões de encomenda abrem o Instagram.
- `PECAS` — as peças. Para adicionar uma: coloque a foto em `assets/pecas/` e copie um bloco.
- `preco: 0` mostra "Sob consulta".
- `NOTAS` — os cartões de texto misturados no mural.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `noli`) e envie esta pasta.
2. No repositório: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Em 1–2 minutos o site fica em `https://SEU-USUARIO.github.io/noli/`.

## Ver no computador

```
python -m http.server 5173
```
e abra http://127.0.0.1:5173
