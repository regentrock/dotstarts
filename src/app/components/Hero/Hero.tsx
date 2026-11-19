import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="topo">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Coluna esquerda: conteúdo */}
          <div className={styles.content}>
            <span className={styles.pill}>
              <span className={styles.dot}>
                <svg className={styles.iconSmall} aria-hidden="true">
                  <use href="#i-check" />
                </svg>
              </span>
              Sites para lojas, comércios e prestadores de serviço
            </span>

            <h1 className={styles.title}>
              Um site profissional que transforma buscas em{' '}
              <span className={styles.highlight}>clientes</span>.
            </h1>

            <p className={styles.lead}>
              Crio sites institucionais e landing pages rápidos, claros e fáceis de
              contatar, para o seu negócio ser encontrado e escolhido por quem já está
              procurando.
            </p>

            <div className={styles.cta}>
              <a className={styles.btnPrimary} href="#contato">
                Solicitar orçamento
                <svg className={styles.iconSmall} aria-hidden="true">
                  <use href="#i-arrow" />
                </svg>
              </a>
              <a className={styles.btnGhost} href="#servicos">
                Conhecer os serviços
              </a>
            </div>

            <ul className={styles.points}>
              <li>
                <svg className={styles.icon} aria-hidden="true">
                  <use href="#i-bolt" />
                </svg>
                <span>
                  <strong>Entrega rápida</strong>
                  Seu site no ar em poucos dias.
                </span>
              </li>
              <li>
                <svg className={styles.icon} aria-hidden="true">
                  <use href="#i-phone" />
                </svg>
                <span>
                  <strong>Feito para o celular</strong>
                  Leitura e contato fáceis em qualquer tela.
                </span>
              </li>
              <li>
                <svg className={styles.icon} aria-hidden="true">
                  <use href="#i-search" />
                </svg>
                <span>
                  <strong>Pronto para o Google</strong>
                  Estrutura pensada para busca local.
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna direita: seta de crescimento */}
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.chartCard}>
              <div className={styles.chartHeader}>
                <div>
                  <span className={styles.chartLabel}>Crescimento</span>
                  <span className={styles.chartMetric}>+187%</span>
                </div>
                <span className={styles.chartBadge}>
                  <svg className={styles.iconTiny} aria-hidden="true">
                    <use href="#i-up" />
                  </svg>
                  este ano
                </span>
              </div>

              <svg
                className={styles.chart}
                viewBox="0 0 320 200"
                preserveAspectRatio="none"
              >
                {/* Grid sutil */}
                <line x1="0" y1="50" x2="320" y2="50" className={styles.chartGrid} />
                <line x1="0" y1="100" x2="320" y2="100" className={styles.chartGrid} />
                <line x1="0" y1="150" x2="320" y2="150" className={styles.chartGrid} />

                {/* Área sob a curva */}
                <path
                  d="M0,180 C60,170 100,150 140,120 C180,90 220,60 260,40 C285,28 305,22 320,20 L320,200 L0,200 Z"
                  className={styles.chartArea}
                />

                {/* Linha de crescimento */}
                <path
                  d="M0,180 C60,170 100,150 140,120 C180,90 220,60 260,40 C285,28 305,22 320,20"
                  className={styles.chartLine}
                />

                {/* Ponto final com destaque */}
                <circle cx="320" cy="20" r="5" className={styles.chartPoint} />
              </svg>

              <div className={styles.chartFooter}>
                <div className={styles.chartStat}>
                  <span className={styles.chartStatLabel}>Visitas</span>
                  <span className={styles.chartStatValue}>2.4k</span>
                </div>
                <div className={styles.chartStat}>
                  <span className={styles.chartStatLabel}>Contatos</span>
                  <span className={styles.chartStatValue}>312</span>
                </div>
                <div className={styles.chartStat}>
                  <span className={styles.chartStatLabel}>Conversão</span>
                  <span className={styles.chartStatValue}>13%</span>
                </div>
              </div>
            </div>

            {/* Badge flutuante */}
            <div className={styles.floatBadge}>
              <span className={styles.floatIcon}>
                <svg className={styles.icon} aria-hidden="true">
                  <use href="#i-message" />
                </svg>
              </span>
              <span>
                <strong>Novo pedido de orçamento</strong>
                <small>Recebido pelo WhatsApp</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}