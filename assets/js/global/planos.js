(function () {
    /* ---- State ---- */
  
    const STATE = {
      seletor: '',
      umMes: {
        urlCheckout: 'https://pay.hotmart.com/O83035043N?off=3z8pduvo&checkoutMode=10'
      },
      tresMeses: {
        urlCheckout: 'https://pay.hotmart.com/O83035043N?off=gytek6ka&checkoutMode=10'
      },
      seisMeses: {
        urlCheckout: 'https://pay.hotmart.com/O83035043N?off=kgeow3yj&checkoutMode=10'
      },
    }
  
    /* ---- Elements ---- */
  
    const sectionQuadro = document.querySelector('section[name="quadro"]')
  
    const botaoUm = sectionQuadro.querySelector('button[name="umMes"]')
    const botaoTres = sectionQuadro.querySelector('button[name="tresMeses"]')
    const botaoSeis = sectionQuadro.querySelector('button[name="seisMeses"]')
    const botaoAssinar = sectionQuadro.querySelector('a[name="assinar"]')
  
    /* ---- Methods ---- */
  
    function habilitarEventos () {
      clicouAssinar()
  
      clicouBotaoUm()
      clicouBotaoTres()
      clicouBotaoSeis()
    }
  
    document.addEventListener("DOMContentLoaded", function() {
      STATE.seletor = 'tresMeses'
  
      limpar()
      importarPlano(STATE.tresMeses)
      ativarBotaoPlano(botaoTres)
    })
  
    /* ---- Events ---- */
  
    function clicouAssinar () {
      botaoAssinar.addEventListener('click', callbackClicouAssinar)
    }
  
    // Planos
  
    function clicouBotaoUm () {
      botaoUm.addEventListener('click', callbackClicouBotaoUm)
    }
  
    function clicouBotaoTres () {
      botaoTres.addEventListener('click', callbackClicouBotaoTres)
    }
  
    function clicouBotaoSeis () {
      botaoSeis.addEventListener('click', callbackClicouBotaoSeis)
    }
  
    /* ---- Callbacks ---- */
  
    function callbackClicouAssinar () {
      const url = botaoAssinar.getAttribute('href')
      window.location.assign(url)
    }
  
    // Planos
  
    function callbackClicouBotaoUm () {
      STATE.seletor = 'umMes'
  
      limpar()
      importarPlano(STATE.umMes)
      ativarBotaoPlano(botaoUm)
    }
  
    function callbackClicouBotaoTres () {
      STATE.seletor = 'tresMeses'
  
      limpar()
      importarPlano(STATE.tresMeses)
      ativarBotaoPlano(botaoTres)
    }
  
    function callbackClicouBotaoSeis () {
      STATE.seletor = 'seisMeses'
  
      limpar()
      importarPlano(STATE.seisMeses)
      ativarBotaoPlano(botaoSeis)
    }
  
    /* ---- View ---- */
  
    function limpar () {
      botaoAssinar.removeAttribute('href')
      desativarBotoesPlanos()
    }
  
    function importarPlano (dados) {
      botaoAssinar.setAttribute('href', dados.urlCheckout)
    }
  
    // Botao do Plano
  
    function ativarBotaoPlano (button) {
      desativarBotoesPlanos()
      button.classList.add('ativo')
    }
  
    function desativarBotoesPlanos () {
      botaoUm.classList.remove('ativo')
      botaoTres.classList.remove('ativo')
      botaoSeis.classList.remove('ativo')
    }
  
    /* ---- Start ---- */
  
    habilitarEventos()
  }())
  