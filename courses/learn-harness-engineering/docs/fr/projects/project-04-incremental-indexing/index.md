[中文版本 →](../../../zh/projects/project-04-incremental-indexing/)

> Leçons liées : [Leçon 07. Définir des limites de tâche claires pour les agents](./../../lectures/lecture-07-why-agents-overreach-and-under-finish/index.md) · [Leçon 08. Utiliser les listes de fonctionnalités pour contraindre ce que fait l'agent](./../../lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md)
> Fichiers modèles : [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/fr/resources/templates/)

# Projet 04. Utiliser le feedback runtime pour corriger le comportement de l'agent

## Ce que vous faites

Ajoutez de l'observabilité runtime, comme les logs de démarrage, les logs d'import/indexation et les états d'erreur, ainsi que des contraintes d'architecture pour éviter les violations entre couches. Introduisez un bug runtime que l'agent devra corriger.

Vous l'exécutez deux fois : d'abord sans logs ni contraintes, puis avec les bons outils et règles.

## Outils

- Claude Code ou Codex
- Git
- Node.js + Electron

## Mécanisme de harness

Feedback runtime + contrôle du scope + indexation incrémentale
