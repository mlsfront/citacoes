## Configurando Inicial

### Sequelize é uma biblioteca Javascript que facilita o gerenciamento do banco de dados SQL
```
npm install --save sequelize
```

### Instalar o drive do banco de dados "no projeto foi usado mysql2"
```
npm install --save mysql2
```

### Sequelize-cli interface de linha de comando usada para criar modelos, configurações e arquivos de migração para bancos de dados
```
npm install --save-dev sequelize-cli
```

### Iniciar o Sequelize-cli e criar o arquivo config
```
npx sequelize-cli init
```

### Manipular variáveis de ambiente
```
npm install dotenv --save
```

## Criando e Alterando Tabelas

### Criar a migration da página home do conteúdo do topo 
```
npx sequelize-cli migration:generate --name create-homes
```

### Criar a migration acrescentar a coluna imageTop
```
npx sequelize-cli migration:generate --name alter-homes-add-imagetop
```

## Subundo as tabelas para o Banco de Dados

### Executar as migrations
```
npx sequelize-cli db:migrate
```

### Executar down - rollback - Permite que seja desfeita a migration, permitindo a gestão das alterações do banco de dados e versionamento.
```
npx sequelize-cli db:migrate:undo --name nome-da-migration
```

### Criar a Models da página home do conteúdo do topo 
```
npx sequelize-cli model:generate --name HomesTops --attributes titleOneTop:string,titleTwoTop:string,titleThreeTop:string,linkBtnTop:string,textBtnTop:string,imageTop:string
```

## Adicionando Dados Inicais para Tabelas

### Criar seeders
```
npx sequelize-cli seed:generate --name demo-homestops
```

### Executar as seeders
```
npx sequelize-cli db:seed:all
```

### Executar uma seed
```
npx sequelize-cli db:seed --seed nome-da-seed
```

### Executar down - rollback - Permite que seja desfeita todas as seed, permitindo a gestão das alterações do banco de dados e versionamento.
```
npx sequelize-cli db:seed:undo
```

### Executar down - rollback - Permite que seja desfeita uma única seed, permitindo a gestão das alterações do banco de dados e versionamento.
```
npx sequelize-cli db:seed:undo --seed nome-da-seed
```

