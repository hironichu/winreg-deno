export * as path from 'https://deno.land/std@0.117.0/path/mod.ts'
import os from "https://deno.land/x/dos@v0.11.0/mod.ts";
export { $ } from "https://deno.land/x/garn_exec@0.3.3/exec.js";
import { isWsl } from "https://raw.githubusercontent.com/denorg/is-wsl/master/mod.ts";

const wslState = await isWsl();
const currentOS: string = wslState ? 'windows' : os.platform()

export {os, currentOS, wslState}