import { ModuleData, Topic } from '../../types';
import { modul1 } from './modul1';
import { modul2 } from './modul2';
import { modul3 } from './modul3';
import { modul4 } from './modul4';
import { modul5 } from './modul5';
import { modul6 } from './modul6';
import { modul7 } from './modul7';

export const allModules: ModuleData[] = [
  modul1,
  modul2,
  modul3,
  modul4,
  modul5,
  modul6,
  modul7
];

export const allTopics: Topic[] = allModules.flatMap((m) => m.topics);

export function getModuleBySlug(slug: string): ModuleData | undefined {
  return allModules.find((m) => m.slug === slug);
}

export function getTopicById(id: string): Topic | undefined {
  return allTopics.find((t) => t.id === id);
}

export function getTopicBySlug(moduleSlug: string, topicSlug: string): Topic | undefined {
  const mod = getModuleBySlug(moduleSlug);
  return mod?.topics.find((t) => t.slug === topicSlug);
}

export function getAdjacentTopics(topicId: string): { prev?: Topic; next?: Topic } {
  const index = allTopics.findIndex((t) => t.id === topicId);
  if (index === -1) return {};
  return {
    prev: index > 0 ? allTopics[index - 1] : undefined,
    next: index < allTopics.length - 1 ? allTopics[index + 1] : undefined
  };
}
