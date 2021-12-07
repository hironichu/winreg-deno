//This test is for custom scheme
import { Registry } from '../mod.ts';

const registry = new Registry({
	hive: Registry.HKCU,
	key: '\\Software\\Classes\\Discord'
});


const res = await registry.keyExists();

console.log(res);