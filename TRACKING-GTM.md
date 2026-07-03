# Rastreamento de cliques no WhatsApp

O site envia um objeto ao `window.dataLayer` sempre que o visitante clica em qualquer link do WhatsApp. O rastreamento funciona para `WaButton`, `NeonBtn` e links comuns com destino ao WhatsApp.

## Evento

Nome do evento: `whatsapp_click`

Variáveis enviadas:

- `whatsapp_click_id`: identificador consolidado no formato `pagina__secao__botao`.
- `whatsapp_button_text`: texto ou `aria-label` do botão.
- `whatsapp_button_location`: seção, título ou localização informada manualmente.
- `whatsapp_page_path`: caminho da página.
- `whatsapp_page_title`: título da página.
- `whatsapp_phone`: número de destino.

O link completo e a mensagem pré-preenchida não são enviados para evitar que dados desnecessários cheguem à plataforma de destino.

## Importante: o GTM não armazena os cliques

O Google Tag Manager recebe o evento e decide qual tag deve ser disparada, mas não funciona como relatório ou histórico. A tag de destino pode ser, por exemplo, uma conversão do Google Ads, um evento do Meta Pixel ou outra plataforma. Não é necessário usar GA4.

## Passo 1: criar a variável que identifica o botão

No GTM:

1. Acesse **Variáveis**.
2. Em **Variáveis definidas pelo usuário**, clique em **Nova**.
3. Escolha **Variável da camada de dados**.
4. Em **Nome da variável da camada de dados**, informe `whatsapp_click_id`.
5. Mantenha a versão 2 e salve com o nome `DLV - whatsapp_click_id`.

Essa é a única variável obrigatória para separar os botões. Exemplo de valor recebido:

```text
home__botao-flutuante__falar-no-whatsapp
```

Se quiser usar mais informações nas tags, repita o processo para:

- `whatsapp_button_text`
- `whatsapp_button_location`
- `whatsapp_page_path`

## Passo 2: escolher o ID na lista pronta

Todos os CTAs possuem IDs explícitos e estáveis. Não é necessário descobrir os valores clicando em cada botão.

### Home

| Local | `whatsapp_click_id` |
|---|---|
| Cabeçalho desktop | `home__cabecalho-desktop__agendar` |
| Menu mobile | `home__menu-mobile__agendar` |
| Hero | `home__hero__agendar` |
| Seção Sobre | `home__sobre__informacoes` |
| Atendimento infantil | `home__publico-infantil__informacoes` |
| Atendimento adulto | `home__publico-adulto__informacoes` |
| Como funciona | `home__como-funciona__iniciar-atendimento` |
| Convênios | `home__convenios__confirmar-cobertura` |
| FAQ | `home__faq__tirar-duvidas` |
| Contato | `home__contato__falar-no-whatsapp` |
| Rodapé | `home__rodape__telefone-whatsapp` |
| Botão flutuante | `home__botao-flutuante__falar-no-whatsapp` |

### Atendimento adulto

| Local | `whatsapp_click_id` |
|---|---|
| Cabeçalho desktop | `atendimento-adulto__cabecalho-desktop__agendar` |
| Menu mobile | `atendimento-adulto__menu-mobile__agendar` |
| Hero | `atendimento-adulto__hero__agendar` |
| Convênios | `atendimento-adulto__convenios__confirmar-cobertura` |
| FAQ | `atendimento-adulto__faq__tirar-duvidas` |
| CTA final | `atendimento-adulto__cta-final__falar-no-whatsapp` |
| Rodapé | `atendimento-adulto__rodape__telefone-whatsapp` |

### Atendimento infantil

| Local | `whatsapp_click_id` |
|---|---|
| Cabeçalho desktop | `atendimento-infantil__cabecalho-desktop__agendar` |
| Menu mobile | `atendimento-infantil__menu-mobile__agendar` |
| Hero | `atendimento-infantil__hero__agendar` |
| Informações sobre ABA | `atendimento-infantil__especialidades__informacoes-aba` |
| Convênios | `atendimento-infantil__convenios__confirmar-cobertura` |
| FAQ | `atendimento-infantil__faq__tirar-duvidas` |
| CTA da equipe infantil | `atendimento-infantil__cta-equipe__falar-com-equipe` |
| Rodapé | `atendimento-infantil__rodape__telefone-whatsapp` |

### Páginas de especialidades

As páginas `psiquiatria`, `psicologia`, `fonoaudiologia`, `nutricao` e `neuropsicologia` possuem os mesmos sufixos. Substitua `{pagina}` pelo nome indicado:

| Local | `whatsapp_click_id` |
|---|---|
| Cabeçalho desktop | `{pagina}__cabecalho-desktop__agendar` |
| Menu mobile | `{pagina}__menu-mobile__agendar` |
| Hero | `{pagina}__hero__agendar` |
| Convênios | `{pagina}__convenios__confirmar-cobertura` |
| FAQ | `{pagina}__faq__tirar-duvidas` |
| CTA final | `{pagina}__cta-final__falar-no-whatsapp` |
| Rodapé | `{pagina}__rodape__telefone-whatsapp` |

Exemplo: `psiquiatria__hero__agendar`.

### Equipe

| Local | `whatsapp_click_id` |
|---|---|
| Cabeçalho desktop | `equipe__cabecalho-desktop__agendar` |
| Menu mobile | `equipe__menu-mobile__agendar` |
| Dr. Rômulo Antônio | `equipe__profissionais__agendar-dr-romulo-antonio` |
| Dra. Carla Medeiros | `equipe__profissionais__agendar-dra-carla-medeiros` |
| Dra. Ana Beatriz Silva | `equipe__profissionais__agendar-dra-ana-beatriz-silva` |
| Dra. Mariana Costa | `equipe__profissionais__agendar-dra-mariana-costa` |
| Dr. Lucas Araújo | `equipe__profissionais__agendar-dr-lucas-araujo` |
| Psicopedagogia provisória | `equipe__profissionais__agendar-psicopedagogia` |
| Terapia ocupacional provisória | `equipe__profissionais__agendar-terapeuta-ocupacional` |
| Analista ABA provisório | `equipe__profissionais__agendar-analista-aba` |
| Psicologia provisória | `equipe__profissionais__agendar-psicologia-adulto` |
| Enviar currículo | `equipe__oportunidades__enviar-curriculo` |
| CTA final | `equipe__cta-final__falar-no-whatsapp` |
| Rodapé | `equipe__rodape__telefone-whatsapp` |

### Sobre

| Local | `whatsapp_click_id` |
|---|---|
| Cabeçalho desktop | `sobre__cabecalho-desktop__agendar` |
| Menu mobile | `sobre__menu-mobile__agendar` |
| CTA final | `sobre__cta-final__falar-no-whatsapp` |
| Rodapé | `sobre__rodape__telefone-whatsapp` |

### Páginas legais

As páginas `politica-de-privacidade`, `termos-de-uso` e `lgpd` possuem:

| Local | `whatsapp_click_id` |
|---|---|
| Cabeçalho desktop | `{pagina}__cabecalho-desktop__agendar` |
| Menu mobile | `{pagina}__menu-mobile__agendar` |
| Dúvidas sobre o documento | `{pagina}__documento-legal__tirar-duvidas` |
| Rodapé | `{pagina}__rodape__telefone-whatsapp` |

Exemplo: `lgpd__documento-legal__tirar-duvidas`.

## Passo 3: criar um acionador separado para um botão

Para cada botão que precisar de uma tag própria:

1. Acesse **Acionadores** e clique em **Novo**.
2. Escolha **Evento personalizado**.
3. Em **Nome do evento**, informe `whatsapp_click`.
4. Selecione **Alguns eventos personalizados**.
5. Configure a condição:

```text
DLV - whatsapp_click_id | é igual a | ID escolhido na lista acima
```

6. Salve com um nome descritivo, por exemplo `CE - WhatsApp - Botão flutuante da Home`.
7. Associe esse acionador à tag da plataforma de destino.

Repita o passo 3 apenas quando cada botão precisar disparar uma tag ou conversão diferente.

## Alternativa recomendada: uma única tag para todos os botões

Se a plataforma de destino aceita parâmetros, não é necessário criar uma tag por botão:

1. Crie um acionador de **Evento personalizado** com o nome `whatsapp_click`, selecionando **Todos os eventos personalizados**.
2. Use esse único acionador em uma única tag.
3. Envie `{{DLV - whatsapp_click_id}}` como parâmetro da tag.

Assim todos os cliques usam a mesma tag, mas continuam identificados separadamente pelo valor de `whatsapp_click_id`.

## Validação

Use o modo **Visualizar** do GTM apenas para validar a configuração:

1. Conecte o Tag Assistant ao site.
2. Clique no botão desejado.
3. Selecione o evento `whatsapp_click`.
4. Confirme se o acionador e a tag esperados foram disparados.

## Identificação no código

Novos botões devem receber um `trackingId` com os segmentos de local e ação. A página é acrescentada automaticamente:

```jsx
<WaButton
  trackingId="hero__agendar"
  message="Olá! Gostaria de agendar uma consulta."
>
  Falar no WhatsApp
</WaButton>
```

Links HTML comuns devem usar `data-whatsapp-id="hero__agendar"`.
