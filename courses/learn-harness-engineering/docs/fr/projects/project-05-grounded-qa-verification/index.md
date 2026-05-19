[中文版本 →](../../../zh/projects/project-05-grounded-qa-verification/)

> Leçons liées : [Leçon 09. Empêcher les agents de déclarer la victoire trop tôt](./../../lectures/lecture-09-why-agents-declare-victory-too-early/index.md) · [Leçon 10. Seule une exécution de pipeline complet compte comme vraie vérification](./../../lectures/lecture-10-why-end-to-end-testing-changes-results/index.md)
> Fichiers modèles : [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/fr/resources/templates/)

# Projet 05. Faire vérifier son propre travail par l'agent

## Ce que vous faites

Implémentez la séparation des rôles : un generator qui implémente, un evaluator qui relit, et éventuellement un planner. Exécutez trois fois pour mesurer l'effet de chaque rôle ajouté.

Choisissez une amélioration substantielle de fonctionnalité, comme une conversation multi-tour, une refonte du panneau de citations ou un filtrage de documents, et gardez-la identique dans toutes les exécutions.

## Outils

- Claude Code ou Codex
- Git
- Node.js + Electron

## Mécanisme de harness

Auto-vérification + Q&A fondé sur des sources + finalisation basée sur des preuves
