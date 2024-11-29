# My Cypress Automation


Esse projeto utiliza cypress para automatizar um site em três partes. 
- Verificar se no login teve sucesso ou erro.
- Após o sucesso no login no site, ele acessa o Dashboard e verifica se está correto, se está no dashboard.
- Depois ele acessa o menu My Info e preenche um formulário tudo automatizado e finaliza salvando os dados.

site: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login


## Installation
```bash
npm install
```

>**NOTE:**
>
> Precisa ter o **nodejs** instalado

## Running
```bash
# Rodar cypress com interface grafica
npx cypress open

# Rodas cypress em linha de comando
npx cypress run
```
