export function DeepCopy<T>(args: T): T {
  return Parse(Stringify(args)) as T;
}

export function Stringify<T>(args: T): string {
  return JSON.stringify(args);
}

export function Parse(args: string): any {
  return args ? JSON.parse(args) : null;
}
