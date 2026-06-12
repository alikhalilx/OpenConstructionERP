import type { AISettings } from '@/features/ai/api';

const PROVIDER_KEY_FLAGS: (keyof AISettings)[] = [
  'anthropic_api_key_set',
  'openai_api_key_set',
  'gemini_api_key_set',
  'openrouter_api_key_set',
  'mistral_api_key_set',
  'groq_api_key_set',
  'deepseek_api_key_set',
  'together_api_key_set',
  'fireworks_api_key_set',
  'perplexity_api_key_set',
  'cohere_api_key_set',
  'ai21_api_key_set',
  'xai_api_key_set',
  'zhipu_api_key_set',
  'baidu_api_key_set',
  'yandex_api_key_set',
  'gigachat_api_key_set',
  'kimi_api_key_set',
];

export function isAiConfigured(settings: AISettings | null | undefined): boolean {
  if (!settings) return false;
  if (PROVIDER_KEY_FLAGS.some((flag) => settings[flag] === true)) return true;
  return Boolean(settings.ollama_base_url?.trim()) || Boolean(settings.vllm_base_url?.trim());
}
