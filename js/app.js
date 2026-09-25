/* Nóli: mural estilo Pinterest */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  const CHAVE_SALVOS = 'noli:salvos';
  const estado = { categoria: 'Todas', busca: '', aba: 'pecas' };

  /* ---------- Salvos (ficam no navegador de quem visita) ---------- */
  const lerSalvos = () => {
    try { return new Set(JSON.parse(localStorage.getItem(CHAVE_SALVOS)) || []); }
    catch { return new Set(); }
  };
  let salvos = lerSalvos();
  const gravarSalvos = () => {
    try { localStorage.setItem(CHAVE_SALVOS, JSON.stringify([...salvos])); } catch {}
    const b = $('#badge-salvos');
    b.textContent = salvos.size;
    b.hidden = salvos.size === 0;
  };

  /* ---------- Utilidades ---------- */
  const norm = (t) => (t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const preco = (v) => v > 0
    ? v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    : 'Sob consulta';
  const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const linkWhats = (texto) => {
    const base = NOLI.whatsapp && !/^0+$|^550+$/.test(NOLI.whatsapp)
      ? `https://wa.me/${NOLI.whatsapp}`
      : NOLI.instagram; // sem número configurado, cai no Instagram
    return base.includes('wa.me') ? `${base}?text=${encodeURIComponent(texto)}` : base;
  };
  const msgPeca = (p, cor) =>
    `Oi, Nóli! 🌸 Vi no site e quero encomendar:\n• ${p.nome}${cor ? `\n• Cor: ${cor}` : ''}\n\nPode me passar valor e prazo?`;

  let timerToast;
  const toast = (t) => {
    const el = $('#toast');
    el.textContent = t;
    el.classList.add('is-on');
    clearTimeout(timerToast);
    timerToast = setTimeout(() => el.classList.remove('is-on'), 2200);
  };

  const ICONE_CORACAO = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.3-8.9-8.7C1.9 8.3 3.9 5 7.1 5c1.9 0 3.4 1 4.1 2.4h1.6C13.5 6 15 5 16.9 5c3.2 0 5.2 3.3 4 6.3C19 15.7 12 20 12 20Z"/></svg>';
  const ICONE_WHATS = $('.barra-app a[data-whats] svg').outerHTML;

  /* ---------- Cards ---------- */
  function cardPeca(p) {
    const salvo = salvos.has(p.id);
    const el = document.createElement('article');
    el.className = 'pin';
    el.dataset.id = p.id;
    el.innerHTML = `
      <div class="pin__img" style="--ar:${p.proporcao || '3/4'};--foco:${p.foco || 'center'}">
        <img src="${esc(p.foto)}" alt="${esc(p.nome)}" loading="lazy" decoding="async">
        <div class="pin__camada">
          <button class="btn btn--salvar ${salvo ? 'is-salvo' : ''}" data-salvar>${salvo ? 'Salvo' : 'Salvar'}</button>
          <div class="pin__rodape">
            <span class="pin__etiqueta">${esc(p.categoria)}</span>
            <a class="pin__whats" href="${linkWhats(msgPeca(p))}" target="_blank" rel="noopener" aria-label="Encomendar ${esc(p.nome)} pelo WhatsApp" data-parar>${ICONE_WHATS}</a>
          </div>
        </div>
        <button class="pin__coracao ${salvo ? 'is-salvo' : ''}" data-salvar aria-label="${salvo ? 'Remover dos salvos' : 'Salvar'}" aria-pressed="${salvo}">${ICONE_CORACAO}</button>
      </div>
      <div class="pin__info">
        <h3 class="pin__nome">${esc(p.nome)}</h3>
        <p class="pin__preco">${preco(p.preco)}</p>
      </div>`;
    el.tabIndex = 0;
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', `Ver ${p.nome}`);
    return el;
  }

  function cardNota(n) {
    const el = document.createElement('article');
    el.className = 'pin pin--nota';
    if (n.imagem) {
      el.innerHTML = `<div class="pin__img" style="--ar:${n.proporcao || '1/1'}"><img src="${esc(n.imagem)}" alt="Nóli" loading="lazy"></div>`;
      return el;
    }
    el.innerHTML = `
      <div class="pin__img" style="background:${n.fundo};color:${n.cor}">
        <span class="nota__estrela">✺</span>
        <h3>${esc(n.titulo)}</h3>
        <p>${esc(n.texto)}</p>
        ${n.acao ? `<a class="btn btn--primario nota__acao" href="${linkWhats('Oi, Nóli! Tenho uma ideia de peça personalizada: ')}" target="_blank" rel="noopener">${esc(n.acao)}</a>` : ''}
      </div>`;
    return el;
  }

  /* ---------- Filtro ---------- */
  function filtrar() {
    const q = norm(estado.busca);
    return PECAS.filter((p) => {
      if (estado.aba === 'salvos' && !salvos.has(p.id)) return false;
      if (estado.categoria !== 'Todas' && p.categoria !== estado.categoria) return false;
      if (!q) return true;
      return norm([p.nome, p.categoria, p.descricao, ...(p.tags || [])].join(' ')).includes(q);
    });
  }

  function render() {
    const mural = $('#mural');
    const lista = filtrar();
    const semFiltro = estado.aba === 'pecas' && estado.categoria === 'Todas' && !estado.busca;
    mural.replaceChildren();

    lista.forEach((p, i) => {
      mural.append(cardPeca(p));
      if (semFiltro) NOTAS.filter((n) => n.depois === i + 1).forEach((n) => mural.append(cardNota(n)));
    });

    const vazio = $('#vazio');
    vazio.hidden = lista.length > 0;
    if (!lista.length) {
      vazio.innerHTML = estado.aba === 'salvos'
        ? '<strong>Sua pasta está vazia</strong>Toque no ♥ das peças que você amar para guardar aqui.'
        : `<strong>Nada por aqui…</strong>Nenhuma peça para “${esc(estado.busca || estado.categoria)}”. Que tal pedir uma personalizada?`;
    }

    $$('[data-tab]').forEach((b) => {
      const on = b.dataset.tab === estado.aba;
      b.classList.toggle('is-active', on);
      if (b.getAttribute('role') === 'tab') b.setAttribute('aria-selected', on);
    });
    $$('.chip').forEach((c) => c.classList.toggle('is-active', c.dataset.cat === estado.categoria));
  }

  function montarChips() {
    const chips = $('#chips');
    ['Todas', ...CATEGORIAS].forEach((c) => {
      const b = document.createElement('button');
      b.className = 'chip';
      b.dataset.cat = c;
      b.textContent = c;
      b.addEventListener('click', () => { estado.categoria = c; render(); });
      chips.append(b);
    });
  }

  /* ---------- Salvar ---------- */
  function alternarSalvo(id) {
    const p = PECAS.find((x) => x.id === id);
    if (salvos.has(id)) { salvos.delete(id); toast('Removida dos salvos'); }
    else { salvos.add(id); toast(`♥ ${p.nome} salva`); }
    gravarSalvos();
    render();
    if (dlg.open && atual?.id === id) pintarBotaoSalvar();
  }

  /* ---------- Closeup ---------- */
  const dlg = $('#closeup');
  let atual = null;
  let corEscolhida = '';

  function pintarBotaoSalvar() {
    const b = $('#cu-salvar');
    const s = salvos.has(atual.id);
    b.textContent = s ? 'Salvo' : 'Salvar';
    b.classList.toggle('is-salvo', s);
  }

  function atualizarWhats() {
    $('#cu-whats').href = linkWhats(msgPeca(atual, corEscolhida));
  }

  function abrir(id, { empurrar = true } = {}) {
    const p = PECAS.find((x) => x.id === id);
    if (!p) return;
    atual = p;
    corEscolhida = p.cores?.length === 1 ? p.cores[0] : '';

    $('#cu-img').innerHTML = `<img src="${esc(p.foto)}" alt="${esc(p.nome)}">`;
    $('#cu-cat').textContent = p.categoria;
    $('#cu-titulo').textContent = p.nome;
    $('#cu-preco').textContent = preco(p.preco);
    $('#cu-desc').textContent = p.descricao;

    const wrap = $('#cu-cores-wrap');
    const cores = $('#cu-cores');
    cores.replaceChildren();
    wrap.hidden = !(p.cores && p.cores.length > 1);
    (p.cores || []).forEach((c) => {
      const b = document.createElement('button');
      b.className = 'cor';
      b.textContent = c;
      b.addEventListener('click', () => {
        corEscolhida = c;
        $$('.cor', cores).forEach((x) => x.classList.toggle('is-active', x === b));
        atualizarWhats();
      });
      cores.append(b);
    });

    const ficha = [['Material', 'Cerâmica fria selada com verniz'], ['Medidas', p.medidas], ['Prazo', p.prazo], ['Cor', p.cores?.length === 1 ? p.cores[0] : null]];
    $('#cu-ficha').innerHTML = ficha.filter(([, v]) => v).map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join('');

    pintarBotaoSalvar();
    atualizarWhats();

    // "Mais como esta": mesma categoria primeiro, depois as outras
    const mais = $('#cu-mais');
    mais.replaceChildren();
    PECAS.filter((x) => x.id !== p.id)
      .sort((a, b) => (b.categoria === p.categoria) - (a.categoria === p.categoria))
      .forEach((x) => mais.append(cardPeca(x)));

    if (!dlg.open) {
      dlg.showModal();
      document.documentElement.style.overflow = 'hidden';
    }
    dlg.scrollTop = 0;
    if (empurrar) history.pushState({ peca: id }, '', `#${id}`);
  }

  function fechar({ voltar = true } = {}) {
    if (!dlg.open) return;
    dlg.close();
    document.documentElement.style.overflow = '';
    if (voltar && location.hash) history.pushState(null, '', location.pathname + location.search);
  }

  /* ---------- Eventos ---------- */
  function cliqueNoMural(e) {
    const pin = e.target.closest('.pin[data-id]');
    if (!pin) return;
    if (e.target.closest('[data-parar]')) return;
    if (e.target.closest('[data-salvar]')) { e.stopPropagation(); alternarSalvo(pin.dataset.id); return; }
    abrir(pin.dataset.id);
  }
  $('#mural').addEventListener('click', cliqueNoMural);
  $('#cu-mais').addEventListener('click', cliqueNoMural);
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.pin[data-id]')) {
      e.preventDefault();
      abrir(e.target.dataset.id);
    }
  });

  $('#cu-salvar').addEventListener('click', () => alternarSalvo(atual.id));
  $('[data-fechar]').addEventListener('click', () => fechar());
  dlg.addEventListener('cancel', (e) => { e.preventDefault(); fechar(); });
  dlg.addEventListener('click', (e) => { if (e.target === dlg) fechar(); });

  $('#cu-compartilhar').addEventListener('click', async () => {
    const url = `${location.origin}${location.pathname}#${atual.id}`;
    try {
      if (navigator.share) await navigator.share({ title: `${atual.nome} · Nóli`, url });
      else { await navigator.clipboard.writeText(url); toast('Link copiado'); }
    } catch {}
  });

  window.addEventListener('popstate', () => {
    const id = location.hash.slice(1);
    if (id && PECAS.some((p) => p.id === id)) abrir(id, { empurrar: false });
    else fechar({ voltar: false });
  });

  let tBusca;
  $('#busca').addEventListener('input', (e) => {
    clearTimeout(tBusca);
    tBusca = setTimeout(() => { estado.busca = e.target.value.trim(); render(); }, 120);
  });

  function irParaMural() {
    const alvo = $('#chips').getBoundingClientRect().top + scrollY - 80;
    if (scrollY > alvo) scrollTo({ top: alvo });
  }

  $$('[data-tab]').forEach((b) => b.addEventListener('click', (e) => {
    e.preventDefault();
    fechar();
    estado.aba = b.dataset.tab;
    render();
    irParaMural();
  }));
  $$('[data-home]').forEach((b) => b.addEventListener('click', (e) => {
    e.preventDefault();
    fechar();
    Object.assign(estado, { aba: 'pecas', categoria: 'Todas', busca: '' });
    $('#busca').value = '';
    render();
    scrollTo({ top: 0, behavior: 'smooth' });
  }));
  $('[data-focus-busca]').addEventListener('click', () => {
    scrollTo({ top: 0, behavior: 'smooth' });
    $('#busca').focus();
  });

  /* ---------- Links fixos ---------- */
  $$('[data-whats]').forEach((a) => {
    a.href = linkWhats('Oi, Nóli! 🌸 Vim pelo site e queria saber mais sobre as peças.');
    a.target = '_blank';
    a.rel = 'noopener';
  });
  ['#link-instagram', '#link-instagram-2'].forEach((s) => { $(s).href = NOLI.instagram; });
  $('#ano').textContent = new Date().getFullYear();

  /* ---------- Início ---------- */
  montarChips();
  gravarSalvos();
  render();
  const inicial = location.hash.slice(1);
  if (inicial && PECAS.some((p) => p.id === inicial)) abrir(inicial, { empurrar: false });
})();
