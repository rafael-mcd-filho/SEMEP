# Importar o rastreamento de WhatsApp no GTM

Este pacote é aditivo. Ele não altera nem remove as tags atuais do contêiner `GTM-MSMZLGGJ`, inclusive a conversão de visualização de página.

Arquivo: `semep-google-ads-import.json`

## Itens adicionados

- 1 tag: `Google Ads - WhatsApp - Conversão dinâmica`.
- 1 acionador: `CE - WhatsApp - Conversão Google Ads`.
- 3 variáveis:
  - `DLV - whatsapp_click_id`;
  - `JS - WhatsApp - Grupo Google Ads`;
  - `JS - Google Ads - Label WhatsApp`.

A classificação possui 89 IDs válidos, distribuídos entre oito conversões sem sobreposição. Currículo e três botões de dúvidas legais não disparam a tag.

## Importação

1. No GTM `GTM-MSMZLGGJ`, crie um workspace novo.
2. Acesse **Administrador > Importar contêiner**.
3. Selecione `semep-google-ads-import.json`.
4. Escolha o workspace novo.
5. Selecione **Mesclar**.
6. Confira que o resumo mostra somente 1 nova tag, 1 novo acionador e 3 novas variáveis.
7. Se o GTM indicar remoção ou alteração das tags existentes, cancele a importação.
8. Confirme.

## Teste no Preview

- Home, botão flutuante: grupo `geral`.
- Atendimento adulto, Hero: grupo `adulto`.
- Atendimento infantil, Hero: grupo `infantil`.
- Uma página de cada especialidade.
- Currículo: a tag dinâmica não pode disparar.
- Dúvida legal: a tag dinâmica não pode disparar.

Em cada clique válido, somente `Google Ads - WhatsApp - Conversão dinâmica` deve disparar para o evento `whatsapp_click`.

Após validar, publique o workspace.
