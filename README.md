# frameworks-front-end
Repositório da disciplina Frameworks Front-end

# Como iniciar a aplicação
```
ng serve --ssl
```

# Atividade prática

1. Permitir ao usuário filtrar os registros em "Agenda" e "Atendimento" por profissional.

    - As opções de filtro aplicadas pelo usuário devem ser aplicadas em "Agenda" e "Atendimento". Isto é, ao mudar de "Agenda" para "Atendimento", as mesmas opções de filtro devem ser usadas.
    - Quando o usuário mudar página e retornar, as opções de filtro devem permanecer aplicadas.
    - SUGESTÃO: Criar endpoints no back-end para aplicar o filtro.
    
2. Impedir que o usuário selecione horários já ocupados para um profissional em uma determinada data.

    - Sempre que o usuário alterar a data ou o profissional, as opções de horário devem ser atualizadas.
    - DICA: O back-end já possui um endpoint que retorna os horários ocupados para um profissional por data.
