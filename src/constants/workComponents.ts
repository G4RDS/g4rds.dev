import type { CollectionEntry } from 'astro:content';
import { GradientBorderButton } from '../components/works/GradientBorderButton/GradientBorderButton';

export const workComponents = {
  'gradient-border-button': GradientBorderButton,
} as const satisfies Record<CollectionEntry<'works'>['slug'], any>;
