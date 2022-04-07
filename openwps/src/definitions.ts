export interface openwpsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
