import { getOrLoadRemote } from "./getOrLoadRemote";

type Factory<T> = () => Promise<{ default: T }>;

type Container<T> = {
  get(module: string): Promise<Factory<T>>;
};

export const loadComponent =
  <T>(remote: string, sharedScope: string, module: string, url?: string) =>
  async () => {
    await getOrLoadRemote(remote, sharedScope, url);
    const container: Container<T> = window[remote];
    const factory = await container.get(module);
    const Module = factory();
    return Module;
  };
