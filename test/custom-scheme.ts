//This test is for custom scheme
import { Registry } from '../src/mod.ts';

const registry = new Registry({
	hive: Registry.HKCU,
	key: '\\Software\\Classes\\denoreg-debug'
});


const res = await registry.get(Registry.DEFAULT_VALUE, (err, res) => res || err);

console.log(res);