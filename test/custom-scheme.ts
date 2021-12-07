//This test is for custom scheme
import { Registry } from '../mod.ts';

const registry = new Registry({
	hive: Registry.HKCU,
	key: '\\Software\\Classes\\denoreg-debug'
});


const res = await registry.get(Registry.DEFAULT_VALUE);

console.log(res);