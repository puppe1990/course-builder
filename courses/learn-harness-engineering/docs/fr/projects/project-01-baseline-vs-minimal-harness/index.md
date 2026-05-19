[中文版本 →](../../../zh/projects/project-01-baseline-vs-minimal-harness/)

> Leçons liées : [Leçon 01. Les modèles forts ne garantissent pas une exécution fiable](./../../lectures/lecture-01-why-capable-agents-still-fail/index.md) · [Leçon 02. Ce que signifie vraiment harness](./../../lectures/lecture-02-what-a-harness-actually-is/index.md)
> Fichiers modèles : [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/fr/resources/templates/)

# Projet 01. Prompt seul vs règles d'abord : quelle différence cela fait-il ?

## Ce que vous faites

Construisez le squelette minimal d'une application Electron de base de connaissances : une fenêtre avec une liste de documents à gauche, un panneau Q&A à droite et un dossier de données local. La tâche elle-même n'est pas complexe. Ce qui est complexe, c'est la manière de faire en sorte que l'agent la termine.

Vous l'exécutez deux fois. Première fois : seulement un prompt, sans préparation. Deuxième fois : `AGENTS.md`, `init.sh` et `feature_list.json` déjà placés dans le dépôt. Ensuite, comparez.

Le cœur de ce projet n'est pas d'écrire du code, mais de mesurer l'écart entre "passer 15 minutes à préparer les règles" et "laisser simplement l'agent partir".

## Outils

- Claude Code ou Codex (choisissez-en un et gardez-le pour les deux exécutions)
- Git (gérer les branches et comparer)
- Node.js + Electron (stack du projet)
- Un minuteur (noter la durée de chaque exécution)

## Mécanisme de harness

Harness minimal : `AGENTS.md` + `init.sh` + `feature_list.json`
