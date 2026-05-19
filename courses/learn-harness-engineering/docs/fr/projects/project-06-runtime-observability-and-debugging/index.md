[中文版本 →](../../../zh/projects/project-06-runtime-observability-and-debugging/)

> Leçons liées : [Leçon 11. Rendre le runtime de l'agent observable](./../../lectures/lecture-11-why-observability-belongs-inside-the-harness/index.md) · [Leçon 12. Handoff propre à la fin de chaque session](./../../lectures/lecture-12-why-every-session-must-leave-a-clean-state/index.md)
> Fichiers modèles : [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/fr/resources/templates/)

# Projet 06. Construire un harness complet pour agents (capstone)

## Ce que vous faites

C'est le projet final. Assemblez tout ce qui a été appris dans les cinq premiers projets, exécutez un benchmark complet, puis faites une passe de nettoyage pour vérifier que la qualité reste maintenable.

Utilisez un ensemble fixe de tâches multi-fonctionnalités couvrant une tranche complète du produit : import de documents, indexation, Q&A avec citations, observabilité runtime et état de dépôt lisible et redémarrable. Lancez d'abord avec un baseline de harness faible, puis avec votre harness le plus fort, puis nettoyez et relancez. Enfin, réalisez une expérience d'ablation du harness : retirez un composant à la fois et voyez lesquels comptent vraiment.

## Outils

- Claude Code ou Codex
- Git
- Node.js + Electron
- Modèle de document qualité
- Grille d'évaluation
- Tous les composants de harness accumulés dans les cinq premiers projets

## Mécanisme de harness

Harness complet : tous les mécanismes + observabilité + étude d'ablation
