# Git Flow

[Trabalhando em equipe com Git Flow](https://www.youtube.com/watch?v=394mc6PV8t8&t=1s)

## Comandos que foram apresentados na vídeo aula

### Iniciando controle para projeto em equipe
```
git flow init
```

### Criando css
```
git flow feature start css
```

### css criado e finalizado
```
git flow feature finish css
```

### css não finalizado e publicado
```
git flow feature publish css (para o time continuar mexendo)
```

### iniciando release 
```
git flow release start 1.0
```

### finalizando release
```
git flow release finish 1.0
```

### verificando versões 
```
git tag
```

### pequenas aletrações na versãoa atual
```
git flow hotfix start 1.1
```

### aleterações finalizadas
```
git flow hotfix finish 1.1
```

### fazendo push em todas as branchs 
```
git push --all 
```
