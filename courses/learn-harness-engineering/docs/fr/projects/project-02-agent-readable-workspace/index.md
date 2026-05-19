[中文版本 →](../../../zh/projects/project-02-agent-readable-workspace/)

> Leçons liées : [Leçon 03. Faire du dépôt votre source de vérité unique](./../../lectures/lecture-03-why-the-repository-must-become-the-system-of-record/index.md) · [Leçon 04. Répartir les instructions entre plusieurs fichiers](./../../lectures/lecture-04-why-one-giant-instruction-file-fails/index.md)
> Fichiers modèles : [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/fr/resources/templates/)

# Projet 02. Rendre le projet lisible et reprendre là où vous vous êtes arrêté

## Ce que vous faites

Ajoutez de la "lisibilité" au dépôt pour qu'un nouvel agent comprenne rapidement la structure du projet, connaisse l'avancement actuel et reprenne le travail. Concrètement : implémentez l'import de documents, la vue de détail et la persistance locale, en deux sessions.

Vous l'exécutez deux fois : d'abord sans aide, puis avec `ARCHITECTURE.md`, `PRODUCT.md` et `session-handoff.md` déjà placés dans le dépôt.

## Outils

- Claude Code ou Codex
- Git
- Node.js + Electron

## Mécanisme de harness

Workspace lisible par l'agent + fichiers d'état persistants
