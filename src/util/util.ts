import {path, os} from '../deps.ts'
import ProcessUncleanExitError from '../error.ts'
/*
 * Captures stdout/stderr for a child process
 */
interface Output {
	stdout: string;
	stderr: string;
}


/*
 * Returns an error message containing the stdout/stderr of the child process
 */
function mkErrorMsg(registryCommand: string, code: number, output: Output): Error {
	const stdout = output['stdout'].trim();
	const stderr = output['stderr'].trim();

	const msg = `${registryCommand} command exited with code ${code}:\n${stdout}\n${stderr}`;
	return new ProcessUncleanExitError(msg, code);
}


/*
 * Converts x86/x64 to 32/64
 */
function convertArchString(archString: string): string {
	if (archString == 'x64') {
		return '64';
	} else if (archString == 'x86') {
		return '32';
	} else {
		throw new Error(`illegal architecture: ${archString} (use x86 or x64)`);
	}
}


/*
 * Adds correct architecture to reg args
 */
function pushArch(args: string[], arch?: string) {
	if (arch) {
		args.push('/reg:' + convertArchString(arch));
	}
}

/*
 * Get the path to system's reg.exe. Useful when another reg.exe is added to the PATH
 * Implemented only for Windows
 */
function getRegExePath(utf8: boolean): string {
  if (os.platform() === 'windows') {
	if (utf8) {
	  return path.join(Deno.env.get('windir')!, 'system32', 'chcp.com') + ' 65001 | ' + path.join(Deno.env.get('windir')!, 'system32', 'reg.exe');
	} else {
	  return path.join(Deno.env.get('windir')!, 'system32', 'reg.exe');
	}
  } else {
	  return "REG";
  }
}

export {
	mkErrorMsg,
	pushArch,
	getRegExePath,
}